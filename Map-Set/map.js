// * Map
// Map 생성: new Map();
// Map 의 프로퍼티 생성: set(ket, value)
const bag = new Map();
bag.set('color', 'red');
bag.set('haveHandle', true);
// set chaining: 여러 개의 프로퍼티를 한 번에 만들 때.
bag.set('type', 'mini').set('purpose', 'daily');
console.log(bag);
console.log();

// ? Map 은 Object(객체) 와는 다른 자료구조이다.
const bag1 = [...bag];
console.log(bag1);
console.log();

const bag2 = { ...bag }; // {}
console.log(bag2);
