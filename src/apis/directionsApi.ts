import axios from 'axios'

const directionsApi = axios.create({
    baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
    params: {
        alternatives: false,
        geometries: 'geojson',
        overview: 'simplified',
        steps: false,
        access_token: 'pk.eyJ1IjoiamVhbmR2IiwiYSI6ImNsN21raGh5cTFzcWEzb3FwNDZhcXp2aGoifQ.qq444J3nJ_eV7pFJ_yjW8Q'
    }
})

export default directionsApi