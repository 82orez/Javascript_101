// * []
// [abc]: 이 표현식의 의미는 "a, b, c 중 한 개의 문자와 매치"를 뜻한다.
console.log('-------[]--------');
console.log('a'.match(/[abc]/));
console.log('before before'.match(/[abc]/g));
console.log('dude'.match(/[abc]/));
console.log();

// * . (Dot)
// 정규 표현식의 Dot(.) 메타 문자는 줄바꿈 문자인 \n을 제외한 모든 문자 등 한 개와 매치됨을 의미한다.
// 정규식을 작성할 때 re.DOTALL 옵션을 주면 \n 문자와도 매치된다.
// 정규식 a.b 의 의미는 "a + 모든 문자 등 한 개 + b"

console.log('-------.--------');
console.log('aab'.match(/a.b/));
console.log('a0b'.match(/a.b/));
console.log('abc'.match(/a.b/));
console.log();

// ! 주의: [.]
// 만약 앞에서 살펴본 문자 클래스([]) 내에 Dot(.) 메타 문자가 사용된다면
// 이것은 "모든 문자"라는 의미가 아닌 문자 . 그대로를 의미한다. 혼동하지 않도록 주의하자.
console.log('[.]: ', 'aab'.match(/a[.]b/));
console.log();

// * 반복 1: * (앞에 있는 문자의 반복 횟수 0 ~ 무한대)
// * 반복 2: + (앞에 있는 문자의 반복 횟수 1 ~ 무한대)

console.log('-------* +--------');
console.log('*: ', 'ct'.match(/ca*t/)); // a 가 0번 반복했으니까 match 된 것으로 봄.
console.log('*: ', 'cat'.match(/ca*t/));
console.log('*: ', 'caat'.match(/ca*t/));
console.log();

console.log('+: ', 'ct'.match(/ca+t/)); // a 가 없으니까 match 안 된 것으로 봄.
console.log('+: ', 'cat'.match(/ca+t/));
console.log('+: ', 'caat'.match(/ca+t/));
console.log();

// * 반복 검색하기: {}
// /패턴{n}/: 패턴이 n번 반복되는 것을 검색.
// /패턴{n,}/: 패턴이 최소 n번 이상 반복되는 것을 검색.
// /패턴{n,m}/: 패턴이 최소 n번 이상 m번 이하 반복되는 것을 검색.

let str1 = 'Ooooodooopoos';

console.log('-------{반복}--------');
console.log(str1.match(/o{2}/));
console.log(str1.match(/o{2}/g));
console.log(str1.match(/o{2,}/));
console.log(str1.match(/o{2,3}/));
console.log(str1.match(/o{2,3}/g));
console.log();

// * OR 검색하기: | (역슬래시 위에 있는 것)

let str2 = 'ES2015(ES6) is powerful!';

console.log('-------OR |--------');
console.log(/ES2015|ES10/.test(str2));
console.log();

// * 문자열의 시작과 끝 체크하기: ^ $
// 문자열의 시작 체크: ^
// 문자열의 끝 체크: $

let hello = 'Hello, everyone!';

console.log('-------^ $--------');
console.log(hello);
console.log('^H: ', /^H/.test(hello)); // H 로 시작 체크
console.log(hello.match(/^Hello/g)); // Hello 로 시작 체크하고 매칭되는 것 전부 반환.
console.log('^h: ', /^h/.test(hello)); // h 로 시작 체크
console.log();

console.log('!$: ', /!$/.test(hello)); // '!' 로 끝 체크
console.log('one$: ', /one$/.test(hello)); // one 으로 끝 체크
console.log(hello.match(/one!$/g)); // one! 으로 끝 체크하고 매칭되는 것 전부 반환.
console.log();

// ! 주의: ^ 기호가 [] 안에서 쓰일 경우에는 not 의 의미.
// 문자열 중에서 숫자가 아닌 것을 반환.
console.log('/[^0-9]/: ', 'ES2015'.match(/[^0-9]/)); // 첫번째 하나만
console.log('/[^0-9]/g: ', 'ES2015'.match(/[^0-9]/g)); // 전부
console.log();

// * Grouping
// Capturing: ()
// Non-capturing: (?:)

let abc = 'ABCABCABC OK?';

console.log('-------(Grouping)--------');
console.log(abc.match(/(ABC)+/));
console.log();

console.log('kokokoko'.match(/(ko)+/));
console.log('kokokoko'.match(/(?:ko)+/));
console.log();

console.log('kokokoko'.match(/(ko)+/g));
console.log('kokokoko'.match(/(?:ko)+/g));
console.log();

// // * 긍정형 전방 탐색: (?=)
//
// let https = "https://google.com";
//
// console.log('-------(?=)--------');
// console.log(https.match(/.+(?=:)/g));

// * Greedy vs. Lazy

console.log('-------Greedy vs. Lazy--------');
console.log('Greedy: ', 'The fat cat sat on the mat.'.match(/(.*at)/));
console.log('Lazy: ', 'The fat cat sat on the mat.'.match(/(.*?at)/));
console.log();