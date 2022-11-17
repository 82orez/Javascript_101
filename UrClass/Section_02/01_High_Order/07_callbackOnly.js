function getDomain(email) {
    return email.split('@')[1].split('.')[0];
}

function getUserId(email) {
    return email.split('@')[0];
}

let output = callbackOnly(getDomain, {
    status: 'success',
    data: 'mike@codestates.com',
});

function callbackOnly(callback, response) {
    // TODO: 여기에 코드를 작성합니다.
    if (response.status === 'success') {
        return callback(response.data);
    } else {
        return 'Something went wrong!';
    }
}


console.log(output);