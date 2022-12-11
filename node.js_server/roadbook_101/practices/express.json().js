const express = require('express');
const app = express();

// * 특정 요청에 대해 CORS 허용.
const jsonParser = express.json({ strict: false });

app.post('/api/users', jsonParser, function (req, res) {
  // do something;
});

// * 첫번째 줄의 파싱은 배열과 객체만 파싱을 해주는데, 두번째 줄의 파싱은 모든 것을 파싱해준다.
app.use(express.json());
app.use(express.json({strict : false}));
