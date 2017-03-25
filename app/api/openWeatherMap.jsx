var axios = require('axios');

const OPEN_WEATHER_MAP_URL='http://api.openweathermap.org/data/2.5/weather?appid=4a82352059caf9b4484042e3312757e2&units=imperial';

module.exports = {
    getTemp: function(location) {
        var endcodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${endcodedLocation}`;

        return axios.get(requestUrl).then(function(res) {
            console.log(res);
            if(res.data.code && res.data.message) {
                throw new Error(res.data.message);
            } else {
                return res.data.main.temp;
            }
        }, function(res) {
            throw new Error(res.data.message);
        });
    }
}