const { USER_DATA } = require('../../db/data');
const { generateToken } = require('../helper/tokenFunctions');

module.exports = async (req, res) => {
  const { userId, password }   /*
   * TODO: 로그아웃 로직을 구현하세요. 로그아웃 요청은 쿠키에 저장된 토큰을 삭제하는 과정을 포함해야 합니다.
   *
   * cookie-parser의 clearCookie('쿠키의 키') 메서드로 해당 키를 가진 쿠키를 삭제할 수 있습니다.
   * 만약 res.clearCookie('user') 코드가 실행된다면 `user=....` 쿠키가 삭제됩니다.
   * Refresh Token을 발급받았던 유저라면 Refresh Token 또한 삭제되어야 합니다.
   *
   * 로그아웃 성공에 대한 상태 코드는 205가 되어야합니다.
   */= req.body.loginInfo;
  const { checkedKeepLogin } = req.body;
  const userInfo = {
    ...USER_DATA.filter((user) => user.userId === userId && user.password === password)[0],
  };

  /*
   * TODO: 로그인 로직을 구현하세요.
   *
   * userInfo 에는 요청의 바디를 이용해 db 에서 조회한 유저정보가 담겨있습니다. 콘솔에서 userInfo 를 출력해보세요.
   * 유저의 정보가 출력된다면 해당 유저가 존재하는 것임으로 로그인 성공에 대한 응답을 전송해야합니다.
   * 만약 undefined 가 출력된다면 해당하는 유저가 존재하지 않는 것임으로 로그인 실패에 대한 응답을 전송해야합니다.
   *
   * 로그인 성공 시에는 쿠키에 JWT 를 담아 전송해야합니다.
   *
   * 로그인 상태가 유지되어야 한다면 Access Token 과 Refresh Token 모두 보내야합니다.
   * Access Token 은 Session 쿠키로 Refresh Token 은 Persistent Cookie 로 보내야합니다.
   * Access Token 의 쿠키 아이디는 access_jwt, Refresh Token 의 쿠키 아이디는 refresh_jwt 로 작성하세요.
   *
   * 로그인 상태가 유지되길 원하지 않는다면 Access Token 만 보내야합니다.
   *
   * 클라이언트에게 바로 응답을 보내지않고 서버의 /useinfo 로 리다이렉트해야 합니다.
   * express 의 res.redirect 메서드를 참고하여 서버의 /userinfo 로 리다이렉트 될 수 있도록 구현하세요.
   */

  if (!userInfo.id) {
    res.status(401).send('Not Authorized');
  }

  const { accessToken, refreshToken } = await generateToken(userInfo, checkedKeepLogin);

  if (refreshToken) {
    res.cookie('refresh_jwt', refreshToken, {
      domain: 'localhost',
      path: '/',
      sameSite: 'none',
      httpOnly: true,
      secure: true,
      expires: new Date(Date.now() + 24 * 3600 * 1000 * 7), // 7일 후 소멸되는 Persistent Cookie
    });
  }
  res.cookie('access_jwt', accessToken, {
    domain: 'localhost',
    path: '/',
    sameSite: 'none',
    httpOnly: true,
    secure: true,
    // Expires 옵션이 없는 Session Cookie
  });
  return res.redirect('/userinfo');
};
