const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/8718bab97c6da868fa075638b405cb81/' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + 
                ' It is currently ' + convertToCelcius(body.currently.temperature) + 
                '° Celcius out. There is a ' + body.currently.precipProbability + 
                '% chance of rain. The wind speed is ' + body.currently.windSpeed + 'mph.')
        }
    })

    function convertToCelcius(farenheit) {
        // console.log(farenheit)
        return  parseFloat(((farenheit - 32) * 5 / 9).toFixed(1))
    }
}

module.exports = forecast