let itemList = [];

let addBtn = document.querySelector('#add');
addBtn.onclick = addList;

function addList() {
    let item = document.querySelector('#item').value;
    if (item !== "") {
        itemList.push(item);
        document.querySelector('#item').value = "";
        document.querySelector('#item').focus();
    } else {
        alert('아이템을 입력해 주세요.');
    }
    showList();
}
function showList() {
    let list = "<ul>";
    for (let i = 0; i < itemList.length; i++) {
        list += `<li>${itemList[i]}<span class="close" id="${i}">X</span></li>`;
    }
    list += "</ul>";
    console.log(list);
    document.querySelector('#itemList').innerHTML = list;
}
