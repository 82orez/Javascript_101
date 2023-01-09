const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const fs = require('fs');
const https = require('https');
const controllers = require('./controllers');
const app = express();

//? mkcert 에서 발급한 인증서를 사용하기 위한 코드입니다. 삭제하지 마세요!
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const HTTPS_PORT = process.env.HTTPS_PORT || 4000;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// TODO: CORS 설정이 필요합니다. 클라이언트가 어떤 origin 인지에 따라 달리 설정할 수 있습니다.
// ? client 는 http://localhost:3000 을 이용하게 됩니다.
// ? 메서드는 GET, POST, OPTIONS 를 허용합니다.
// ? cookie 는 인증 정보를 포함하는 경우가 많으므로 credentials 도 설정해줍니다.
app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'OPTIONS'],
    credentials: true,
  })
);

app.post('/login', controllers.login);
app.post('/logout', controllers.logout);
app.get('/userinfo', controllers.userInfo);

// ? 인증서 파일들이 존재하는 경우에만 https 프로토콜을 사용하는 서버를 실행합니다.
// ? 만약 인증서 파일이 존재하지 않는경우, http 프로토콜을 사용하는 서버를 실행합니다.
// * 파일 존재여부를 확인하는 폴더는 인증서가 저장되어 있는 /Users/tglee/SSL/ 폴더입니다.
let server;
if (fs.existsSync('/Users/tglee/SSL/key.pem') && fs.existsSync('/Users/tglee/SSL/cert.pem')) {
  const privateKey = fs.readFileSync('/Users/tglee/SSL/key.pem', 'utf8');
  const certificate = fs.readFileSync('/Users/tglee/SSL/cert.pem', 'utf8');
  const credentials = {
    key: privateKey,
    cert: certificate,
  };

  server = https.createServer(credentials, app);
  server.listen(HTTPS_PORT, () => console.log(`🚀 HTTPS Server is starting on ${HTTPS_PORT}`));
} else {
  server = app.listen(HTTPS_PORT, () => console.log(`🚀 HTTP Server is starting on ${HTTPS_PORT}`));
}
module.exports = server;
