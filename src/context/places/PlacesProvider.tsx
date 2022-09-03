import { useReducer, useEffect } from 'react';
import { PlacesContext } from './PlacesContext';
import { PlacesReducer } from './PlacesReducer';
import { getUserLocation } from '../../helpers/getUserLocation';

export interface PlacesState {
    isLoading: boolean
    userLocation?: [number, number]
}

const INITIAL_STATE: PlacesState = {
    isLoading: true,
    userLocation: undefined
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

    return (
        <PlacesContext.Provider value={{ ...state }}>
            {children}
        </PlacesContext.Provider>
    )
}