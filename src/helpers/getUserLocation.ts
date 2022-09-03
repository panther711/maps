
export const getUserLocation = async (): Promise<[number, number]> => {

    return new Promise((resolve, reject) => {

        navigator.geolocation.getCurrentPosition(
            ({ coords }) => { // -> Coordenadas para sacar la info de longitud y latitud
                resolve([coords.longitude, coords.latitude]) // -> Obtengo la longitud y latitud de la geolocalizacón del usuario
            },
            (err) => {
                alert('No se pudo obtener la geolocalización')
                console.log(err)
                reject()
            }
        )
    })
}