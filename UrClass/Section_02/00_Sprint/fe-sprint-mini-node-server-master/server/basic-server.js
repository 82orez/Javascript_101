const express = require('express')
const app = express();
const cors = require('cors')

app.use(cors()); // 모든 요청/응답에 CORS 처리

app.use(express.json({strict: false})) // 자동 바디 파싱

const PORT = 4999;
const ip = 'localhost';


app.post('/upper', function (req, res){
  let result = req.body;
  result = result.toUpperCase();
  res.json(result); // 다시 데이터를 보내줄 때 json 화 해서 보내주는 메소드
})
app.post('/lower', function (req, res){
  let result = req.body;
  result = result.toLowerCase();
  res.json(result);
})

app.use(function(req, res, next) { // 400에러 즉, 클라이언트의 잘못으로 인한 에러는 인자에 err 를 넣지 않는다.
  res.status(404).send('Something broke! 404');
});

app.use(function(err, req, res, next) { //에러 처리
  console.error(err.stack);
  res.status(500).send('Something broke! 500');
});

app.listen(PORT, ip, () => {
  console.log(`http server listen on ${ip}:${PORT}`);
});
