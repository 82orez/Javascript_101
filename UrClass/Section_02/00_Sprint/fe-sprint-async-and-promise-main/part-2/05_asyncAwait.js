const path = require('path');
const { getDataFromFilePromise } = require('./02_promiseConstructor');

const user1Path = path.join(__dirname, 'files/user1.json');
const user2Path = path.join(__dirname, 'files/user2.json');

const readAllUsersAsyncAwait = async () => {
  // TODO: async/await 키워드를 이용해 작성합니다.
    let result = [];

    let user1Data = await getDataFromFilePromise(user1Path);
    let user2Data = await getDataFromFilePromise(user2Path);

    result.push(JSON.parse(user1Data));
    result.push(JSON.parse(user2Data));

    return result;
}

readAllUsersAsyncAwait();

module.exports = {
  readAllUsersAsyncAwait
}