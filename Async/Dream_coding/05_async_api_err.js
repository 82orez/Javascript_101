function delay(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}

async function getApple() {
    await delay(1000);
    return 'Apple';
}

function getBanana() {
    // ! 에러 발생 여부 조정 가능.
    // return delay(2000).then(() => 'Banana');
    return new Promise((resolve, reject) => {
       setTimeout(() => {
           return reject('err');  // ? or reject(new Error('failed'));
       }, 500);
    });
}

function pickFruitsAll() {
    return Promise.all([getApple(), getBanana()])
        .then(fruits => {
        return fruits.join('///')
    })
}

pickFruitsAll()
    .then(fruit => console.log(fruit))
    .catch(error => console.log(error));