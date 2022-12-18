function workP(sec) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(new Date().toISOString());
    }, sec * 1000);
  });
}

// * 아래 코드는 Promise 자체를 반환. --> resolve 값을 Promise 가 품고 있음.
console.log(workP(0.5));

// * 그 resolve 값을 리턴 받기 위해서는 then() 을 이용.
// * promise chain 을 이용하기 위해서는 넘겨줄 resolve 값을 return 해줘야 함. --> 다음 then() 에.
workP(1)
  .then((result) => {
    console.log('first: ', result);
    return workP(1);
  })
  .then((result) => {
    console.log('second: ', result);
  });
