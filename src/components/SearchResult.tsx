import { useContext, useState } from 'react';
import { PlacesContext, MapContext } from '../context';
import { Feature } from '../interfaces/places';
import { LoadingPlaces } from '.';

export const SearchResult = () => {

    const { places, isLoadingPlaces } = useContext(PlacesContext)
    const { map } = useContext(MapContext)

    const [activeId, setActiveId] = useState('')

    const onPlaceClicked = (place: Feature) => {
        setActiveId(place.id)

        const [lng, lat] = place.center

        map?.flyTo({
            zoom: 14,
            center: [lng, lat]
        })
    }

    if (isLoadingPlaces) return <LoadingPlaces />

    if (places.length === 0) return <></>

    return (
        <ul className="list-group mt-3 d-flex flex-column justify-content-center gap-2">
            {
                places.map(place => (
                    <li className={`list-group-item list-list-group-item-action bg-dark text-light ${activeId === place.id ? 'active' : ''}`}
                        key={place.id}
                        onClick={() => onPlaceClicked(place)}
                    >
                        <h6>{place.text_es}</h6>
                        <p className="text-muted"
                            style={{ fontSize: '12px' }}
                        >
                            {place.place_name}
                        </p>
                        <button className="btn btn-secondary btn-sm">
                            Dirección
                        </button>
                    </li>
                )
                )}
        </ul>
    )
}