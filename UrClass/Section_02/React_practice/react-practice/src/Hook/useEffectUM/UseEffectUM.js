import React, {useState} from 'react';
import Info from './UseEffectInfo';

const UseEffectUM = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <button onClick={() => {
        setVisible(!visible);
      }}>
        {visible ? 'Hide!' : 'Emerge!'}
      </button>
      <hr/>
      {visible && <Info />}
    </div>
  );
}

export default UseEffectUM;