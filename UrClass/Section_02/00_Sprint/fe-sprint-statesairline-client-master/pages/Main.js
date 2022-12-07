import Head from 'next/head';
import { useEffect, useState } from 'react';
import { getFlight } from '../api/FlightDataApi';
import FlightList from './component/FlightList';
import LoadingIndicator from './component/LoadingIndicator';
import Search from './component/Search';
import Debug from './component/Debug';
// ? 후반 테스트를 진행할 때 아래 import 를 삭제합니다.

export default function Main() {
  // 항공편 검색 조건을 담고 있는 상태
  const [condition, setCondition] = useState({
    departure: 'ICN',
  });
  // ? 초기값 빈 배열 수정.
  const [flightList, setFlightList] = useState([]);

  // ? Loading indicator 를 위한 상태 설정.
  const [isLoading, setIsLoading] = useState(true);

  // 주어진 검색 키워드에 따라 condition 상태를 변경시켜주는 함수
  const search = ({ departure, destination }) => {
    if (condition.departure !== departure || condition.destination !== destination) {
      console.log('condition 상태를 변경시킵니다');

      // TODO: search 함수가 전달 받아온 '항공편 검색 조건' 인자를 condition 상태에 적절하게 담아보세요.-> Done.
      setCondition({ departure, destination });
    }
  };

  // ? 아래는 삭제
  // const filterByCondition = (flight) => {
  //   let pass = true;
  //   if (condition.departure) {
  //     pass = pass && flight.departure === condition.departure;
  //   }
  //   if (condition.destination) {
  //     pass = pass && flight.destination === condition.destination;
  //   }
  //   return pass;
  // };

  global.search = search; // 실행에는 전혀 지장이 없지만, 테스트를 위해 필요한 코드입니다. 이 코드는 지우지 마세요!

  // TODO: Effect Hook 을 이용해 AJAX 요청을 보내보세요.
  // ? condition 이 바뀌면, Effect Hook 에 의해 getFlight(condition) 함수가 호출
  // ? 리턴값으로는 Promise 객체를 리턴하며, Promise 성공 시 조건을 만족하는 항공편 목록이 함께 전달됩니다.

  // TODO: 더불어, 네트워크 요청이 진행됨을 보여주는 로딩 컴포넌트(<LoadingIndicator/>)를 제공해보세요.
  // ? 먼저 새로운 state 를 파일 상단에 만들고
  // ? fetch 요청의 전후로 setIsLoading 을 설정해 주어 보다 나은 UX를 구현.
  // ? Urclass 개념학습 참조.

  useEffect(() => {
    setIsLoading(true);
    getFlight(condition).then((filteredList) => {
      setFlightList(filteredList);
      setIsLoading(false);
    })
  }, [condition]);


  // useEffect(() => {
  //   setIsLoading(true);
  //   getFlight(condition).then((filteredFlightList) => {
  //     setFlightList(filteredFlightList);
  //     setIsLoading(false);
  //   });
  // }, [condition]);

  // TODO: 테스트 케이스의 지시에 따라 search 함수를 Search 컴포넌트로 내려주세요.-> Done.
  return (
    <div>
      <Head>
        <title>States Airline</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>여행가고 싶을 땐, States Airline</h1>
        {/** 하위 컴포로 내려주기 */}
        <Search onSearch={search} />
        <div className="table">
          <div className="row-header">
            <div className="col">출발</div>
            <div className="col">도착</div>
            <div className="col">출발 시각</div>
            <div className="col">도착 시각</div>
            <div className="col"></div>
          </div>
          {/*<FlightList list={flightList} />*/}
          {isLoading ? <LoadingIndicator /> : <FlightList list={flightList} />}
        </div>

        <div className="debug-area">
          <Debug condition={condition} />
        </div>
        <img id="logo" alt="logo" src="codestates-logo.png" />
      </main>
    </div>
  );
}
