// async & await
// clear style of using promise

// 1. Promise
function fetchUser() {
    // Suppose network response 'TG' in some sec.
    return new Promise((resolve, reject) => {
        setTimeout(() => {resolve('TG');}, 2000);
    });
}

const user = fetchUser();
user.then((user) => {console.log(user)});
console.log(user);



// 2. Promise -> Async(Promise 를 반환)
async function asyncFetchUser() {
    return 'async TG';
}
const asyncUser = asyncFetchUser();
console.log(asyncUser);
asyncUser.then((asyncUser)=>{console.log(asyncUser)})

// 3. Await
// Time delay 설정 -> 입력값(ms) 초 후에 resolve 반환.
function delay(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}

// await 를 쓰면 가독성이 좋아짐.
async function getApple() {
    await delay(3000);
    return 'Apple';
}
console.log(getApple());
getApple().then((fruit) => {console.log(fruit)});

// await 를 쓰지 않은 경우: 가독성이 나쁨.
function getBanana() {
    return delay(4000).then(() => {return 'Banana'});
}
getBanana().then((fruit) => {console.log(fruit)});

// 이중 Delay 발생
async function getFruit() {
    const apple = await getApple();  // delay 후에 다음 코드 실행
    const banana = await getBanana();
    return `${apple} + ${banana}`;
}
getFruit().then((fruit) => {console.log(fruit)});


// 이중 Delay 방지
//  1) await 병렬화
async function pickFruit() {
    const applePromise = getApple();    // Promise 선언 즉시 동시에 실행.
    const bananaPromise = getBanana();  // Promise 선언 즉시 동시에 실행.

    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana} => parallel`;
}
pickFruit().then((fruit) => {console.log(fruit)});


// 2) API: all
function pickFruitsAll() {
    return Promise.all([getApple(), getBanana()]).then((fruits)=>{return fruits.join('///')});
}
console.log(pickFruitsAll());
pickFruitsAll().then((fruit) => {console.log(fruit)});

function pickOnlyOneFirst() {
    return Promise.race([getApple(), getBanana()]);
}
pickOnlyOneFirst().then((fruit) => {console.log(fruit)});