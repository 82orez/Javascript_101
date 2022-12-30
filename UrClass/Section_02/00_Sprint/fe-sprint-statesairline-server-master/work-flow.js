// * 1. statesairline
// ? statesairline/app.js 는 서비스에 필요한 미들웨어와 웹 서버를 실행하는 코드가 작성되어 있습니다.
// const flightRouter = require('./router/flightRouter');
// const bookRouter = require('./router/bookRouter');
// const airportRouter = require('./router/airportRouter');

// * 2. router
// ? statesairline/router/ 안에는 airport API, book API, flight API 요청을 수행하는 라우터가 작성되어 있습니다.
// ? 작성된 라우터 내용을 통해 API 요청을 받을 수 있습니다.

// * 3. controller
// ? statesairline/controller/ 안에는 정의된 API 요청을 수행하는 코드를 작성해야 합니다.
// ! ( airportController.js 에 작성된 내용을 참고하여 작성합니다. )

// 4. repository
// statesairline/repository/flightlist.js 는 서비스에서 제공하는 항공편 데이터가 작성되어 있습니다. 이 데이터로 서비스를 구현합니다.
// statesairline/repository/airportlist.js 는 서비스에서 제공하는 공항 데이터가 작성되어 있습니다.

// 5.test
// statesairline/__test__/statesairline.03_1_useRef_focus.js 은 Jest 스펙을 가지고 있으며 코드 테스트를 위한 테스트 케이스가 작성되어 있습니다.
// npm install 을 통해서 package.json 에 설정된 패키지를 설치하세요.
// npm start 를 통해 서버를 실행하세요.
// Postman 으로 API 동작 여부를 확인하세요.
// npm test 를 통해 테스트를 실행하세요.
// 서버에서 사용되는 포트 번호로 실행되지 않는 경우, 관리자 권한을 부여하여 실행하거나 해당 포트를 사용 중인 프로그램을 종료 후 재시작을 합니다.

// * Bare Minimum Requirements
// ? statesairline/controller/flightController.js와 statesairline/controller/bookController.js 에 코드를 작성하세요.
// ? Express 공식문서에서 req.query , req.params 를 사용하는 방법을 확인하세요. Query 와 Params 를 기준으로 데이터를 필터링하는 코드를 작성해야 합니다.
// ? 예약 데이터는 controller/bookController.js 안에 작성된 let booking = []; 배열에 저장해야 합니다.
// ? Flight API -> 항공편 수정은 Advanced Challenges 입니다.
