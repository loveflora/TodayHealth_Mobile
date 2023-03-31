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
      setCompare("지난 달보다 " + -compareScore + "점 낮네요.. ");
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
      <TotalBox>
        <TotalTitle>{num}월 총 포인트</TotalTitle>
        <TotalScore>{point}점</TotalScore>
        <TotalContent>{compare}</TotalContent>
      </TotalBox>
      <Content>
        <Ul>
          <UlTitle>📍 세부 점수내역 📍</UlTitle>
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
      </Content>
      <Btn
        onClick={() => {
          setShow(!show);
        }}
      >
        점수 부여 기준 ?
      </Btn>
      {show && (
        <Modal>
          <ModalContainer>
            <ModalTitle>점수 부여 기준</ModalTitle>
            <ModalContent>
              <ModalSubTitle>월 20회 (평일) * 2점 = 만점 100점</ModalSubTitle>
              <div>- 매일 걷기 (100)</div>
              <div>- 매일 혈압 측정 (100)</div>
              <div>- 매일 혈당 측정 (100)</div>
              <div> - 몸무게 측정 (* 주1회 5점 = 20)</div>
              <div>- 매일 8잔 물마시기 (100)</div>
              <div> - 제때 약 복용하기 (100)</div>
              <div> - 세끼 식사하기 (100)</div>
              <ModalSubTitle>
                월별 포인트 백분율 = 현재점수 * 100 / 620
              </ModalSubTitle>
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
  width: 700px;
  height: 630px;

  @media (min-width: 50rem) {
    & {
      height: 760px;
    }
  }
`;

const MonthChange = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 24px;
  gap: 100px;
  font-weight: bold;

  @media (min-width: 50rem) {
    & {
      gap: 200px;
    }
  }
`;

const TotalBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px;
  padding: 30px;
  width: 340px;
  height: 200px;
  background-color: #eee;
  border-radius: 10px;

  @media (min-width: 50rem) {
    & {
      width: 500px;
      height: 220px;
    }
  }
`;

const TotalTitle = styled.div`
  font-size: 20px;
  font-weight: bold;

  @media (min-width: 50rem) {
    & {
      font-size: 24px;
    }
  }
`;

const TotalScore = styled.div`
  font-size: 38px;
  padding: 10px;

  @media (min-width: 50rem) {
    & {
      font-size: 50px;
    }
  }
`;

const TotalContent = styled.div`
  font-size: 20px;

  @media (min-width: 50rem) {
    & {
      font-size: 24px;
    }
  }
`;

const Content = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  height: 300px;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin-top: 10px;
  padding: 0 10px;
  overflow: auto;

  @media (min-width: 50rem) {
    & {
      width: 600px;
      height: 350px;
    }
  }
`;

const Ul = styled.ul`
  margin: 30px 0;
  padding: 0 20px;
  width: 100%;

  @media (min-width: 50rem) {
    & {
      padding: 0 40px;
    }
  }
`;

const UlTitle = styled.ul`
  padding: 0 10px;
  width: 100%;
  font-size: 20px;
  font-weight: bold;
  padding-bottom: 20px;

  @media (min-width: 50rem) {
    & {
      font-size: 24px;
      margin: 30px 0;
      padding: 0 40px;
    }
  }
`;

const Li = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: 22px;
  border-bottom: 1px solid #e9ecef;
  padding: 10px 34px;

  @media (min-width: 50rem) {
    & {
      font-size: 25px;
      padding: 10px 40px;
    }
  }
`;

const Title = styled.div``;

const MissionScore = styled.div`
  font-weight: bold;
  font-size: 30px;
`;

const Div = styled.div`
  font-size: 20px;

  @media (min-width: 50rem) {
    & {
      font-size: 25px;
    }
  }
`;

const ScoreWrapper = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

const Btn = styled.button`
  padding: 10px 20px;
  margin: 10px;
  font-weight: bold;
  font-size: 16px;
  color: white;
  outline: none;
  background-color: #58c78f;
  border-radius: 10px;
  border: none;

  @media (min-width: 50rem) {
    & {
      font-size: 20px;
    }
  }
`;

const Modal = styled.table`
  width: 200px;
  height: 100px;
  border-radius: 10px;
  background-color: #58c78f;
  box-shadow: 5px 5px 5px;
  position: absolute;
  opacity: 0.95;
  animation: appear 0.5s ease-in-out;

  @keyframes appear {
    from {
      opacity: 0;
    }
    to {
      opacity: 0.95;
    }
  }

  & {
    width: 400px;
    height: 400px;
  }
}


@media (min-width: 50rem) {
  & {
    
    & {
      width: 530px;
      height: 580px;
    }
  }
}
`;

const ModalContainer = styled.div``;

const ModalContent = styled.div`
  font-size: 18px;
  color: white;
  margin: 10px;

  @media (min-width: 50rem) {
    & {
      font-size: 22px;
    }
  }
`;

const ModalTitle = styled.div`
  font-size: 26px;
  font-weight: bold;
  color: white;
  margin-top: 30px;

  @media (min-width: 50rem) {
    & {
      font-size: 34px;
      margin-top: 40px;
    }
  }
`;

const ModalSubTitle = styled.div`
  font-weight: bold;
  padding: 14px;

  @media (min-width: 50rem) {
    & {
      padding: 20px;
    }
  }
`;

const CloseBtn = styled.button`
  width: 100px;
  padding: 5px;
  font-weight: bold;
  font-size: 18px;
  background-color: white;
  color: #58c78f;
  border: none;
  border-radius: 5px;
  outline: none;
  margin-bottom: 20px;

  @media (min-width: 50rem) {
    & {
      font-size: 24px;
    }
  }
`;
