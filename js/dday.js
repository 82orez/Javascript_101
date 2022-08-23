let now = new Date();
let firstDay = new Date("2022-8-22");

let toNow = now.getTime();
let toFirst = firstDay.getTime();
let passedTime = toNow - toFirst;
console.log(passedTime);

let passedDay = Math.round(passedTime/(1000*60*60*24) + 1);
console.log(passedDay);

document.querySelector('#accent').innerHTML = `${passedDay} 일째`;

// let future = toFirst + (100 * (24*60*60*1000));
// let someDay = new Date(future);
// console.log(someDay);
// let year = someDay.getFullYear();
// let month = someDay.getMonth();
// let date = someDay.getDate();
//
// document.querySelector('#date100').innerHTML = `${year}년 ${month}월 ${date}일`;

function calDay(num) {
    let future = toFirst + (num * (24*60*60*1000));
    let someDay = new Date(future);
    console.log(someDay);
    let year = someDay.getFullYear();
    let month = someDay.getMonth() + 1;
    let date = someDay.getDate() - 1;

    document.querySelector(`#date`+ num).innerHTML = `${year}년 ${month}월 ${date}일`;
}

calDay(100);
calDay(200);
calDay(365);
calDay(500);