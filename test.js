function getNewsAndWeatherAll() {

    let newObj = {};
    return Promise.all([fetch('http://localhost:4999/data/latestNews'), fetch('http://localhost:4999/data/weather')])
        .then(dataArrJson => {
            return dataArrJson.map((value) => {
                return value.json();
            })
        })
        .then(dataArrObj => {
                newObj.news = dataArrObj[0];
                newObj.weather = dataArrObj[1];
                return newObj;

        })
}

console.log(getNewsAndWeatherAll());