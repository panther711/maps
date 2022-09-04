import { useContext } from 'react';
import { MapContext, PlacesContext } from '../context';

export const BtnMyLocation = () => {

    const { map, isMapReady } = useContext(MapContext)
    const { userLocation } = useContext(PlacesContext)

    const volverMiUbicacionActual = () => {
        if (!isMapReady) throw new Error('Mapa no esta listo')
        if (!userLocation) throw new Error('No hay ubicación del usuario')

        map?.flyTo({
            zoom: 14,
            center: userLocation
        })
    }

    return (
        <button
            className="btn border-secondary btn-outline-light"
            onClick={volverMiUbicacionActual}
            style={{
                backgroundColor: '#010101',
                color: '#f5f5f5',
                position: 'fixed',
                top: '20px',
                right: '20px',
                zIndex: 999
            }}
        >
            Tu Ubicación 📍
        </button>
    )
}