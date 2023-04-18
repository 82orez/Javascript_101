// * Promise 는 비동기 함수를 동기화 하기 위한 Javascript 클래스 객체입니다.
// * state: pending -> resolve(fulfilled) or reject(failed)

// * 1. Producer
// * promise 는 executor 라는 콜백 함수를 인자로 가진다.
// * 또한 executor 함수는 resolve 와 reject 라는 두 개의 콜백 함수를 인자로 가진다.
// * executor 함수는 promise 생성시 바로 실행된다. => 불필요한 서버 통신 주의.

const promise = new Promise((resolve, reject) => {
    console.log("doing something");
    setTimeout(() => {
        // * promise 호출이 성공하면 resolve 를 넘기는데 그것이 문자열 TG.
        resolve('TG');
        // reject(new Error("No network"));
    }, 2000);
});
console.log(promise);

// * 2. Consumers: then(resolve), catch(reject), finally(always)
promise
  // ? promise 가 실행에 성공하면 promise 의 resolve 값인 문자열 'TG' 를 받아 와서,
  // ?다음의 value 변수로 넘겨 준다.
    .then(value => {
        console.log('then: ', value);
    })
    .catch(error => {
        console.log(error);
    })
    .finally(() => {
        console.log("Work done!");
    });

// * 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber
    .then(num => num * 2)
    .then(num => num * 4)
    .then(num => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(num - 1), 1000);
        });
    })
    .then(num => console.log(num));

// * 4. Error Handling
const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve("chicken"), 1000);
    });

const getEgg = hen =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            // ! 에러 발생 여부 조정 가능.
            resolve(`${hen} -> egg`);
            // reject(new Error('Failed!!!'));
        }, 1000);
    });

const cook = egg =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`${egg} -> fry`);
        }, 1000);
    });

getHen()
    .then(hen => getEgg(hen))
    // .catch(error => {
    //     return 'bread';
    // })
    .then(egg => cook(egg))
    .then(meal => console.log(meal))
    .catch(error => console.log(error));
