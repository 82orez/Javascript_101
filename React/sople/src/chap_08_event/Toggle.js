import React, { useState } from 'react';

function Toggle(props) {
  const [isToggleOn, setIsToggleOn] = useState(true);

  const handleClick = (e) => {
    setIsToggleOn(!isToggleOn);
  };

  return <button onClick={handleClick}>{isToggleOn ? 'Toggle On' : 'Toggle off'}</button>;
}

export default Toggle;
