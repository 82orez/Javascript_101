async function getNewsAndWeatherAsync() {
  // TODO: async/await 키워드를 이용해 작성합니다.
  // let news = await fetch(newsURL).then(newsRes => {
  //   return newsRes.json();
  // });
  // let weather = await fetch(weatherURL).then(weatherRes => {
  //   return weatherRes.json();
  // });
  // return {
  //   news: news.data,
  //   weather: weather
  // }

  let news = fetch(newsURL);
  let weather = fetch(weatherURL);

  let newsData = await news.then(newsJson => newsJson.json());
  let weatherData = await weather.then(weatherJson => weatherJson.json());

  return {
    news: newsData.data,
    weather: weatherData
  }
}


if (typeof window === 'undefined') {
  module.exports = {
    getNewsAndWeatherAsync
  }
}
