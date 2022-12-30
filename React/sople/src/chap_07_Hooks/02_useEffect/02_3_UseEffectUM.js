import React, {useState} from 'react';
import Info from './02_2_UseEffectInfo';

const UseEffectUM = () => {
  // * visible 상태의 초기값을 false 로 설정.
  const [visible, setVisible] = useState(false);

  return (
    <div>
      {/** 버튼을 누르면 visible 의 상태가 반대로 변경됨. */}
      <button onClick={() => {
        setVisible(!visible);
      }}>
        {visible ? 'Hide!' : 'Emerge!'}
      </button>
      <hr/>
      {/** visible 의 상태가 true 일 때만 Info 컴포 실행. */}
      {visible && <Info />}
    </div>
  );
}

export default UseEffectUM;