// * Implementation Tree
// Tree 구현을 위한 기본적인 코드가 작성되어 있습니다. Tree 자료구조의 특성을 이해하고 FILL_ME_IN 을 채워 테스트를 통과해주세요.
// *  멤버 변수
// 입력 데이터를 담을 수 있는 value
// 하위 노드를 저장할 수 있는 Array 타입의 children

// * 메서드
// insertNode(value): 입력받은 value 를 Tree 에 계층적으로 추가할 수 있어야 합니다.
// contains(value): 트리에 포함된 데이터를 찾을 수 있어야 합니다.

// * 주의 사항
// value 는 어떠한 값도 들어갈 수 있지만 현재 구현하는 Tree 는 숫자로 제한합니다.
//   사용 예시
// const rootNode = new Tree(null);
//
// for(let i = 0; i <= 4; i++) {
//   if(rootNode.children[i]) {
//     rootNode.children[i].insertNode(i);
//   }
//   rootNode.insertNode(i);
// }
// rootNode; // {value: null, children: Array(5)}
// rootNode.contains(5); // false
// rootNode.contains(1); // true

class Tree {
  constructor(value) {
    // * constructor 로 만든 객체는 트리의 Node 가 됩니다.
    this.value = value;
    this.children = [];
  }

  // 트리의 삽입 메서드를 만듭니다.
  insertNode(value) {
    // 값이 어떤 이름으로 만들어지고 어느 위치에 붙는지 떠올리는 것이 중요합니다.
    // TODO: 트리에 붙게 될 childNode 를 만들고, children 에 넣어야 합니다.
    const childNode = FILL_ME_IN;
    this.children.push(FILL_ME_IN);
  }

  // 트리 안에 해당 값이 포함되어 있는지 확인하는 메서드를 만듭니다.
  contains(value) {
    // TODO: 값이 포함되어 있다면 true 를 반환하세요.
    if (FILL_ME_IN) {
      return true;
    }
    // TODO: 값을 찾을 때까지 children 배열을 순회하며 childNode 를 탐색하세요.

    // 전부 탐색했음에도 불구하고 찾지 못했다면 false 를 반환합니다.
    return false;
  }
}