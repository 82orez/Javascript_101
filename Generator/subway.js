// 배열을 사용하면 더 간단하지만 여기에서는 Generator 를 연습합니다.

const bttn = document.querySelector('button');
const result = document.querySelector('#result');

// 1. Generator 생성자 train() 만들고,
function * train() {
  yield "판교";
  yield "이매";
  yield "삼동";
  yield "경기광주";
  yield "초월";
  yield "곤지암";
  yield "신둔도예촌";
  yield "이천";
  yield "부발";
  yield "세종대왕릉";
  yield "여주";
}
// 2. subway 인스턴스 만들기
let subway = train();

bttn.addEventListener('click', () => {
  // 3. 클릭할 때 마다 subway 실행.
  let current = subway.next();

  if (current.done !== true) {
    result.innerText = current.value;
  } else {
    result.innerText = 'Terminated!';
  }
});