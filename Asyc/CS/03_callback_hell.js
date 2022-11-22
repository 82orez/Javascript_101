// 터미널에 `node index.js`를 입력하여 비동기 코드가 작동하는 순서를 확인해보세요.
const printString = (string, callback) => {
    setTimeout(function () {
        console.log(string);
        callback();
    }, Math.floor(Math.random() * 100) + 1);
};

const printAll = () => {
    printString('A', () => {
        printString('B', () => {
            printString('C', () => {
                printString('D', () => {
                    printString('E', () => {
                        printString('F', () => {
                            printString('G', () => {
                                printString('H', () => {
                                    printString('I', () => {
                                        printString('J', () => {
                                            printString('K', () => {
                                                printString('L', () => {
                                                    printString('M', () => {
                                                        printString('N', () => {
                                                            printString('O', () => {
                                                                printString('P', () => {});
                                                            });
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
};

printAll();

console.log(
    `아래와 같이 Callback 함수를 통해 비동기 코드의 순서를 제어할 수 있지만 코드가 길어질 수록 복잡해지고 가독성이 낮아지는 Callback Hell이 발생하는 단점이 있습니다.`
);
