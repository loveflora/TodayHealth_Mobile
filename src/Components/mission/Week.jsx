import React from "react";
import styled from "styled-components";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useRef } from "react";

import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

export default function Week({ day, month }) {
  //? 원하는 기능 구현
  //? 1. 캘린더
  // 1) 날짜 클릭 시 1주 단위로 클릭됨
  // 2) 1주 단위에 맞는 그래프 결과 보여줌

  const chartRef = React.useRef(null);
  // React.useEffect(() => {
  //   const drawChart = async () => {
  //     const ctx = chartRef.current.getContext("2d");
  //     const { chartData } = await import("./chartData");
  //     await new Chart(ctx, chartData);
  //   };
  //   drawChart();
  // }, []);

  const options = {
    // responsive 속성을 false로 지정한다.
    responsive: false,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  let data1 = {
    labels: ["월", "화", "수", "목", "금", "토", "일"],
    // labels: [
    //   "1월",
    //   "2월",
    //   "3월",
    //   "4월",
    //   "5월",
    //   "6월",
    //   "7월",
    //   "8월",
    //   "9월",
    //   "10월",
    //   "11월",
    //   "12월",
    // ],

    datasets: [
      {
        type: "line",
        label: "걸음수",
        backgroundColor: "rgb(255, 99, 132)",
        data: [5200, 5700, 6000, 3500, 6800, 7300, 8500],
        borderColor: "red",
        borderWidth: 2,
      },
    ],
  };

  let data2 = {
    labels: ["월", "화", "수", "목", "금", "토", "일"],
    datasets: [
      {
        type: "line",
        label: "몸무게",
        backgroundColor: "rgb(75, 192, 192)",
        data: [52.8, 52.9, 52.1, 52.4, 52.1, 51.9, 51.8],
      },
    ],
  };

  let data3 = {
    labels: ["월", "화", "수", "목", "금", "토", "일"],
    datasets: [
      {
        type: "line",
        label: "혈압",
        backgroundColor: "#527ade",
        data: [120, 130, 135, 135, 138, 128, 118],
      },
    ],
  };

  let data4 = {
    labels: ["월", "화", "수", "목", "금", "토", "일"],
    datasets: [
      {
        type: "line",
        label: "식전 혈당",
        backgroundColor: "#f2953d",
        data: [120, 110, 90, 100, 105, 106, 130],
      },
      {
        type: "line",
        label: "식후 혈당",
        backgroundColor: "#74cf40",
        data: [180, 190, 170, 161, 153, 188, 170],
      },
    ],
  };

  return (
    <Container>
      <Wrapper>
        <Title>한 주간 기록을 확인해보세요 👍</Title>
        <Calendar />
        {/* 캘린더에서 설정한 날짜 나옴 */}

        <ChartWrapper>
          <canvas ref={chartRef} style={{ height: "0" }}></canvas>
          <Line
            type="line"
            data={data1}
            options={options}
            style={{ position: "relative", width: "400px", padding: "50px 0" }}
          />
          <Line
            type="line"
            data={data2}
            options={options}
            style={{ position: "relative", width: "400px", padding: "50px 0" }}
          />
          <Line
            type="line"
            data={data3}
            options={options}
            style={{ position: "relative", width: "400px", padding: "50px 0" }}
          />
          <Line
            type="line"
            data={data4}
            options={options}
            style={{ position: "relative", width: "400px", padding: "50px 0" }}
          />
        </ChartWrapper>

        <Content></Content>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Title = styled.div`
  font-size: 30px;
  padding-bottom: 30px;
  font-weight: bold;
`;

const Wrapper = styled.div`
  width: 700px;
  height: 740px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
`;

const ChartWrapper = styled.div``;
