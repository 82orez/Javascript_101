const express = require('express');
const app = express();
const cors = require('cors');

// * 프로젝트를 실행하면 statesairline/app.js 파일이 실행된다.

// * 이 파일의 내용은 다음과 같다.
// *포트번호 3001 을 통해 req 를 받을 수 있는 서버를 실행한다.

// * 모든 요청에 대해 CORS 헤더를 붙인다.
app.use(cors());

// * 배열과 객체를 파싱해 준다.
app.use(express.json());

// * 미들웨어를 사용한다.