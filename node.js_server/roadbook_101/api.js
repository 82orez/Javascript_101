const express = require('express');
const app = express();

app.get('/:type', (req, res) => {
  let { type } = req.params;
  res.send(type);
});

app.listen(8080);

// ? 브라우저 창에서 http://localhost:8080/
// ? 브라우저 창에서 http://localhost:8080/TG