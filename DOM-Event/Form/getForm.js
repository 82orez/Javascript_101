// 이름 입력창의 id 속성값이 'userName' 이므로 해당 요소를 불러온다.
const userName = document.querySelector('#userName');

// ? select 태그의 id 속성값이 'major' 이므로 해당 요소를 불러온다.
const selectMenu = document.querySelector('#major');
// ? select 태그 안의 options(selectMenu.options)들이 배열의 형태로 저장되어 있다.
console.log('selectMenu.options: ', selectMenu.options);

function displaySelect() {
  // * 사용자가 선택(Select)하는 항목에 따라 배열의 selectMenu.selectedIndex 가 변경되므로,
  // * selectMenu.options 배열에서 해당 index 에 해당하는 값(innerText)을 불러온다.
  const selectText = selectMenu.options[selectMenu.selectedIndex].innerText;
  alert(`Hello. ${userName.value}! Your choice is ${selectText}!`)
}
// Select 목록창에서 선택 변화가 있을 때마다 displaySelect 함수를 실행한다.
// 주의: 이때 ()는 생락한다.
selectMenu.addEventListener('change', displaySelect);

console.log('-----------------------')

// * 라디오 버튼(type='radio')은 여러 개의 선택지 중 하나만 선택 가능.
// ? 하나만 선택 가능하기 때문에 querySelector 사용.
const radioBttn = document.querySelector('input[name="subject"]:checked');
console.log(radioBttn.value);
console.log();

console.log('-----------------------')

// * 체크 박스(type="checkbox")는 여러 개의 선택지 중 중복 선택 가능.
// ? 중복 선택 가능하기 때문에 querySelectorAll 사용. --> 배열 형태의 list 를 반환.
const checkBox = document.querySelectorAll('input[name="mailing"]:checked');

checkBox.forEach((value) => {
  console.log(value.value);
});