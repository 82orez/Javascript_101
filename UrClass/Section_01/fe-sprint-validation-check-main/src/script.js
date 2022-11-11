// 동영상 강의에 나온 코드를 그대로 실습하세요
// TODO : DOM 으로부터 필요한 엘리먼트를 불러오세요.
const userName = document.querySelector('#username');

const failure = document.querySelector('.failure-message');
const success = document.querySelector('.success-message');

const passWord = document.querySelector('#password');
const confirmPassWord = document.querySelector('#password-retype');

const mismatch = document.querySelector('.mismatch-message');


userName.onkeyup = function() {
    if (isMoreThan4Length(userName.value)) {
        success.classList.remove('hide');
        failure.classList.add('hide');
    } else {
        success.classList.add('hide');
        failure.classList.remove('hide');
    }
}

confirmPassWord.onkeyup = function() {
    if (isMatch(passWord.value, confirmPassWord.value)) {
        mismatch.classList.add('hide');
    } else {
        mismatch.classList.remove('hide');
    }
}

function isMoreThan4Length(value) {
    // TODO : 동영상 강의를 보고 이 함수를 완성하세요.
    return value.length >= 4;
}

function isMatch (password1, password2) {
    // TODO : 동영상 강의를 보고 이 함수를 완성하세요.
    return password1 === password2;
}
