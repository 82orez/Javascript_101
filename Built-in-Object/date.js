const year = document.querySelector('#year');
const month = document.querySelector('#month');
const date = document.querySelector('#date');
const bttn = document.querySelector('#bttn');

const current = document.querySelector('#current');
const days = document.querySelector('#days');
const hours = document.querySelector('#hours');

bttn.addEventListener('click', () => {
  let birthday = new Date(`${year.value}-${month.value}-${date.value}`);
  let today = new Date();
  let passedDays = Math.floor((today - birthday) / 1000 / 60 / 60 / 24);
  console.log(passedDays);

  current.innerText = `${today.toLocaleString()} 현재`;
  days.innerText = `날짜로는 ${passedDays}일이 지났고,`;
  hours.innerText = `${passedDays * 24} 시간이 지났습니다.`;
});
