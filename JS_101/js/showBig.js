let bigPic = document.querySelector('#cup');
let smallPics = document.querySelectorAll('.small');
let isOpen = false;

for (let i = 0; i < smallPics.length; i++) {
    smallPics[i].onclick = function () {
        bigPic.src = this.src;
    };
}

let view = document.querySelector('#view');

view.addEventListener('click', function () {
    if (isOpen ===false){
        document.querySelector('#detail').style.display = 'block';
        view.innerHTML = '상세 설명 닫기';
        isOpen = true;
    }
    else {
        document.querySelector('#detail').style.display = 'none';
        view.innerHTML = '상세 설명 보기';
        isOpen = false;

    }
},);