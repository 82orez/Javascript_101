class Lecture {
  constructor(hasTutor, lecID, members) {
    this.hasTutor = hasTutor;
    this.lecID = lecID;
    this.members = members;
  }
}

function getStudents(classroom) {
  // classroom 이라는 객체를 인자로 받아 와서
  // hasTutor, lecID, members 이라는 key 값에 해당하는 value 값을 받아 온다.
  // (객체 구조 분해 할당)
  let { hasTutor, lecID, members } = classroom;

  let tutor, students;
  // Rest(나머지 매개 변수) 문법을 이용한 구조 분해 할당.
  hasTutor ? [tutor, ...students] = members : [...students] = members;
  return students;
}

let class1 = new Lecture(false, 'L001', ['Ahn', 'Han', 'Park']);
let class2 = new Lecture(true, 'L002', ['Lee', 'Choi', 'Kim']);

console.log(`강의 : ${class1.lecID}, 수강생 : ${getStudents(class1)}`);
console.log(`강의 : ${class2.lecID}, 수강생 : ${getStudents(class2)}`);