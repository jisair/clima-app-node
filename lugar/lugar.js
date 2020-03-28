const axios = require('axios');


// console.log(encodeUrl);
const getLugarLatLng = async(direccion) => {
    const encodeUrl = encodeURI(direccion);
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: { 'x-rapidapi-key': 'f1a05f325dmshfa9aef41ec105e3p11ee94jsn7c2b2ddfbdc4' }
    });


    const resp = await instance.get()
    if (resp.data.Results.length === 0) {
        throw new Error(`No hay coordenadas para el lugar: ${direccion}`);
    }

    const data = resp.data.Results[0];
    const dir = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        dir,
        lat,
        lng
    }
}


module.exports = {
    getLugarLatLng
}