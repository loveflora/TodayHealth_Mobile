import React, { useEffect } from "react";
import styled from "styled-components";
import { useState } from "react";

import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

export default function Month({ day, month }) {
  const monthlyMissions = [
    {
      walk: 80,
      bp: 80,
      bst: 80,
      bw: 20,
      water: 80,
      pill: 100,
      meal: 100,
    },
    {
      walk: 90,
      bp: 90,
      bst: 70,
      bw: 20,
      water: 90,
      pill: 100,
      meal: 100,
    },
    {
      walk: 85,
      bp: 90,
      bst: 50,
      bw: 10,
      water: 50,
      pill: 90,
      meal: 100,
    },
    {
      walk: 80,
      bp: 80,
      bst: 80,
      bw: 10,
      water: 100,
      pill: 100,
      meal: 95,
    },
    {
      walk: 100,
      bp: 95,
      bst: 50,
      bw: 20,
      water: 100,
      pill: 100,
      meal: 100,
    },
    {
      walk: 90,
      bp: 80,
      bst: 85,
      bw: 15,
      water: 90,
      pill: 90,
      meal: 80,
    },
    {
      walk: 50,
      bp: 60,
      bst: 30,
      bw: 5,
      water: 50,
      pill: 90,
      meal: 100,
    },
    {
      walk: 80,
      bp: 95,
      bst: 80,
      bw: 20,
      water: 80,
      pill: 100,
      meal: 90,
    },
    {
      walk: 100,
      bp: 80,
      bst: 60,
      bw: 5,
      water: 50,
      pill: 100,
      meal: 80,
    },
    {
      walk: 100,
      bp: 95,
      bst: 90,
      bw: 10,
      water: 70,
      pill: 80,
      meal: 80,
    },
    {
      walk: 100,
      bp: 100,
      bst: 80,
      bw: 15,
      water: 70,
      pill: 100,
      meal: 100,
    },
    {
      walk: 100,
      bp: 100,
      bst: 100,
      bw: 20,
      water: 100,
      pill: 100,
      meal: 100,
    },
  ];

  //? 월별 점수 총합
  let monthlyPoints = [];
  let sum = 0;
  for (let i = 0; i < monthlyMissions.length; i++) {
    let item = monthlyMissions[i];

    // 객체 반복문 for in
    for (const key in item) {
      sum += item[key];
    }
    monthlyPoints.push(sum);
    sum = 0;
  }

  // 월별 포인트 백분율 = 현재점수 * 100 / 620
  const score = Math.round((monthlyPoints[month - 1] * 100) / 620);

  const [num, setNum] = useState(month);
  const [point, setPoint] = useState(score);

  const [compare, setCompare] = useState("");

  useEffect(() => {
    //? 월별 평균 포인트
    setPoint(Math.round((monthlyPoints[num - 1] * 100) / 620));

    //? 월별 점수 비교
    // 1) 1월이면 -> 글자 없음
    // 2) 양수이면 -> 증가했어요
    // 3) 음수이면 -> 감소했어요
    let compareScore =
      Math.round((monthlyPoints[num - 1] * 100) / 620) -
      Math.round((monthlyPoints[num - 2] * 100) / 620);

    if (num === 1) {
      setCompare("");
    } else if (compareScore > 0) {
      setCompare("지난 달보다 " + compareScore + "점 높네요 ~ 👏");
    } else if (compareScore === 0) {
      setCompare("지난 달만큼 하셨네요 ! 😉");
    } else if (compareScore < 0) {
      setCompare("지난 달보다 " + -compareScore + "점 낮네요 .. ? ");
    }
  }, [num]);

  const prevMonth = () => {
    if (num > 1) {
      setNum(num - 1);
    }
  };

  const nextMonth = () => {
    num < 12 && setNum(num + 1);
  };

  const [show, setShow] = useState(false);

  return (
    <Container>
      {show && <Back></Back>}
      <MonthChange>
        <AiOutlineArrowLeft
          style={{ cursor: "pointer" }}
          onClick={() => {
            prevMonth();
          }}
        />
        <div>{num}월</div>
        <AiOutlineArrowRight
          style={{ cursor: "pointer" }}
          onClick={() => {
            nextMonth();
          }}
        />
      </MonthChange>
      <MonthlyPoint>
        <div style={{ fontSize: "24px", fontWeight: "bold" }}>
          {num}월 총 포인트
        </div>
        <div style={{ fontSize: "50px", padding: "10px" }}>{point}점</div>
        <div style={{ fontSize: "24px" }}>{compare}</div>
      </MonthlyPoint>
      <MissionContent>
        <Ul>
          <div
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              paddingBottom: "20px",
            }}
          >
            📍 세부 점수내역 📍
          </div>
          <Li>
            <Title>걷기</Title>
            <ScoreWrapper>
              <MissionScore>{monthlyMissions[num - 1].walk}</MissionScore>
              <Div>점</Div>
            </ScoreWrapper>
          </Li>
          <Li>
            <Title>혈압</Title>
            <ScoreWrapper>
              <MissionScore>{monthlyMissions[num - 1].bp}</MissionScore>
              <Div>점</Div>
            </ScoreWrapper>
          </Li>
          <Li>
            <Title>혈당</Title>
            <ScoreWrapper>
              <MissionScore>{monthlyMissions[num - 1].bst}</MissionScore>
              <Div>점</Div>
            </ScoreWrapper>
          </Li>
          <Li>
            <Title>체중</Title>
            <ScoreWrapper>
              <MissionScore>{monthlyMissions[num - 1].bw}</MissionScore>
              <Div>점</Div>
            </ScoreWrapper>
          </Li>
          <Li>
            <Title>물 8잔 마시기</Title>
            <ScoreWrapper>
              <MissionScore> {monthlyMissions[num - 1].water}</MissionScore>
              <Div>점</Div>
            </ScoreWrapper>
          </Li>
          <Li>
            <Title>약 복용</Title>
            <ScoreWrapper>
              <MissionScore> {monthlyMissions[num - 1].pill}</MissionScore>
              <Div>점</Div>
            </ScoreWrapper>
          </Li>
          <Li style={{ border: "none" }}>
            <Title>세끼 식사</Title>
            <ScoreWrapper>
              <MissionScore> {monthlyMissions[num - 1].meal}</MissionScore>
              <Div>점</Div>
            </ScoreWrapper>
          </Li>
        </Ul>
      </MissionContent>
      <ScoreBtn
        onClick={() => {
          setShow(!show);
        }}
      >
        점수 부여 기준 ?
      </ScoreBtn>
      {show && (
        <Modal>
          <ModalContainer>
            <div
              style={{
                fontSize: "30px",
                fontWeight: "bold",
                color: "white",
                margin: "30px 0",
              }}
            >
              점수 부여 기준
            </div>
            <ModalContent>
              <div style={{ fontWeight: "bold", paddingBottom: "20px" }}>
                월 20회 (평일) * 2점 = 만점 100점
              </div>
              <div>- 매일 걷기 (100)</div>
              <div>- 매일 혈압 측정 (100)</div>
              <div>- 매일 혈당 측정 (100)</div>
              <div> - 몸무게 측정 (* 주1회 5점 = 20)</div>
              <div>- 매일 8잔 물마시기 (100)</div>
              <div> - 제때 약 복용하기 (100)</div>
              <div> - 세끼 식사하기 (100)</div>
              <div style={{ fontWeight: "bold", paddingTop: "20px" }}>
                월별 포인트 백분율 = 현재점수 * 100 / 620
              </div>
            </ModalContent>
            <CloseBtn
              onClick={() => {
                setShow(!show);
              }}
            >
              닫기
            </CloseBtn>
          </ModalContainer>
        </Modal>
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 40px;
`;

const Back = styled.div`
  width: 100%;
  height: 973px;
  top: 0;
  opacity: 0.5;
  position: absolute;
  background-color: gray;
`;

const MonthChange = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 30px;
  gap: 200px;
`;

const MonthlyPoint = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  background-color: #eee;
  border-radius: 10px;
  margin: 30px;
  width: 500px;
  height: 220px;
`;

const MissionContent = styled.ul`
  border: 1px solid #ccc;
  height: 350px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  overflow: auto;
  margin-top: 10px;
  padding: 0 10px;
`;

const Ul = styled.ul`
  margin: 30px 0;
  padding: 0 40px;
  width: 100%;
`;

const Li = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: 25px;
  border-bottom: 1px solid #e9ecef;
  padding: 10px 40px;
`;

const Title = styled.div``;

const MissionScore = styled.div`
  font-weight: bold;
  font-size: 30px;
`;

const Div = styled.div``;

const ScoreWrapper = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

const ScoreBtn = styled.button`
  font-weight: bold;
  font-size: 20px;
  outline: none;
  background-color: #58c78f;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 10px;
  margin: 10px;
`;

const CloseBtn = styled.button`
  font-weight: bold;
  font-size: 28px;
  outline: none;
  background-color: white;
  color: white;
  border: none;
  padding: 5px;
  border-radius: 5px;
  color: #58c78f;
  width: 100px;
`;

const Modal = styled.table`
  width: 530px;
  height: 580px;
  background-color: #58c78f;
  position: absolute;
  border-radius: 10px;
  opacity: 0.95;
  animation: appear 0.5s ease-in-out;
  box-shadow: 5px 5px 5px;

  @keyframes appear {
    from {
      opacity: 0;
    }
    to {
      opacity: 0.95;
    }
  }
`;

const ModalContainer = styled.div``;

const ModalContent = styled.div`
  font-size: 22px;
  color: white;
  margin: 30px;
`;
