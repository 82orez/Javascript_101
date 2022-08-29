let selectMenu = document.testForm.major;

function displaySelect() {
    let selectedText = selectMenu.options[selectMenu.selectedIndex].innerText;
    let selectedValue = selectMenu.options[selectMenu.selectedIndex].value;
    alert(`선택하신 학과는 ${selectedText} 입니다. Value는 ${selectedValue}`);
}

let subject = document.testForm.subject;
console.log(subject);

let mailing1 = document.testForm.mailing1.checked;
let mailing2 = document.testForm.mailing2.checked;
let mailing3 = document.testForm.mailing3.checked;

console.log(mailing1);
console.log(mailing2);
console.log(mailing3);
