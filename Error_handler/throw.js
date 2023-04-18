// * throw: 사용자가 직접 예외를 만들면서 오류 메세지도 지정

let json = '{"grade": 3, "age": 25}';

try {
  let user = JSON.parse(json);
  if (!user.name) {
    // 다음 문장처럼 사용할 수도 있지만,
    // throw "사용자 이름이 없습니다.";

    // * 조건을 만족하면 throw 명령어를 사용하여 에러를 발생시킨다.
    // 새로운 Error 객체 인스턴스와 메세지를 생성
    // { Error: 'No user!!' }
    throw new Error('No user!!');

    // ? 에러가 발생하지 않더라도 같은 블록 안에서 throw 다음 문장은 실행되지 않음.
    console.log('Hello');
  }

} catch (err) {
  alert(err);

  console.error(err);
  console.error(err.name);
  console.error(err.message);
  console.log();

} finally {
  console.log('The End!!');
}
