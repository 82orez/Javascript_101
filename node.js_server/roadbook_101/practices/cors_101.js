const express = require('express');
const app = express();

const cors = require('cors');

// * 특정 요청에 대해 CORS 헤더를 붙일 때
app.get('/products/:id', cors(), function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for a Single Route'})
});

// * 모든 요청에 대해 CORS 헤더를 붙일 때
app.use(cors());