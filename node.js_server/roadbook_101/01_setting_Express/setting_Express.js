const express = require('express');
const app = express();

// * 서버가 실행될 포트 지정.
// * 기본 포트의 지정이 없으면 3000번을 지정. 'port' = 3000.
app.set('port', process.env.PORT || 3000);

// * app.get(주소, 라우터)
// * 주소에 대한 get 요청이 있을 때 어떻게 res 할 것인가?
app.get('/', (req, res) => {
   res.sendFile(__dirname + '/index.html');
});

// * app.set 으로 지정한 'port' 를 app.get() 으로 불러 옵니다.
app.listen(app.get('port'), () => {
    console.log(`Number ${app.get('port')} port!!`);
});