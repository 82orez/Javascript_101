// * 비동기 함수의 동기 처리.
// * Call-back hell.

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