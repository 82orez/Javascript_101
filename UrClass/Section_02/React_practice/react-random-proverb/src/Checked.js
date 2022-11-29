import React, {useState} from 'react';

function CheckboxExample() {
  const [isChecked, setIsChecked] = useState(false);
  const handleChecked = (e) => {
    setIsChecked(e.target.checked);
  };


  const [name, setName] = useState('');
  const handleChange = (e) => {setName(e.target.value)};

  const [showPopup, setShowPopup] = useState(false);
  const togglePopup = () => {
    // Pop up 의 open/close 상태에 따라
    // 현재 state 가 업데이트 되도록 함수를 완성하세요.
    if (showPopup === false) {
      setShowPopup(true);
    } else {
      setShowPopup(false);
    }
  };


  return (
    <div>
      <input type={'checkbox'} checked={isChecked} onChange={handleChecked} />
      <span>{isChecked ? 'Checked!!' : 'Unchecked'}</span><br/>

      <input type={'text'} value={name} onChange={handleChange}/>
      <button onClick={() => alert(name)}>Button</button>
      <h1>{name}</h1><br/>

      <h1>Fix me to open Pop Up</h1>
      {/* 버튼을 클릭했을 때 Pop up 의 open/close 가 작동하도록
          button tag 를 완성하세요. */}
      <button className="open" onClick={togglePopup}>Open me</button>
      {showPopup ? (
        <div className="popup">
          <div className="popup_inner">
            <h2>Success!</h2>
            <button className="close" onClick={togglePopup}>
              Close me
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default CheckboxExample;