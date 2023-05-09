const students = ['Kim', 'Lee', 'Park', 'Na'];

// Local storage 데이터는 JSON 형태로 저장되므로, 입출력 시에는 JSON.stringify(), JSON.parse() 과정이 필요.
// 개발자 도구 -> Application -> Storage -> Local storage
// 데이터 생성 setItem(Key, Value)
localStorage.setItem('students', JSON.stringify(students));

// localStorage 에 저장된 데이터 불러오기
let localData;

// localStorage 에 student 라는 Key 가 있는지 확인
if (localStorage.getItem('students') === null) {
  localData = [];
} else {
  localData = JSON.parse(localStorage.getItem('students'));
}

// Local storage 에 추가하기.
localData.push('Choi');
localStorage.setItem('students', JSON.stringify(localData));
