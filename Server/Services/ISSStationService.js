const url = 'http://api.open-notify.org/iss-now.json';

const http = require('http');

/**
 * Earth Radius
 * @constant EarthRadius
 * @requires 6374
 */
const EarthRadius = 6374


function checkISSPosition(lat, long, gap) {
    return new Promise((resolve, reject) => {
        http.get(url, function (response) {
            var buffer = ""

            response.on("data", function (chunk) {
                buffer += chunk
            });

            response.on("end", function (err) {
                var dataISS = JSON.parse(buffer)
                var longitudeISS = dataISS.iss_position.longitude
                var latitudeISS = dataISS.iss_position.latitude

                console.log(longitudeISS, latitudeISS, long, lat)

                var distance = Math.acos(Math.sin(Radiant(longitudeISS)) * Math.sin(Radiant(long)) +
                    Math.cos(Radiant(longitudeISS)) * Math.cos(Radiant(long)) * Math.cos(Radiant(latitudeISS - lat))) * EarthRadius

                if (distance <= gap) {
                    console.log("inf")
                    resolve(true);
                } else {
                    console.log("sup", distance)
                    resolve(false);
                }
            });

            response.on('error', function (err) {
                reject('Error while getting ISS Data');
            });
        })
    });
}

function Radiant(degrees) {
    var pi = Math.PI;
    return degrees * (pi / 180);
}

module.exports = {
    /**
    * ActionWeather is a Promise that is used to determine if the weather is fine or not.
    * @function ActionWeather
    * @param {float} latitude Latitude of the location to check the weather for.
    * @param {float} longitude Longitude of the location to check the weather for.
    * @returns {Promise} A Promise that resolves with a string describing the weather.
    */
    ActionISS: function (latitude, longitude, gap) {
        return new Promise((resolve, reject) => {
            checkISSPosition(latitude, longitude, gap)
                .then(weatherType => {
                    resolve(weatherType)
                })
        })
            .catch(error => {
                console.log(error);
            });
    },
}