import { useReducer, useEffect } from 'react';
import { PlacesContext } from './PlacesContext';
import { PlacesReducer } from './PlacesReducer';

import { getUserLocation } from '../../helpers/getUserLocation';

import { searchApi } from '../../apis';

import { PlacesResponse, Feature } from '../../interfaces/places';

export interface PlacesState {
    isLoading: boolean
    userLocation?: [number, number]
    isLoadingPlaces: boolean
    places: Feature[]
}

const INITIAL_STATE: PlacesState = {
    isLoading: true,
    userLocation: undefined,
    isLoadingPlaces: false,
    places: []
}

interface Props {
    children: JSX.Element | JSX.Element[]

}

export const PlacesProvider = ({ children }: Props) => {

    const [state, dispatch] = useReducer(PlacesReducer, INITIAL_STATE)

    useEffect(() => {
        getUserLocation()
            .then(longitudYlatitudDeUser => dispatch({ type: 'setUserLocation', payload: longitudYlatitudDeUser }))
    }, [])

    const searchPlacesByTerm = async (query: string): Promise<Feature[]> => {

        if (query.length === 0) {
            dispatch({ type: 'setPlaces', payload: [] })
            return []
        }
        if (!state.userLocation) throw new Error('No hay ninguna ubicación del usuario')

        dispatch({ type: 'setLoadingPlaces' })

        const resp = await searchApi.get<PlacesResponse>(`/${query}.json`, {
            params: {
                proximity: state.userLocation.join(',')
            }
        })

        dispatch({ type: 'setPlaces', payload: resp.data.features })
        return resp.data.features
    }

    return (
        <PlacesContext.Provider value={{
            ...state,
            // Methods
            searchPlacesByTerm
        }}>
            {children}
        </PlacesContext.Provider>
    )
}