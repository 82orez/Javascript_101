const express = require('express');
const app = express();

// * 라우팅은 URI(또는 경로) 및 특정한 HTTP 요청 메소드(GET, POST 등)인 특정 "엔드포인트" 에 대한 클라이언트 요청에 애플리케이션이 응답하는 방법을 결정하는 것을 말합니다.
// * 각 라우트는 하나 이상의 핸들러 함수를 가질 수 있으며, 이러한 함수는 라우트가 일치할 때 실행됩니다.
// * 라우트 정의에는 다음과 같은 구조가 필요합니다.
// * app.METHOD(PATH, HANDLER);

// ? app 은 express 의 인스턴스입니다.
// ? METHOD 는 HTTP 요청 메소드입니다.
// ? PATH 는 서버에서의 경로입니다.
// ? HANDLER 는 라우트가 일치할 때 실행되는 함수입니다.

// * 홈 페이지 요청에 대해 Hello World!로 응답:
app.get('/', function (req, res) {
  res.send('Hello World!');
});

// * 애플리케이션의 홈 페이지인 루트 라우트(/)에서 POST 요청에 응답:
app.post('/', function (req, res) {
  res.send('Got a POST request');
});

// * /user 라우트에 대한 PUT 요청에 응답:

app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user');
});

// * /user 라우트에 대한 DELETE 요청에 응답:

app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user');
});
