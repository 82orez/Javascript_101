const { USER_DATA } = require('../../db/data');

// * JWT 는 verifyToken 으로 검증할 수 있습니다. 먼저 tokenFunctions 에 작성된 여러 메서드들의 역할을 파악하세요.
const { verifyToken, generateToken } = require('../helper/tokenFunctions');

module.exports = async (req, res) => {
  /*
   * TODO: 토큰 검증 여부에 따라 유저 정보를 전달하는 로직을 구현하세요.
   *
   * Access Token 에 대한 검증이 성공하면 복호화된 payload 를 이용하여 USER_DATA 에서 해당하는 유저를 조회할 수 있습니다.
   * Access Token 이 만료되었다면 Refresh Token 을 검증해 Access Token 을 재발급하여야 합니다.
   * Access Token 과 Refresh Token 모두 만료되었다면 상태 코드 401을 보내야합니다.
   */

  const accessToken = req.cookies['access_jwt'];
  const refreshToken = req.cookies['refresh_jwt'];
  const accessPayload = await verifyToken('access', accessToken);

  if (accessPayload) {
    const userInfo = { ...USER_DATA.filter((user) => user.id === accessPayload.id)[0] };
    if (!userInfo) {
      return res.status(401).send('Not Authorized');
    }
    delete userInfo.password;
    return res.json(userInfo);
  } else if (refreshToken) {
    const refreshPayload = await verifyToken('refresh', refreshToken);

    if (!refreshPayload) {
      return res.status(401).send('Not Authorized');
    }

    const userInfo = USER_DATA.filter((user) => user.id === refreshPayload.id)[0];
    const { accessToken } = await generateToken(userInfo);

    res.cookie('access_jwt', accessToken, {
      // ? Expires 옵션이 없는 Session Cookie
      domain: 'localhost',
      path: '/',
      sameSite: 'none',
      httpOnly: true,
      secure: true,
    });

    return res.json({ ...userInfo, password: undefined });
  }
  return res.status(401).send('Not Authorized');
};
