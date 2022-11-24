const printString = (string, callback) => {
    setTimeout(function () {
        console.log(string);
        callback();
    }, Math.floor(Math.random() * 100) + 1);
};

const printAll = () => {
    printString('A', () => {
        printString('B', () => {
            printString('C', () => {});
        });
    });
};

printAll();

console.log(
    `아래와 같이 Callback 함수를 통해 비동기 코드의 순서를 제어할 수 있습니다!`
);
