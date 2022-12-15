// * 러시아 전통인형 마트료시카에 대한 정보를 담은 객체와 수를 입력받아 조건에 맞는 인형이 있는지 여부를 리턴해야 합니다.

// ? 'matryoshka', 'size' 속성을 갖는 재귀적으로 정의된 객체 (입출력 예시 참고)
// ? matryoshka.matriarchs null 또는 matryoshka 객체
// ? matryoshka.size는 중첩될수록 작아집니다.

// 함수 findMatryoshka는 재귀함수의 형태로 작성합니다.
// 반복문(for, while) 사용은 금지됩니다.
// 입력받은 객체는 함수의 호출 뒤에도 처음 상태를 유지해야 합니다(immutability).
// * 빈 객체를 입력받은 경우, false 를 리턴해야 합니다.

function findMatryoshka(matryoshka, size) {
  // TODO: 여기에 코드를 작성합니다.
  // recursive case
  // * 가장 외부 객체인 matryoshka 의 key 값 size 와 매개변수 size 가 동일하면 true 반환하고 종결.
  if (matryoshka.size === size) {
    return true;
    // * 그렇지 않으면 다음 단위의 객체의 key 값 size 와 매개변수 size 가 동일한지 비교.
    // * 이를 재귀적으로 비교 하기 위해서는
    // * 객체를 넣어 줘야 하는 매개 변수 자리에
    // * 한 단계 아래의 객체를 넣어줌(matryoshka.matryoshka).
    // ? 단 실행 조건은 위의 else if 참조.
    // ? 최상위 matryoshka 안에 내부 객체인 matryoshka 가 또다시 존재하고,
    // ? 최상위 matryoshka 객체의 size 가 매개변수 size 보다 클 경우,
    // --> 마트료시카 인형은 단계가 낮아질수록 크기도 작아지기 때문에 위의 경우에만 비교 의미 있음.
  } else if (matryoshka.matryoshka && matryoshka.size > size) {
    return findMatryoshka(matryoshka.matryoshka, size);
  }

  // base case
  return false;
}

const matryoshka = {
  size: 10,
  matryoshka: {
    size: 9,
    matryoshka: null,
  },
};

let output = findMatryoshka(matryoshka, 10);
console.log(output); // --> true

output = findMatryoshka(matryoshka, 8);
console.log(output); // --> false
