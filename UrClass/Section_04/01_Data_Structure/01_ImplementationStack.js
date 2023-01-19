// * Implementation Stack
// * Stack 구현을 위한 기본적인 코드가 작성되어 있습니다. Stack 자료구조의 특성을 이해하고 FILL_ME_IN을 채워 테스트를 통과해 주세요.

// * 멤버 변수
// 데이터를 저장할 Object 타입의 storage
// 마지막에 들어온 데이터를 가리키는 Number 타입의 포인터 top

// * 메서드
// size(): 스택에 추가된 데이터의 크기를 리턴해야 합니다.
// push(): 스택에 데이터를 추가할 수 있어야 합니다.
// pop(): 가장 나중에 추가된 데이터를 스택에서 삭제하고 삭제한 데이터를 리턴해야 합니다.

// * 주의 사항
// 내장 객체 Array.prototype 에 정의된 메서드는 사용하면 안 됩니다.
//   포인터 변수 top 의 초기값은 -1, 0, 1등 임의로 지정할 수 있지만,
//   여기서는 빈 스택을 나타내는 -1으로 초기화되며 이후 push, pop 에 따라 1씩 증감해주어 데이터가 추가될 인덱스의 위치를 가리키도록 합니다.

// * 사용 예시

// const stack = new Stack();
//
// stack.size(); // 0
// for(let i = 1; i < 10; i++) {
//   stack.push(i);
// }
// stack.pop(); // 9
// stack.pop(); // 8
// stack.size(); // 7
// stack.push(8);
// stack.size(); // 8
// ...


class Stack {
  constructor() {
    this.storage = {};
    this.top = -1; // 스택의 가장 상단을 가리키는 포인터 변수를 초기화 합니다.
  }

  size() {
    // stack 의 사이즈를 구합니다.
    // this.top 은 스택이 쌓일 때마다 하나씩 증가하기 때문에 top 으로부터 size 를 구할 수 있습니다.
    // * this.top 은 스택에 새롭게 추가될 요소의 인덱스를 나타냅니다. 빈 스택을 표현하는 -1부터 1씩 증감하며 표현하며 전체 요소의 개수를 추정할 수 있습니다
    return this.top + 1;
  }

  // 스택에 데이터를 추가 할 수 있어야 합니다.
  // stack 에 element 를 추가합니다.
  // * 현재 추가하는 element 의 인덱스인 this.top 을 키로, 요소를 값으로 하여 storage 에 할당합니다.
  push(element) {
    this.top += 1;
    this.storage[this.top] = element;
  }

  // 가장 나중에 추가된 데이터가 가장 먼저 추출되어야 합니다.
  // * 만약 size 가 0보다 작거나 같다면 이는 비어있는 스택을 의미하므로 아무 일도 일어나지 않습니다.
  // * stack 에서 현재 stack 의  최상단에 있는 element 를 변수에 저장합니다.
  // * storage 에서 해당 element 를 제거합니다.
  // * 하나를 제거했으니 방금 제거한 element 의 인덱스를 나타내는 top 또한 감소시켜 업데이트 해줍니다.
  // 최상단에 있던 element 가 저장된 변수 result 를 반환합니다.
  pop() {
    // 빈 스택에 pop 연산을 적용해도 에러가 발생하지 않아야 합니다
    if (this.size() <= 0) {
      return;
    }
    const result = this.storage[this.top];
    delete this.storage[this.top];
    this.top -= 1;

    return result;
  }
}

// ------------------------------

const stack = new Stack();

stack.size(); // 0
for(let i = 1; i < 10; i++) {
  stack.push(i);
}
console.log(stack)
stack.pop(); // 9
stack.pop(); // 8
stack.size(); // 7
stack.push(8);
stack.size(); // 8