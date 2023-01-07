const { USER_DATA } = require('../../db/data');

module.exports = (req, res) => {
  const { userId, password } = req.body.loginInfo;
  const { checkedKeepLogin } = req.body;
  const userInfo = {
    ...USER_DATA.filter((user) => user.userId === userId && user.password === password)[0],
  };
  const cookieOptions = {
    domain: 'localhost',
    path: '/',
    sameSite: 'none',
    secure: true,
    expires: new Date(Date.now() + 24 * 3600 * 1000 * 7), // 7일 후 소멸되는 Persistent Cookie
    httpOnly: true,
  };
  if (!userInfo.id) {
    res.status(401).send('Not Authorized');
  } else if (checkedKeepLogin) {
    res.cookie('cookieId', userInfo.id, cookieOptions);
    res.redirect('/userinfo');
  } else {
    delete cookieOptions.expires;

    res.cookie('cookieId', userInfo.id, cookieOptions); // Expires 옵션이 없는 Session Cookie
    res.redirect('/userinfo');
  }
};
