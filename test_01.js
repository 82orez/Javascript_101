class Prefixer {
  constructor(prefix) {
    // * 생성자의 경우 새로 생성될 인스턴스와 this binding. --> 여기서는 prefixer 인스턴스(객체)와 binding.
    this.prefix = prefix;
  }
  add(arr) {
    // * 프로토타입 메서드 add 내부에서의 this 는 add 메서드를 호출한 객체 --> 여기서는 prefixer 인스턴스(객체)와 binding.
    console.log(this.prefix);

    return arr.map(function(item) {
      // ! 콜백 함수 내부에서의 this ?
      // 결론: undefined
      // 1. 일반 함수로 호출했기 때문에 원칙적으로 전역 객체와 binding.
      // 2. 그런데 class 내부에서는 암묵적으로 strict mode 가 적용됨.
      // 3. 따라서 결과적으로 undefined 와 binding 됨.
      return this.prefix + item;
    });
  }
}

const prefixer = new Prefixer('-webkit-');

// TypeError 발생.
console.log(prefixer.add(['a', 'b']));