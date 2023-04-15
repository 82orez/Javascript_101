const result = document.querySelector('#result');

const member1 = ['HTML', 'CSS'];
const member2 = ['CSS', '자바스크립트', '리액트'];
const member3 = ['자바스크립트', '타입스크립트'];

// 배열은 중복값도 인정됨.
const subjects = [...member1, ...member2, ...member3];
console.log(subjects);
console.log();

const resultList = new Set();
// * 중복 된 항목을 제거하는 효과.
subjects.forEach((subject) => {
  resultList.add(subject);
});
console.log(resultList);

result.innerHTML = `<ul>
${[...resultList].map((value) => {
    return `<li>${value}</li>`; // 문자열을 요소들로 하는 배열을 반환.
  }).join('')} <!-- join('')으로 그 배열의 요소들을 하나의 문자열로 만듬.-->
</ul>`;
