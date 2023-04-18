// callback 함수를 인자(매개변수)로 받아서 그 함수를 그대로 실행함.
function printImmediately(callback) {
  callback();
}

function printWithDelay(callback, timeout) {
  setTimeout(callback, timeout);
}

// callback 이 먼저 실행되지만 2초 후에 출력.
printWithDelay(() => console.log('callback'), 2000);
printImmediately(() => console.log('hello'));

class UserStorage {
  loginUser(id, pw) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if ((id === 'TG' && pw === 'dream') || (id === 'coder' && pw === 'academy')) {
          resolve(id);
        } else {
          reject(new Error('not found'));
        }
      }, 2000);
    });
  }
  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === 'TG') {
          resolve({ name: 'TG', role: 'admin' });
        } else {
          reject(new Error('no access'));
        }
      }, 1000);
    });
  }
}

const userStorage = new UserStorage();
const id = prompt('Enter your ID: ');
const pw = prompt('Enter your PW');

userStorage
  .loginUser(id, pw)
  .then((user) => userStorage.getRoles(user))
  .then((userWithRole) => alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role!`))
  .catch((error) => {
    console.log(error);
  });
