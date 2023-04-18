function workP(sec) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(new Date().toISOString());
    }, sec * 1000);
  });
}

// * 아래 코드는 workP() 함수의 리턴값인 Promise 자체를 반환.
// --> resolve 또는 reject 값을 Promise 가 품고(pending) 있음.
console.log(workP(10));

workP(1)
  // * 그 resolve 값을 리턴 받기 위해서는 then() 을 사용.
  .then((result) => {
    console.log('first: ', result);
    // * promise chain 을 이용하기 위해서는 넘겨줄 resolve 값을 return 해줘야 함. --> 다음 then() 에.
    return workP(1);
  })
  .then((result) => {
    console.log('second: ', result);
  });
