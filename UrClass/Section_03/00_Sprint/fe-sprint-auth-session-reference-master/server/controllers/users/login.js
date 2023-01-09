const { USER_DATA } = require('../../db/data');

module.exports = (req, res) => {
  const { userId, password } = req.body.loginInfo;
  const { checkedKeepLogin } = req.body;

  const userInfo = {
    ...USER_DATA.filter((user) => user.userId === userId && user.password === password)[0],
  };

  if (!userInfo.id) {
    res.status(401).send('Not Authorized');
  } else if (checkedKeepLogin) {
    // * Session Id 생성.
    // * req.session + .변수명(userId) 를 사용해 세션 객체에 userInfo.id를 저장
    req.session.userId = userInfo.id;
    req.session.cookie.maxAge = 24 * 6 * 60 * 10000;
    res.redirect('/userinfo');
  } else {
    req.session.userId = userInfo.id;
    res.redirect('/userinfo');
  }
};
