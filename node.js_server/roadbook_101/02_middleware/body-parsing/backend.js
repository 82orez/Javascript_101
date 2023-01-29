const express = require('express');
const app = express();
const logger = require('morgan');

app.use('/test', express.static('test.html'));

// * morgan 옵션
// ? 개발시: dev
// ? 배포시: combined
app.use(logger('dev'));

// * Form 형태의 요청을 파싱할 때.
app.use(express.urlencoded({ extended: true }));

// * JSON 형태의 요청을 파싱할 때.
// * 첫번째 줄의 파싱은 배열과 객체만 파싱을 해주는데, 두번째 줄의 파싱은 모든 것을 파싱해준다.
// app.use(express.json());
app.use(express.json({ strict: false }));

app.post('/test', (req, res) => {
  console.log(req.body);
  // console.log(req.headers);
  return res.redirect('/test');
});

app.listen(8080, () => {
  console.log('Sever is on...');
});

// ? 브라우저 창에서 http://localhost:8080/test
