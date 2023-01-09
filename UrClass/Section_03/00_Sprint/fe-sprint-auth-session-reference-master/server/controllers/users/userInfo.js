const { USER_DATA } = require('../../db/data');

module.exports = (req, res) => {
  // * 우리가 Session Id 로 저장해놓은 값 (여기서는 req.session.userId)을 이용해서
  // * 클라이언트로 보내줄 유저 정보를 찾은 다음 응답으로 보내줍시다.
  const userInfo = USER_DATA.filter((user) => user.id === req.session.userId)[0];

  if (!userInfo) {
    res.status(401).send('Not Authorized');
  } else {
    // * 패스워드는 중요한 정보이므로 응답을 보내기 전에 지우는 것을 잊지 마세요.
    res.json({ ...userInfo, password: undefined });
  }
};
