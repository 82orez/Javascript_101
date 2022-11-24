function getNewsAndWeatherAll() {
    // ? 방법 1.
    // return Promise.all([fetch(newsURL), fetch(weatherURL)])
    //     .then(([newRes, weatherRes]) => {
    //         // ! 어떻게 JSON 파일을 변환해서 resolve 함수 인자로 넘겨술 것인가?
    //         return Promise.all([newRes.json(), weatherRes.json()]);
    //     })
    //     .then(([newsObj, weatherObj]) => {
    //         return {
    //             news: newsObj.data,
    //             weather: weatherObj
    //         }
    //     })


    // ? 방법 2.
    let newsData = fetch(newsURL).then(resp => resp.json());
    let weatherData = fetch(weatherURL).then(resp => resp.json());

    return Promise.all([newsData, weatherData])
        .then(([newsData, weatherData]) => {
            return {
                news: newsData.data,
                weather: weatherData,
            }
        })


    // ? 방법 3.
    // // return Promise.all([fetch('http://localhost:4999/data/latestNews'), fetch('http://localhost:4999/data/weather')])
    // return Promise.all([fetch(newsURL), fetch(weatherURL)])
    //     .then(dataJsonArr => dataJsonArr.map(value => {
    //         return value.json();
    //     }))
    //     // .then(dataObjArr => console.log(dataObjArr))
    //     .then(dataObjArr => {
    //         // console.log(dataObjArr[0].data);
    //         return {
    //             news: dataObjArr[0].data,
    //             weather: dataObjArr[1]
    //         }
    //     })

}

getNewsAndWeatherAll();

if (typeof window === 'undefined') {
  module.exports = {
    getNewsAndWeatherAll
  }
}
