import React, { useState } from 'react';

function ConfirmButton(props) {
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleConfirm = () => {
    setIsConfirmed(!isConfirmed);
  };

  return (
    <button onClick={handleConfirm} disabled={isConfirmed}>
      {isConfirmed ? 'Confirmed' : 'to confirm'}
    </button>
  );
}

export default ConfirmButton;
