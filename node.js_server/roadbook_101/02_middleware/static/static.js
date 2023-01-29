const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000);

// * CSS, JS, image 파일과 같은 정적인 파일들을 관리하기 위한 static middleware.
// ? __dirname 는 현재 파일의 절대경로를 의미.
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/static.html');
});

app.listen(app.get('port'), () => {
  console.log(app.get('port'), 'server is on');
  console.log('절대경로: ',__dirname);
});

// ? 브라우저 창에서 http://localhost:3000/