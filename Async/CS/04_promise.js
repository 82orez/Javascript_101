// 터미널에 `node index.js`를 입력하여 비동기 코드가 작동하는 순서를 확인해보세요.
const printString = (string) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
            console.log(string);
        }, Math.floor(Math.random() * 100) + 1);
    });
};

const printAll = () => {
    printString('A')
        .then(() => {
            return printString('B');
        })
        .then(() => {
            return printString('C');
        });
};

printAll();

console.log(
    `아래와 같이 Promise 를 통해 비동기 코드의 순서를 제어할 수 있습니다!`
);
