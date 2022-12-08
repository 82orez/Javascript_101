// 모든 node 웹 서버 애플리케이션은 웹 서버 객체를 만들어야 합니다. 이 때 createServer 를 이용합니다.
const http = require('http');
const PORT = 4999;
const ip = 'localhost';

const server = http.createServer((request, response) => {
  // * method, url, headers
  const { method, url, headers } = request;

  // * 요청 바디. -> 공식문서 그대로 긁어옴.
  let body = [];
  request
    .on('data', (chunk) => {
      body.push(chunk);
    })
    .on('end', () => {
      body = Buffer.concat(body).toString();
      // * 여기서 `body`에 전체 요청 바디가 문자열로 담겨있습니다.
      //  * 공식 문서 '지금까지 살펴본 내용'

      // * method 와 url 에 따라 분기.
      // ? CORS 관련 헤더를 OPTIONS 응답에 적용해야 합니다.
      //   클라이언트의 preflight request 에 대한 응답을 돌려줘야 합니다.
      //   preflight request 에 대한 응답 헤더는 이미 작성되어 있습니다.

      // ? 만약에 메소드가 포스트이고 url 이 upper 이면 대문자를 리턴.
      // ? 만약에 메소드가 포스트이고 url 이 lower 이면 소문자를 리턴.
      // ? 나머지는 error 처리. bad request.
      if(request.method === 'POST' && request.url === '/upper'){
        response.writeHead(200, defaultCorsHeader)
        response.end(body.toUpperCase())
      }else if(request.method === 'POST' && request.url === '/lower'){
        response.writeHead(200, defaultCorsHeader)
        response.end(body.toLowerCase())
      }else if(request.method === 'OPTIONS'){
        response.writeHead(200, defaultCorsHeader)
        response.end()
      }else{
        response.writeHead(404, defaultCorsHeader)
        response.end('잘못된 요청')
      }
    });

  // console.log(`http request method is ${request.method}, url is ${request.url}`);
  // response.writeHead(200, defaultCorsHeader);
  // response.end('hello mini-server sprints');
});

server.listen(PORT, ip, () => {
  console.log(`http server listen on ${ip}:${PORT}`);
});

const defaultCorsHeader = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Accept',
  'Access-Control-Max-Age': 10,
};
