// * 얕은(Shallow) 복사 vs. 깊은(Deep) 복사

// ? 원시 자료형 (Deep copy)
let num = 20;
let copiedNum = num;
// 새로운 메모리에 원시 자료값 자체를 할당하기 때문에 결과는 true.
console.log(num === copiedNum);

num = 30;
console.log(num);
console.log(copiedNum);
// 재할당 시에는 서로 다른 메모리에 다른 값을 가지고 있으므로 결과는 false.
console.log(num === copiedNum);

console.log('-----------------------------')

// ? 참조 자료형: Array, Object (Shallow copy)
// Javascript 자체적으로 참조 자료형을 깊은 복사하는 방법은 없음.
// 필요한 경우 관련된 라이브러리 설치가 필요.
let arr = [0, 1, 2, 3];
let copiedArr = arr;
// 새로운 메모리에 참조 자료형 자체를 할당하는 것이 아니라 Heap 에 저장되어 있는 주소값만을 참조.
// 결과적으로 새로 같은 주소값을 참조 하기에 결과는 true.
console.log(arr === copiedArr);

arr.push(4);
// 이 경우 한쪽 변수(메모리)에만 변화를 주더라도 다른 변수(메모리) 역시 서로 같은 Heap 의 주소값을 참조하게 되므로 결과는 true.
console.log(arr);
console.log(copiedArr);
console.log(arr === copiedArr);
console.log();

console.log('--------------Shallow copy(얕은 복사)---------------')

// ! 참조 자료형의 경우 slice() 와 Spread(전개 연산자) 를 이용해 앝은 복사 할 수 있다.
let arr1 = [0, 1, 2, 3];
let copiedArr1 = [...arr1];
let copiedArr2 = arr1.slice();

console.log('arr1 === copiedArr1 ', arr1 === copiedArr1);
console.log('arr1 === copiedArr1 ', arr1 === copiedArr2);