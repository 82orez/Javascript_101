// axios를 사용하기 위해서는 설치한 axios를 불러와야 합니다.
import axios from 'axios';

// Promise ver
axios
    .post('https://koreanjson.com/users', { nickName: 'ApeachIcetea', age: '20' })
    .then((response) => {
        const { data } = response;
        console.log(data);
    })
    .catch((error) => console.log(error));

// Async / Await ver
// async function request() {
//   const response = await axios.post('https://koreanjson.com/users', {
//     name: 'ApeachIcetea',
//     age: '20',
//   });
//   const { data } = response;
//   console.log(data);
// }

// request();

const appDiv = document.getElementById('app');
appDiv.innerHTML = `
<h1>Axios ☺️</h1>
<h3>console 창을 확인해주세요! 👇👇👇</h3>
`;
