const { USER_DATA } = require('../../db/data');
const { generateToken } = require('../helper/tokenFunctions');

module.exports = async (req, res) => {
  const { userId, password } = req.body.loginInfo;
  const { checkedKeepLogin } = req.body;
  const userInfo = {
    ...USER_DATA.filter((user) => user.userId === userId && user.password === password)[0],
  };

   // * TODO: 로그인 로직을 구현하세요.

  // * userInfo 에는 요청의 바디를 이용해 db 에서 조회한 유저정보가 담겨있습니다. 콘솔에서 userInfo 를 출력해보세요.
  // * 유저의 정보가 출력된다면 해당 유저가 존재하는 것임으로 로그인 성공에 대한 응답을 전송해야합니다.

  // * 만약 undefined 가 출력된다면 해당하는 유저가 존재하지 않는 것임으로 로그인 실패에 대한 응답을 전송해야합니다.
  if (!userInfo.id) {
    res.status(401).send('Not Authorized');
  }

  // * 일치하는 유저가 있을 경우(로그인 성공)에는 쿠키에 JWT 를 담아 클라이언트로 전송해야합니다.
  // * 필요한 데이터를 담은 두 종류의 JWT(access, refresh)를 생성합니다.

  // * request 로부터 받은 checkedKeepLogin 을 통해 로그인 상태 유지 여부를 확인합니다.
  // * 로그인 상태가 유지되어야 한다면 Access Token 과 Refresh Token 모두 보내야 합니다.
  // * 로그인 상태가 유지되길 원하지 않는다면 Access Token 만 보내야 합니다.

  // ? Access Token 은 Session 쿠키로 Refresh Token 은 Persistent(영속성) Cookie 로 보내야합니다.
  // * Access Token 의 쿠키 아이디는 access_jwt, Refresh Token 의 쿠키 아이디는 refresh_jwt 로 작성하세요.

  // * 클라이언트에게 바로 응답을 보내지않고 서버의 /useinfo 로 리다이렉트해야 합니다.
  // * express 의 res.redirect 메서드를 참고하여 서버의 /userinfo 로 리다이렉트 될 수 있도록 구현하세요.

  const { accessToken, refreshToken } = await generateToken(userInfo, checkedKeepLogin);

  if (refreshToken) {
    // ? Expires 옵션이 있는 Persistent(영속성) Cookie
    res.cookie('refresh_jwt', refreshToken, {
      domain: 'localhost',
      path: '/',
      sameSite: 'none',
      httpOnly: true,
      secure: true,
      expires: new Date(Date.now() + 24 * 3600 * 1000 * 7), // 7일 후 소멸되는 Persistent Cookie
    });
  }
  // ? Expires 옵션이 없는 Session Cookie
  res.cookie('access_jwt', accessToken, {
    domain: 'localhost',
    path: '/',
    sameSite: 'none',
    httpOnly: true,
    secure: true,
  });
  return res.redirect('/userinfo');
};
