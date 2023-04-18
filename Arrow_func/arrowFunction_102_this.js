// * 1. 일반 함수는 자신이 속한 객체를 this 로 인식.
function BlackDog() {
  // this.name = 'White dog';
  return {
    name: 'Black dog',
    bark: function () {
      console.log('일반 함수의 this: ', `${this.name}`);
    }
  };
}

const blackDog = new BlackDog();
blackDog.bark();


// * 2. 화살표 함수는 this 가 없으므로 상위 함수 또는 전역의 this 를 불러오게 됨.
// *    여기서는 'white dog' 을 this 로 인식.
function WhiteDog() {
  // this.name = 'White dog';
  return {
    name: 'Black dog',
    bark: () => {
      console.log('화살표 함수의 this: ', `${this.name}`);
    }
  };
}

const whiteDog = new WhiteDog();
whiteDog.bark();
