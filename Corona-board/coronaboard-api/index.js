const express = require('express');
const app = express();

// * Express v4.16.0 부터는 body-parser 를 따로 설치 하지 않고, Express 내장 미들웨어인 express.json( )을 사용합니다.
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.json({message: 'Hello CoronaBoard!'})
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Sever is running on port: ${port}!`);
});

