// 터미널에 `node index.js`입력하여 비동기 코드가 작동하는 순서를 확인해보세요.
const printString = (string) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
            console.log(string);
        }, Math.floor(Math.random() * 100) + 1);
    });
};

const printAll = async () => {
    await printString('A');
    await printString('B');
    await printString('C');
};

printAll();

console.log(
    `Async/Await 을 통해 Promise 를 간결한 코드로 작성할 수 있게 되었습니다.`
);
