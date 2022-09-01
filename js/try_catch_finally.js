try {
    nonExistingFunc();     // 없는 함수 실행으로 오류 발생
    // document.write('오류가 발생하지 않았습니다.');
}

// 오류 발생시 실행
catch (e) {
    document.write('오류가 발생했습니다.');
}

// 오류발생 여부와 상관없이 실행
finally {
    window.onload = openPop;
}



function openPop() {
    let newWin = window.open('ex016_2_popup.html', '','width=400, height=400');
    if (newWin == null) {
        alert('팝업 차단을 해제해 주세요.');
    }
}

