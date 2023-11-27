/**
 * OpenMeteoService module
 * @module OpenMeteoService
 */

/**
 * It allows to use http.
 * @constant http
 * @requires http
 */
const http = require('http');

/**
 * Check if it is weather is fine or not based on the current date and 
 * time and the weather code provided by the API.
 * @function WeatherisFineOrNot
 * @param latitude Latitude of the location to check the weather for.
 * @param longitude Longitude of the location to check the weather for.
 * @returns {Promise} A promise that resolves to a boolean indicating whether it is 
 * weather is fine or not.
 */
function WeatherType(latitude, longitude) {
    return new Promise((resolve, reject) => {
        http.get(`http://api.open-meteo.com/v1/forecast?latitude=${latitude.toFixed(5)}&longitude=${longitude.toFixed(5)}&hourly=weathercode`, function (response) {
            var buffer = ""
            var dataJson;
            response.on("data", function (chunk) {
                buffer += chunk;
            });
            response.on("end", function (err) {
                dataJson = JSON.parse(buffer);
                var date = new Date().toISOString().slice(0, 10);
                var hour = new Date().getHours();
                dataJson.hourly.time.forEach(function (time, i) {
                    if (time.slice(0, 10) == date && time.slice(11, 13) == hour) {
                        var weatherCode = dataJson.hourly.weathercode[i];
                        switch (weatherCode) {
                            case 0:
                                resolve('Sun');
                                break;
                            case 1:
                            case 2:
                            case 3:
                                resolve('Cloud');
                                break;
                            case 45:
                            case 48:
                                resolve('Fog');
                                break;
                            case 51:
                            case 53:
                            case 55:
                                resolve('Drizzle');
                                break;
                            case 56:
                            case 57:
                                resolve('Freezing Drizzle');
                                break;
                            case 61:
                            case 63:
                            case 65:
                                resolve('Rain');
                                break;
                            case 66:
                            case 67:
                                resolve('Freezing Rain');
                                break;
                            case 71:
                            case 73:
                            case 75:
                                resolve('Snow');
                                break;
                            case 77:
                                resolve('Snow grains');
                                break;
                            case 80:
                            case 81:
                            case 82:
                                resolve('Rain showers');
                                break;
                            case 85:
                            case 86:
                                resolve('Snow showers');
                                break;
                            case 95:
                            case 96:
                            case 99:
                                resolve('Thunderstorm');
                                break;
                            default:
                                resolve('Unknown');
                                break;
                        }
                    }
                });
            })
        })
    });
}
module.exports = {
    /**
    * ActionWeather is a Promise that is used to determine if the weather is fine or not.
    * @function ActionWeather
    * @param {float} latitude Latitude of the location to check the weather for.
    * @param {float} longitude Longitude of the location to check the weather for.
    * @returns {Promise} A Promise that resolves with a string describing the weather.
    */
    ActionWeather: function (latitude, longitude) {
        return new Promise((resolve, reject) => {
            WeatherType(latitude, longitude)
                .then(weatherType => {
                    resolve(weatherType)
                })
        })
            .catch(error => {
                console.log(error);
            });
    },
}