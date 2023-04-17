// * 아래 문장들은 XMLHttpRequest() 로 요청으로 보내는 공식.
let xhr = new XMLHttpRequest();
xhr.open('Get', 'xml.json');
xhr.send();

xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    let students = JSON.parse(xhr.responseText);
    renderHTML(students);
  }
}

// 불러 올 JSON Data 의 형식은 배열 안에 요소로써 객체가 있는 모습.
function renderHTML(arrJSON) {
  let output = '';

  for (const obj of arrJSON) {
    output += `
      <h2>${obj.name}</h2>
      <ul>
        <li>Major: ${obj.major}</li>
        <li>Grade: ${obj.grade}</li>
      </ul>`
  }
  document.querySelector('#result').innerHTML = output;
}
