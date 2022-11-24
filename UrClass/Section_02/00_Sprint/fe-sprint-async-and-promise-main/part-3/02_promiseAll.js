function getNewsAndWeatherAll() {
    return Promise.all([fetch(newsURL), fetch(weatherURL)])
        .then(([newsRes, weatherRes]) => {
            return Promise.all([newsRes.json(), weatherRes.json()])
    })
        .then(([news, weather]) => {
            return {
                news: news.data,
                weather: weather
            }
        })


}


if (typeof window === 'undefined') {
  module.exports = {
    getNewsAndWeatherAll
  }
}
