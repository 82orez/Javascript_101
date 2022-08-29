function openPop() {
    let newWin = window.open('popup.html', '','width=400, height=400');
    if (newWin == null) {
        alert('팝업 차단을 해제해 주세요.');
    }
}

window.onload = openPop;