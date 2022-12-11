// * Javascript 는 hoisting 이 된 후에는 synchronous(차례대로) 하게 실행됨.

console.log(1);
console.log(2);
console.log(3);

console.log(1);
setTimeout(() => console.log(2), 1000);
console.log(3);
// --------------------------------------------

// * callback 함수를 인자(매개변수)로 받아서 그 함수를 즉시 실행함.
function printImmediately(callback) {
    callback();
}

// * callback 함수와 시간을 인자(매개변수)로 받아서 그 함수를 특정 시간 후에 실행함.
function printWithDelay(callback, timeout) {
    setTimeout(callback, timeout);
}

// * 'callback' 이 먼저 실행되지만 2초 후 나중에 출력.
printWithDelay(() => console.log("hello first"), 2000);
printImmediately(() => console.log("hello later"));

// -------------------------------------------------

class UserStorage {
    loginUser(id, pw, onSuccess, onError) {
        setTimeout(() => {
            if(
                (id ==='TG' && pw === 'dream') || (id ==='coder' && pw === 'academy')
                ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }
    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === 'TG') {
                onSuccess({name: 'TG', role: 'admin'});
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}


// const userStorage = new UserStorage();
// const id = prompt('Enter your ID: ');
// const pw = prompt('Enter your PW');
//
// userStorage.loginUser(
//     id,
//     pw,
//     (user) => {
//         userStorage.getRoles(
//             user,
//             (userWithRole) => {
//                 alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role!`);
//             },
//             (error) => {
//                 console.log(error)
//             }
//         )
//     },
//     (error)=> {
//         console.log(error);
//     }
// );
