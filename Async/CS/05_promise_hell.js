// 터미널에 `node index.js`를 입력하여 비동기 코드가 작동하는 순서를 확인해보세요.
const printString = (string) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(string);
        }, Math.floor(Math.random() * 100) + 1);
    });
};

const printAll = () => {
    printString('A').then((value) => {
        console.log(value);

        printString('B').then((value) => {
            console.log(value);

            printString('C').then((value) => {
                console.log(value);

                printString('D').then((value) => {
                    console.log(value);

                    printString('E').then((value) => {
                        console.log(value);

                        printString('F').then((value) => {
                            console.log(value);

                            printString('G').then((value) => {
                                console.log(value);

                                printString('H').then((value) => {
                                    console.log(value);

                                    printString('I').then((value) => {
                                        console.log(value);

                                        printString('J').then((value) => {
                                            console.log(value);

                                            printString('K').then((value) => {
                                                console.log(value);

                                                printString('L').then((value) => {
                                                    console.log(value);

                                                    printString('M').then((value) => {
                                                        console.log(value);

                                                        printString('N').then((value) => {
                                                            console.log(value);

                                                            printString('O').then((value) => {
                                                                console.log(value);

                                                                printString('P').then((value) => {
                                                                    console.log(value);
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
    });
};

printAll();

console.log(
    `아래와 같이 Promise를 통해 비동기 코드의 순서를 제어할 수 있지만 Callback 함수와 같이 코드가 길어질수록 복잡해지고 가독성이 낮아지는 Promise Hell이 발생하는 단점이 있습니다.`
);
