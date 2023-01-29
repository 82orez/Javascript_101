const remainTime = document.querySelector('#remain-time');

function diffDay() {
  const masTime = new Date('2077-4-10');
  const todayTime = new Date();
  const diff = masTime - todayTime;

  const diffYear = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
  const diffDay = Math.floor(diff / (1000 * 60 * 60 * 24) % 365);
  const diffHour = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const diffMin = Math.floor((diff / (1000 * 60)) % 60);
  const diffSec = Math.floor((diff / 1000) % 60);

  remainTime.textContent = `${diffYear} years ${diffDay} days ${diffHour} hours ${diffMin} minutes ${diffSec} seconds!`;
}

diffDay();
setInterval(diffDay, 1000);