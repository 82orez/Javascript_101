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
  // * workP(2) 함수는 비동기적으로 처리되어 아래 명령보다 늦게 실행 완료되어야 하지만,
  // * await 를 이용하여 동기적으로 처리.
  const resultWorkP = await workP(2);
  console.log(resultWorkP);

  // * async 함수는 Promise 를 반환하고,
  return 'Async Function';
};
// * 그 반환값(resolve)는 'Async Function' 임.

asyncFunc()
  .then((result) => {
  console.log(result);
})
  .catch(err => console.error(err))
  .finally(() => console.log(`${result} is ended.`))
