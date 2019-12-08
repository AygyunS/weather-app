const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/96f31a2e397627d043ecd91c707957a2/${latitude},${longitude}?units=si&lang=en`

    request({ url, json: true }, (error, { body }) => {
        const weather = body.currently;

        if (error) {
            callback('Unable to connect to the weather service', undefined)
        } else if (body.error) {
            callback('Unable to find location. Try another search', undefined)
        } else {
            console.log(body.daily.data[0]);

            callback(undefined, `${body.daily.data[0].summary} It is currently ${weather.temperature} degrees out. There is a ${weather.precipProbability}% chance of rain.\nToday temperature high is: ${body.daily.data[0].temperatureHigh}\nToday temperature low is: ${body.daily.data[0].temperatureLow}`)
        }

    })
}

module.exports = forecast