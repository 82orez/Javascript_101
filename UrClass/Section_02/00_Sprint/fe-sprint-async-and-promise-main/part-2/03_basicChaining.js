const path = require('path');
const { getDataFromFilePromise } = require('./02_promiseConstructor');

const user1Path = path.join(__dirname, 'files/user1.json');
const user2Path = path.join(__dirname, 'files/user2.json');

// HINT: getDataFromFilePromise(user1Path) 및 getDataFromFilePromise(user2Path)를 이용해 작성합니다
const readAllUsersChaining = () => {
    // TODO: 여러개의 Promise 를 then 으로 연결하여 작성합니다,
    let result = [];
    return getDataFromFilePromise(user1Path)
        .then((user1Data) => {
            result.push(JSON.parse(user1Data));
            return getDataFromFilePromise(user2Path);
        })
        .then((user2Data) => {
            result.push(JSON.parse(user2Data));
            return result;
        });
};

readAllUsersChaining();

module.exports = {
    readAllUsersChaining,
};
