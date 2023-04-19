// * fetch 는 Promise 를 반환한다는 것이 XHR 과 가장 큰 차이점이다.
// ? url 다음 자리에 옵션이 생략되면 method 는 get 이다.
const json = fetch('https://reqres.in/api/products/10');

// Promise 를 반환.
console.log(json);
console.log();

json
  .then(re => re.json())    // * fetch 를 통해 받아온 JSON 문자열을 객체로 변환.
  .then(obj => console.log(obj.data.id));
