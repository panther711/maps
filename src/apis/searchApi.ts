import axios from 'axios'

const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        limit: 5,
        language: 'es',
        access_token: 'pk.eyJ1IjoiamVhbmR2IiwiYSI6ImNsN21raGh5cTFzcWEzb3FwNDZhcXp2aGoifQ.qq444J3nJ_eV7pFJ_yjW8Q'
    }
})

export default searchApi