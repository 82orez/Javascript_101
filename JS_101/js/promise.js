// Built-in-object for asynchronous operation
// state: pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
const promise = new Promise((resolve, reject) => {
    // some heavy work (such as network, reading files)
    // executor: Callback function
    // 주의점: 코드 실행시 무조건 실행되므로 사용자가 원할 때만 실행하고 싶을 때는 사용해서는 안 됨.
    // 예) 클릭했을 때만, 파일을 읽어 오기
    setTimeout(() => {
        resolve("TG");
    }, 2000);
    console.log("Doing something...");
});

// 2. Consumers: then, catch, finally
promise.then((value) => {
    console.log(value);
});
