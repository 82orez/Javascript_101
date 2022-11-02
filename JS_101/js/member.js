let userID = document.querySelector('#user-id');

userID.addEventListener('change', function () {
    if (userID.value.length <4 || userID.value.length > 16) {
        alert('5~15자리를 입력해 주세요.');
        userID.value = "";
        userID.focus();
    }
});


let secretNum1 = document.querySelector('#user-pw1');
let secretNum2 = document.querySelector('#user-pw2');

secretNum1.addEventListener('change', function () {
    if (secretNum1.value.length < 8) {
        alert('비밀번호는 8자리 이상을 입력해 주세요.');
        secretNum1.value = "";
        secretNum1.focus();
    }
});

secretNum2.addEventListener('change', function () {
    if (secretNum2.value.length != secretNum1.value.length) {
        alert('비밀번호를 재확인해 주세요.');
        secretNum1.value = "";
        secretNum2.value = "";
        secretNum1.focus();
    }
})