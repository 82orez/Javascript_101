const newsURL = 'http://localhost:4999/data/latestNews';
const weatherURL = 'http://localhost:4999/data/weather';

function getNewsAndWeather() {
  // TODO: fetch 을 이용해 작성합니다
  // TODO: 여러개의 Promise 를 then 으로 연결하여 작성합니다
  let newObj = {};

  return fetch(newsURL)
      .then(newsResponse => {return newsResponse.json()})
      .then(newsJson => {
          newObj.news = newsJson.data;
          return weatherURL;
      })
      .then(weatherURL => {return fetch(weatherURL)})
      .then(weatherResponse => {return weatherResponse.json()})
      .then(weatherJson => {
          newObj.weather = weatherJson;
          return newObj;
      })
}

if (typeof window === 'undefined') {
  module.exports = {
    getNewsAndWeather
  }
}