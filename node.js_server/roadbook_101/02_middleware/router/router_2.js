const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000);

// CSS, JS, image 파일과 같은 정적인 파일들을 관리하기 위한 static middleware.
app.use(express.static(__dirname + '/static'));

app.get('/', (req, res) => {
  const output = `
  <h1>Hello World!</h1>
  <h1>get, /</h1>
  <img src="./sample.png" alt='node.js' width="500px" />
  `;
  res.send(output);
});

app.get('/user/:id', (req, res) => {
  res.send(req.params.id + '님의 개인 페이지입니다.');
});

app.listen(3000, () => {
  console.log('Sever is on');
});

// ? 브라우저 창에서 http://localhost:3000/
// ? 브라우저 창에서 http://localhost:3000/user/TG/
