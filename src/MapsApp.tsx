import { PlacesProvider } from './context/places/PlacesProvider';

export const MapsApp = () => {
    return (
        <PlacesProvider>
            <h1>Hola mundo</h1>
        </PlacesProvider>
    )
}
