// * 정규식의 생성
// 1. 슬래시 사이에 작성
let regExp = /\d{3}/; // ---> 숫자가 3번 반복되는 것을 찾아라(flag 가 없으면 가장 첫 부분).
// 2. 또는 아래처럼 RegExp 객체를 이용
// let regExp = new RegExp(/\d{3}/);

// * 정규 표현식과 메서드
// 정규식.test('문자열') : 정규식에 일치하는 부분 문자열이 있으면 true, 없으면 false 반환.
// 정규식.exec('문자열') : 정규식에 일치하는 부분 문자열이 있으면 결과값을 배열 형태로 없으면 null 반환.

console.log('-------test--------');
console.log(regExp.test('hello'));
console.log(regExp.test('123'));
console.log(regExp.test('192443d'));
console.log();

console.log('-------exec--------');
console.log(regExp.exec('hello'));
console.log(regExp.exec('123'));
console.log(regExp.exec('12443d'));
console.log();

// match(정규식) : 문자열에서 정규식에 일치하는 부분을 찾아 반환.
// 정규식에 일치하는 부분 문자열이 있으면 결과값을 배열 형태로 없으면 null 반환.

let str = 'ES2015 is powerful!';

console.log('-------match--------');
console.log('match: ', str.match(/ES6/));
console.log('match: ', str.match(/ES2015/));
console.log('match: ', str.match(/ES\d/));
console.log('match: ', str.match(/ES\d\d\d/));
console.log('match: ', str.match(regExp));
console.log();

// replace(정규식, 바꿀 문자열) : 문자열에서 정규식에 맞는 부분을 찾아서 새로운 문자열로 변경.

console.log('-------replace--------');
console.log('replace: ', str.replace(/ES2015/, 'ES2015-->ES6'));
console.log();

// * 정규 표현식의 플래그(flag)
// i : 영문자의 대소문자를 구별하지 않고 검색.
// g : 패턴과 일치하는 것을 모두 찾음. g 패턴이 없으면 일치하는 패턴 중 첫번째 패턴만 반환.
// m : 문자열의 행이 바뀌어도 검색.

console.log('-------flag--------');
console.log('str: ', str);
console.log(/es/.test(str));
console.log(/es/i.test(str));
console.log();

// * 문자열의 시작과 끝 체크하기: ^ $
// 문자열의 시작 체크: ^
// 문자열의 끝 체크: $
let hello = 'Hello, everyone!';

console.log('-------^ $--------');
console.log(hello);
console.log('^H: ', /^H/.test(hello)); // H 로 시작 체크
console.log('^h: ', /^h/.test(hello)); // h 로 시작 체크
console.log('!$: ', /!$/.test(hello)); // '!' 로 끝 체크

console.log('one$: ', /one$/.test(hello)); // one 으로 끝 체크
console.log();

// ! 주의: ^ 기호가 [] 안에서 쓰일 경우에는 not 의 의미.
// 문자열 중에서 숫자가 아닌 것을 반환.
console.log('/[^0-9]/: ', 'ES2015'.match(/[^0-9]/)); // 첫번째 하나만
console.log('/[^0-9]/g: ', 'ES2015'.match(/[^0-9]/g)); // 전부
console.log();

// * 반복 검색하기: {}
// /패턴{n}/: 패턴이 n번 반복되는 것을 검색.
// /패턴{n,}/: 패턴이 최소 n번 이상 반복되는 것을 검색.
//! /패턴{n,m}/: 패턴이 최소 n번 이상 반복되는 것을 검색.

let str1 = 'Ooooodooopoos';

console.log('-------{반복}--------');
console.log(str1.match(/o{2}/));
console.log(str1.match(/o{2}/g));
console.log(str1.match(/o{2,}/));
console.log(str1.match(/o{2,3}/));
console.log(str1.match(/o{2,3}/g));
