// 모든 node 웹 서버 애플리케이션은 웹 서버 객체를 만들어야 합니다. 이 때 createServer 를 이용합니다.
const express = require('express');
const app = express();
const cors = require('cors');
app.set('port', process.env.PORT || 4999);

app.use(cors());

// * express.json({strict:false}) --> 기본값은 true (object 만 허용된 상태)
app.use(express.json({strict: false}));

app.post('/upper', (req, res) => {
    let result = req.body;
    result = result.toUpperCase();
    res.json(result);
});

app.post('/lower', (req, res) => {
    let result = req.body;
    result = result.toLowerCase();
    res.json(result);
});

app.use((req, res, next) => {
    res.status(404).send('Bad hello');
});

app.listen(app.get('port'), () => {
    console.log(`http server listen on ${app.get('port')}`);
});


const defaultCorsHeader = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Accept',
    'Access-Control-Max-Age': 10,
};
