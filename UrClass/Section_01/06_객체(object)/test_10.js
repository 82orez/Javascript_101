// 객체를 입력받아 'firstName', 'lastName' 속성값 사이에 띄어쓰기 하나를 둔 단일 문자열을 fullName 속성값으로 할당해야 합니다.
// 별도의 리턴문(return statement)을 작성하지 않습니다.

function addFullNameProperty(obj) {
    obj.fullName = `${obj.firstName} ${obj.lastName}`;
}