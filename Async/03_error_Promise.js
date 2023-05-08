function f2() {
  console.log('This is f2 start');
  // * throw 를 통해 오류를 발생시킬 때는 new 키워드로 Error 객체의 인스턴스를 생성하면,
  // * 콜스택 정보가 담겨 있기 때문에 어떤 파일의 몇 번째줄에서 오류가 발생했늕지 알 수 있음.
  throw new Error('오류');

  // * 아래 코드는 실행되지 않음.
  console.log('This is f2 end');
}

function f1() {
  console.log('This is f1 start');
  try {
    f2();
  } catch (e) {
    console.log(e);
  }
  console.log('This is f1 end');
}

f1();

console.log('//------------------------------------------');

function wait(sec) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('Error occurred');
    }, sec * 1000);
  });
}

// * catch 를 이용해 오류를 잡는 방법.
wait(1).catch(e => {
  console.log('e: ', e);
});

// * then 을 이용해 오류를 잡는 방법.
wait(2).then(
  resolve => {
    console.log(resolve);
    console.log('success');
  },
  reject => {
    console.log('reject: ', reject);
  },
);
