// SEB_FE_42_김상교 — 오늘 오전 10:13

function getNewsAndWeatherAll() {
    // newsURL, weatherURL 객체를 불러오고 프로미스에 전달하여 JSON으로 변환하고 할당
    let news = fetch(newsURL).then((response)=>response.json())
    let weather = fetch(weatherURL).then((response)=>response.json())

    // 변환된 두 객체를 하나의 객체로 합침 (배열을 인자로 받는다)
    return Promise.all([news, weather])
        .then((response)=>{
            return {news: response[0].data, weather: response[1]}
        })
    // TODO: Promise.all을 이용해 작성합니다
}