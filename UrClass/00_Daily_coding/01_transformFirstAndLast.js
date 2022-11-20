<<<<<<< HEAD
// 배열을 입력받아 차례대로 배열의 첫 요소와 마지막 요소를 키와 값으로 하는 객체를 리턴해야 합니다.

function transformFirstAndLast(arr) {
    // TODO: 여기에 코드를 작성합니다.
    let newArr = {};

    if (arr.length === 0) {
        return {};
    } else {
        newArr[arr[0]] = arr[arr.length - 1];
        console.log(newArr);
        return newArr;
    }
}

let arr = ['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce'];
let output = transformFirstAndLast(arr);
console.log(output); // --> { Queen : 'Beyonce' }

arr = ['Kevin', 'Bacon', 'Love', 'Hart', 'Costner', 'Spacey'];
output = transformFirstAndLast(arr);
console.log(output); // --> { Kevin : 'Spacey' }
=======
class Counter {
    constructor() {
        this.value = 0; // 생성자 호출을 할 경우, this 는 new 키워드로 생성한 Counter 의 인스턴스입니다
    }
    increase() {
        this.value++
    }
    decrease() {
        this.value--
    }
    getValue() {
        return this.value
    }
}

let counter1 = new Counter() // 생성자 호출
counter1.increase()
console.log(counter1.getValue()); // 1
>>>>>>> e73aebdbd290837a6ee75c3f8a1de0bc415620d4
