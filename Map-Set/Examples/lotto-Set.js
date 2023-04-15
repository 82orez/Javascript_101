const bttn = document.querySelector('button');
const result = document.querySelector('#result');

const settings = {
  neededNum: 6,
  maxNum: 45
};

bttn.addEventListener('click', () => {
  // 객체 구조 분해 할당
  const {neededNum, maxNum} = settings;

  // * 로또 번호가 중복 되면 안되므로 Set 생성자를 이용한다.
  let numbers = new Set();

  for (let i = 0; i < neededNum; i++) {
    let n = Math.floor(Math.random() * maxNum + 1);
    // 난수 생성 후 number set 에 추가.
    numbers.add(n);
  }
  // 생성된 set 을 Spread(전개 연산자)를 이용하여 배열로 변환하고,
  // join(' ') 함수로 하나의 문자열로 만들어 준다.
  // 각 배열의 요소들을 한 칸 띈 형태로: join() 함수의 구분자 --> ' '
  const arr = [...numbers].join(' ');
  // console.log(arr);
  result.innerText = arr;
});
