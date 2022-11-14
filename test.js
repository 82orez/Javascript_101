console.log('hello');

const logIn = document.querySelector('#btn_login');
const userName = document.querySelector('input#id');

// logIn.addEventListener('click', e => {
//     console.log(userName);
// })

userName.addEventListener('keyup', e => {
    console.log(userName.value);
})
