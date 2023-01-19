import React, { useRef, useEffect, useState } from "react";
import Chart from "chart.js";


//canvas를 사용해 useRef를 적용하기 위하여 chart.js@2 버전을 사용하고 있습니다.
const ExmapleChart = ({ data }) => {
  //useRef 사용.
  const chartRef = useRef(null);
  //chart를 저장해둘 state를 마련.
  const [myChart, setMyChart] = useState(null);

  //컴포넌트가 로딩되면서 동시에 떠야 하므로 useEffect를 사용.
  useEffect(() => {
    //chartRef가 존재하지 않으면 동작하지 X
    if (!chartRef) return;

    //차트를 그리기 위한 객체 생성
    const ctx = chartRef.current.getContext("2d");

    //실제 차트를 그리는 곳
    const myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "# of Votes",
            data: data,
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)"
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)"
            ],
            borderWidth: 1
          }
        ]
      }
    });

    //차트 상태를 저장
    setMyChart(myChart);
  }, []);

  //data와 차트가 바뀔 때마다 렌더링
  useEffect(() => {
    if (!myChart) return;

    myChart.data.datasets[0].data = data;
    myChart.update();
  }, [data, myChart]);

  return <canvas ref={chartRef} id="myChart" width="400" height="400" />;
};

export default ExmapleChart;
