const totalNum = document.querySelector('#seed');
const selectNum = document.querySelector('#total');
const bttn = document.querySelector('#raffle');
const result = document.querySelector('#result');

bttn.addEventListener('click', (e) => {
  e.preventDefault();
  let str = '';
  console.log(typeof totalNum.value);

  for (let i = 0; i < selectNum.value; i++) {
    str += `${Math.floor(Math.random() * totalNum.value + 1)}번 `;
  }

  result.innerText = str;
  result.classList.add('show');
});
