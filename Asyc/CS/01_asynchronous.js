// 터미널에 `node index.js`를 입력하여 비동기 코드가 작동하는 순서를 확인해보세요.
const printString = (string) => {
    setTimeout(function () {
        console.log(string);
    }, Math.floor(Math.random() * 100) + 1);
};

const printAll = () => {
    printString('A');
    printString('B');
    printString('C');
};

printAll();

console.log(`아래와 같이 비동기 코드는 순서를 보장하지 않습니다!`);