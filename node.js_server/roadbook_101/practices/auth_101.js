const express = require('express');
const app = express();

// * 다음은 HTTP 요청에서 토큰이 있는지를 판단하여,
// * 이미 로그인한 사용자일 경우 성공, 아닐 경우 에러를 보내는 미들웨어 예제입니다.
// * 토큰(Token): 주로 사용자 인증에 사용.

app.use((req, res, next) => {
  // 토큰이 있는지 확인, 없으면 받아줄 수 없음.
  if(req.headers.token){
    req.isLoggedIn = true;
    next();
  } else {
    res.status(400).send('invalid user')
  }
});