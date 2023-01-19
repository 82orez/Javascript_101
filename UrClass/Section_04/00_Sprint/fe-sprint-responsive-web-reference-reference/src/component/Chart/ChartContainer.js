import { useState } from "react";
import ExmapleChart from "../Chart/ExampleChart";

const ChartContainer = () => {
    const [data, setData] = useState([1, 2, 3, 4, 5, 6]);

    //숫자 랜덤 생성
    const rnd = () => Math.floor(Math.random() * 20) + 1;

    //차트 데이터를 랜덤으로 뿌려주기위한 onClick 이벤트
    const handleData = () => {
        setData([rnd(), rnd(), rnd(), rnd(), rnd(), rnd()]);
    };

    return (
        <>
            <button onClick={handleData}> Data Random</button>
            <ExmapleChart data={data} />
        </>
    )
}

export default ChartContainer;