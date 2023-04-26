// * 1. 메서드로 호출될 때에는 자신이 속한 객체 자체가 this.
function BlackDog() {
  this.name = 'White dog';
  return {
    name: 'Black dog',
    bark: function () {
      console.log('메서드의 this: ', `${this.name}`);
    }
  };
}

const blackDog = new BlackDog();
blackDog.bark();


// * 2. 화살표 함수는 this binding 이 없으므로 자신이 속한 상위 함수(스코프)의 this 를 불러오게 됨.
// * 여기서는 리턴 되는 객체가 bark 함수 상위 스코프이고 이 객체의 this 는 이 객체가 속한 White dog 함수 스코프.
function WhiteDog() {
  this.name = 'White dog';
  return {
    name: 'Black dog',
    bark: () => {
      console.log('화살표 함수의 this: ', `${this.name}`);
    }
  };
}

const whiteDog = new WhiteDog();
whiteDog.bark();
