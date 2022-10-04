// async & await
// clear style of using promise

// 1. Promise
function fetchUser() {
    // Suppose network response 'TG' in 10 sec.
    return new Promise((resolve, reject) => {
        setTimeout(() => {resolve('TG');}, 2000);
    });
}

const user = fetchUser();
user.then((user) => {console.log(user)});
console.log(user);



// 2. Promise -> Async
async function asyncFetchUser() {
    return 'async TG';
}
const asyncUser = asyncFetchUser();
console.log(asyncUser);
asyncUser.then((asyncUser)=>{console.log(asyncUser)})
