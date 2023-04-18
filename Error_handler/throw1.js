const num = document.querySelector('#user-number');
const bttn = document.querySelector('button');
const result = document.querySelector('#result');

bttn.addEventListener('click', (e) => {
  const n = num.value;

  try {
    if (n === '' || isNaN(n)) {
      throw new Error('Pleas enter a Number!');
    }
    if (parseInt(n) < 10) {
      result.innerText = num.value;
    }
    if (parseInt(n) >= 10) {
      throw "10보다 작은 수를 입력하세요.";
    }
  } catch (err) {
    alert(err);

    console.error(err);
    console.error(err.name);
    console.error(err.message);
  } finally {
    num.value = '';
  }
});