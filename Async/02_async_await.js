function workP(sec) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('WorkP Function');
    }, sec * 1000);
  });
}

const asyncFunc = async () => {
  // * workP 함수는 비동기적으로 처리되어야 하지만, await 를 이용하여 동기적으로 처리.
  const resultWorkP = await workP(1);
  console.log(resultWorkP);
  return 'Async Function';
};

asyncFunc().then((result) => {
  console.log(result);
});
