// * 콜백 지옥의 문제점: 가독성이 매우 떨어지고 이에 따라 디버킹 및 유지보수에 어려움.

class UserStorage {
  // login 정보를 받아서 callback 함수 onSuccess(로그인 성공시), onError(로그인 실패시)를 호출.
  loginUser(id, pw, onSuccess, onError) {
    setTimeout(() => {
      if ((id === 'TG' && pw === 'dream') || (id === 'coder' && pw === 'academy')) {
        onSuccess(id);
      } else {
        onError(new Error('not found'));
      }
    }, 2000);
  }
  // 로그인에 성공하면 사용자 정보를 받아 오고, 성공하면 onSuccess, 실패하면 onError 콜백함수 호출.
  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === 'TG') {
        onSuccess({ name: 'TG', role: 'admin' });
      } else {
        onError(new Error('no access'));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt('Enter your ID: ');
const pw = prompt('Enter your Password:');

userStorage.loginUser(
  id,
  pw,
  (user) => {
    userStorage.getRoles(
      user,
      (userWithRole) => {
        alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role!`);
      },
      (error) => {
        console.log(error);
      },
    );
  },
  (error) => {
    console.log(error);
  },
);
