// * 기본적으로 async, await 에서는 Promise 같은 형태의 오류 처리함.
// * 추가적으로 try / catch 구문 사용 가능.

function wait(sec) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('throw Error!');
    }, sec * 1000);
  });
}

const myAsync = async () => {
  console.log(new Date());
  try {
    await wait(1);
  } catch (e) {
    console.error(e);
  }
  console.log(new Date());
};

const result = myAsync();

result.then((resolve) => {
  console.log(resolve);
});
