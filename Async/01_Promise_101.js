// * Promise 는 비동기 함수들을를 동기화 하기 위한 Javascript 클래스 객체입니다.
// 실행 시간이 서로 다른 여러 개의 함수들을 순차적으로 실행시키기 위함.
// 실행 시간이 더 오래 걸리는 함수를 먼저 실행 완료시키고 난 후,
// 그 결과를 받아 다음 함수 실행.
// 예) 서버에서 데이터를 불러온 후, 그 데이터를 가지고 다른 작업을 하는 경우.

// * state: pending --> resolve(fulfilled) or reject(failed)
// * Producer 의 실행이 끝나면 그 결과를 pending 하고 있다가,
// * Consumers 들을 통해 넘겨 줄게.
// * then(resolve), catch(reject), finally(always)

// ? 1. Producer
// promise 는 executor 라는 콜백 함수를 인자로 가진다.
// 또한 executor 함수는 resolve 와 reject 라는 두 개의 콜백 함수를 인자로 가진다.
// executor 함수는 promise 생성시 바로 실행된다. => 불필요한 서버 통신 주의.

const bool = true;    // ! 이 값을 true, false 로 바꿔서 테스트해 보세요.

function workP(sec) {
  return new Promise((resolve, reject) => {
    if (bool) {
      setTimeout(() => {
        resolve(new Date().toISOString());
      }, sec * 1000);
    } else {
      reject(new Error('Bool is false!!!'));
    }
  });
}

// * workP() 함수만 실행시키면의 리턴값인 Promise 자체만을를 반환.
// * --> Promise 가 resolve 또는 reject 값을 품고(pending) 있음.
// console.log(workP(10));
// * workP() 가 실행 완료되고 난 후 그 결과에 해댱하는 resolve 또는 reject 값을 넘겨 받기 위해서 then() 또는 catch() 를 사용.


// ? 2. Consumers: then(resolve), catch(reject), finally(always)
// * Promise chaining: 여러 개의 비동기 함수들을 순차적으 실행(동기화)시키는 방법.
// 아래 예에서 실행 시간이 더 오래 걸리는 Producer 1(1초)이 먼저 실행 완료되고 난 후,
// Producer 2(0.5초)가 실행되는 것을 볼 수 있음.

workP(1)    // Producer 1
  .then((result) => {
    console.log('first: ', result);    // Producer 1's resolve
    return workP(0.5);    // Producer 2
  })
  .then((result) => {
    console.log('second: ', result); // Producer 2's resolve
  }).catch(err => {
    console.error(err);    // * Error handling.
}).finally(() => console.log('The End!'))