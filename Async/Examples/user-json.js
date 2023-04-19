const result = document.querySelector('#result');
const url = 'https://jsonplaceholder.typicode.com/users';

// ? 1. fetch 와 Promise chain
fetch(url)
  .then(re => re.json())
  .then(users => display(users))

// ? 2.Async 와 await
// const init = async () => {
//   const response = await fetch(url);
//   const users = await response.json();
//   // 앞의 두 단계가 먼저 실행되고 난 후, 다음 함수 실행 시작.
//   display(users);
// };
// // Async 함수는 Promise 를 반환한다는 것을 잊지 말자.
// init().then();


// ? display()
// 배열 안의 객체를 순차적으로 받아 와서 새로운 배열을 생성 후: map()
// join('') 함수로 하나의 문자열로 변환시킨 후 DOM 에 기록.
const display = (users) => {
  const dis = users.map((user) => {
    return `
      <table>
        <tr>
          <th>Name</th>
          <td>${user.name}</td>
        </tr>
        <tr>
          <th>ID</th>
          <td>${user.username}</td>
        </tr>
        <tr>
          <th>Email</th>
          <td>${user.email}</td>
        </tr>
      </table>
`;
  }).join('');
  result.innerHTML = dis;
};


// <ul>
//   <li>${user.name}</li>
//   <li>${user.username}</li>
//   <li>${user.email}</li>
// </ul>