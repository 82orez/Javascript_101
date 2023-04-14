const bttn = document.querySelector('button');
const result = document.querySelector('#result');

bttn.addEventListener('click', () => {
  const emailAddress = document.querySelector('#userEmail').value;

  // 입력 받은 값이 이메일 형식과 일치하는지 확인하기 위해 정규 표현식을 이용.
  const regExp = /(^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*)@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/g;

  if (!regExp.test(emailAddress)) {
    alert('Check your email!');
  } else {
    let userName = emailAddress.split('@')[0];
    userName = userName.slice(0, 3);

    const domain = emailAddress.split('@')[1];
    console.log(userName);
    console.log(domain);

    result.innerText = `${userName}****@${domain}`;
  }
});
