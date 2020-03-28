const axios = require('axios');

const getClima = async(lat, lon) => {
    // console.log(`Entra al clima ${lat}, ${lon}`);
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=6c1effb5333f502a393b0d75131678e3`);

    const temp = resp.data.main.temp;
    // console.log(`Temp: ${temp}`);
    return temp;
}

module.exports = {
    getClima
}