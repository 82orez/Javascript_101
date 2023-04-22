const container = document.querySelector('#container');
const arrows = document.querySelectorAll('.arrow');

const pics = ['pic-1.jpg', 'pic-2.jpg', 'pic-3.jpg', 'pic-4.jpg', 'pic-5.jpg'];

container.style.backgroundImage = `url(images/${pics[0]})`;

let i = 0;

arrows.forEach((arrow) => {
  arrow.addEventListener('click', (e) => {
    // * 이벤트(click)가 발생한 요소의 id 값이 'left' 이면
    if (e.target.id === 'left') {
      i--;
      if (i < 0) {
        i = pics.length -1;
      }
    // * 이벤트(click)가 발생한 요소의 id 값이 'right' 이면
    } else if (e.target.id === 'right') {
      i++;
      if (i >= pics.length) {
        i = 0;
      }
    }
    container.style.backgroundImage = `url(images/${pics[i]})`
  });
});
