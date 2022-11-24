function getNewsAndWeatherAll() {

    return Promise.all([fetch(newsURL), fetch(weatherURL)])
        .then(([newRes, weatherRes]) => {
            // ! 어떻게 JSON 파일을 변환해서 resolve 함수 인자로 넘겨술 것인가?
            return Promise.all([newRes.json(), weatherRes.json()]);
        })
        .then(([newsObj, weatherObj]) => {
            return {
                news: newsObj.data,
                weather: weatherObj
            }
        })
}


if (typeof window === 'undefined') {
  module.exports = {
    getNewsAndWeatherAll
  }
}
