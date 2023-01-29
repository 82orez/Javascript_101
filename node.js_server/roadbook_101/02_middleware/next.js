// * 미들웨어는 req <----> res 사이에서 추가 작업(기능)을 하는 역할.
// * 모든 요청에 동일한 미들웨어를 적용할 때는 app.use() 메소드 사용.
// * next() 는 다음 미들웨어로 건어가는 역할.

const express = require('express');
const app = express();

const myLogger = function(req, res, next) {
  console.log(`http request is ${req.method}, url is ${req.url}`);
  next();
}
app.use(myLogger);

app.get('/', (req, res, next) => {
  res.send('Hello World!');
  next();
});


app.listen(3000);