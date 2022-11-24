let a = [{
    data: [
        { row_id: 2, title: '2021년 경제 성장률 전망 밝아', source: 'A신문', timestamp: '2020/12/30' },
        { row_id: 3, title: '코로나19 증가추세 대폭 하락해', source: 'BBC', timestamp: '2020/12/29' },
        {
            row_id: 4,
            title: '코드스테이츠 취업연계 파트너사 xxx건 돌파',
            source: '스타트업 뉴스',
            timestamp: '2020/12/31',
        },
    ],
}];

console.log(a[0].data);

let b = { status: 'sunny', temperature: '28', fineDust: 'good' };

let c = {...a,...b};
console.log(c);