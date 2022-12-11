// * 미들웨어는 req <----> res 사이에서 추가 작업(기능)을 하는 역할.
// * 미들웨어는 app.use() 메소드를 통해 사용.
// * next() 는 다음 미들웨어로 건어가는 역할.

const express = require('express');
const app = express();

// * next 가 없으면
app.get('/', (req, res, next) => {
    // * 다음 줄을 실행하고 res.end() 를 자동으로 실행하여 프로그램이 종료됨.
    // * 결과적으로 다음의 myLogger 함수가 실행되지 않음.
    res.send('Hello World!');
    next();
});

// * res 전에 다음 미들웨어를 실행한다.
const myLogger = function(req, res, next) {
    console.log('Logged!');
    next();
}

app.use(myLogger);

app.listen(3000);

