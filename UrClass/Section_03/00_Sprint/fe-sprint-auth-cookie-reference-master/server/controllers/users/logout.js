module.exports = (req, res) => {
  res
    .status(205)
    .clearCookie('cookieId', {
      domain: 'localhost',
      path: '/',
      sameSite: 'none',
      secure: true,
    })
    .send('Logged Out Successfully');
};
