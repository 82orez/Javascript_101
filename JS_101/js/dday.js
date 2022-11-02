// 현재 날짜를 구하고 시간을 0시 0분 0초로 세팅한다.
let now = new Date();
now.setHours(0);
now.setMinutes(0);
now.setSeconds(0);
console.log(now);

// 처음 만난 날짜를 세팅한다.
let firstDay = new Date("2022-8-22");
console.log(firstDay);

let toNow = now.getTime();
let toFirst = firstDay.getTime();
let passedTime = toNow - toFirst;
console.log(passedTime);

let passedDay = Math.round(passedTime/(1000*60*60*24) + 1);
console.log(passedDay);

document.querySelector('#accent').innerHTML = `${passedDay} 일째`;

calDay(100);
calDay(200);
calDay(365);
calDay(500);

function calDay(num) {
    let future = toFirst + (num * (24*60*60*1000));
    let someDay = new Date(future);
    console.log(someDay);
    let year = someDay.getFullYear();
    let month = someDay.getMonth() + 1;
    let date = someDay.getDate() - 1;

    document.querySelector(`#date`+ num).innerHTML = `${year}년 ${month}월 ${date}일`;
}
