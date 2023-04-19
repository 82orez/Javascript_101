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

const asyncFunc = async () => {
  // * async 함수의 기능 1: async 함수 안의 비동기 함수들을 동기화.
  //   workP(2초) 함수는 비동기적으로 처리되어 아래 명령어 보다 늦게 실행 완료되어야 하지만,
  //   await 를 이용하여 동기 처리하여 먼저 실행 완료시키고 resolve 또는 reject 값을 받아 옴.
  const resolveOfWorkP = await workP(2);
  console.log('WorkP()\'s resolve: ', resolveOfWorkP);

  // ? async 함수는 Promise 를 반환하고,
  return 'Async Function';
};
// ? 그 반환값(resolve)은 'Async Function' 임.

asyncFunc()
  // * async 함수의 기능 2: async 함수가 Promise 를 반환하기 때문에 Promise chain 구성 가능.
  .then((result) => {
  console.log('asyncFunc()\'s resolve: ', result);
})
  .catch(err => console.error(err))
  .finally(() => console.log('Finally: The End!!'))
