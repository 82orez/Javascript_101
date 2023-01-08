module.exports = (req, res) => {
  /*
   * TODO: 로그아웃 로직을 구현하세요. 로그아웃 요청은 쿠키에 저장된 토큰을 삭제하는 과정을 포함해야 합니다.
   *
   * cookie-parser 의 clearCookie('쿠키의 키') 메서드로 해당 키를 가진 쿠키를 삭제할 수 있습니다.
   * 만약 res.clearCookie('user') 코드가 실행된다면 `user=....` 쿠키가 삭제됩니다.
   * Refresh Token 을 발급받았던 유저라면 Refresh Token 또한 삭제되어야 합니다.
   *
   * 로그아웃 성공에 대한 상태 코드는 205가 되어야합니다.
   */
  const refreshToken = req.cookies['refresh_jwt'];
  if (refreshToken) {
    res.clearCookie('refresh_jwt', {
      domain: 'localhost',
      path: '/',
      sameSite: 'none',
      secure: true,
    });
  }
  res.clearCookie('access_jwt', {
    domain: 'localhost',
    path: '/',
    sameSite: 'none',
    secure: true,
  });
  return res.status(205).send('Logged Out Successfully');
};
