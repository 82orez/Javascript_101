// * 비동기 함수들을 동기화 하기 위해서 callback 함수를 쓴 모습.
// * 이런 경우 자칫 Call-back hell 에 빠지기 쉽다.

setTimeout(() => {
  setTimeout(() => {
    setTimeout(() => {
      setTimeout(() => {
        console.log('fourth work')
      }, 500);
      console.log('third work');
    }, 1000);
    console.log('second work');
  }, 1500);
  console.log('first work');
}, 2000);