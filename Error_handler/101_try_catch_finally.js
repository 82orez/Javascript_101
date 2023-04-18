// Error handler: try / catch / finally

try {
  console.log('시작');
  add();
  // ? 선언되지 않은 함수를 실행하므로 에러 발생가 발생하고 다음 문장은 실행되지 않음.
  console.log('실행 중...');

} catch (err) {
  // *catch 블록은 try 블록에서 에러가 발생했을 때만 실행. --> 예외 처리를 위해
  // catch() 함수의 인자는 Error 객체를 의미.
  // Error 객체는 name 과 message 프로퍼티(key) 를 가짐.
  // ? console.error() 함수를 쓰면 시각적으로 다른 메세지와 구분 됨.
  console.error(`오류 발생 : ${err}`);
  console.log();

  console.log(`오류 발생 : ${err}`);
  console.log();

  console.error(`오류 name : ${err.name}`);
  console.error(`오류 message : ${err.message}`);
  console.log();

} finally {
  // * finally 블록은 try 블록의 에러 여부에 상관없이 항상 실행됨.
  console.log('끝');
}
