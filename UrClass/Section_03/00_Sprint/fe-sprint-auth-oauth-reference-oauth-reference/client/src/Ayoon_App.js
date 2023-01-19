// App.js
const getAccessToken = (authorizationCode) => {
    axios.post("https://localhost:4000/callback", {authorizationCode})
    .then(res => {
        setAccessToken(res.data.accessToken)
        setIsLogin(true)
    })
};
// App.js에서 MyPage로 필요한 Props 내려주는 것도 잊지 마세요!
<Mypage 
    accessToken={accessToken}
    setIsLogin={setIsLogin}
    setAccessToken={setAccessToken}
/>

// MyPage.js
const logoutHandler = () => {
    // axios로 delete 요청에 데이터를 담아 보낼 땐, 'data'라는 키 값에 담아서 보내주기!!
    axios.delete("https://localhost:4000/logout", {data : { accessToken }})
    .then(res => {
        // 레퍼런스 코드에는 없지만, 데이터를 초기화해주는 습관은 들여주는게 좋아요!!
        setGithubUser(null)
        setServerResource(null)
        setIsLogin(false)
        setAccessToken('')
    })
};