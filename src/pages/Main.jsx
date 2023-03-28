import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useSelector } from "react-redux";

import MainHeader from "../Components/main/MainHeader";
import ContentTitle from "../Components/main/ContentTitle";
import MissionBox from "../Components/main/MissionBox";
import MissionCompleted from "../Components/main/MissionCompleted";

export default function Main() {
  //? ---- 구현하고 싶은 기능 ------
  // [완료 23.03.22] Modal창 클릭 시 스르륵 올라옴
  // ----> animation: slide 1s ease-in-out
  //       @keyframes slide {from to 사용}

  const userData = useSelector(({ user }) => user);

  const [complete, setComplete] = useState([
    { id: 1, fin: false },
    { id: 2, fin: false },
    { id: 3, fin: false },
    { id: 4, fin: false },
  ]);

  const onComplete = (idx) => {
    let copy = [...complete];
    copy[idx].fin = !copy[idx].fin;
    setComplete(copy);
  };

  return (
    <div className="App">
      <MainHeader userData={userData} />
      <ContainerWrapper>
        <Container>
          <ContentTitle />
          <MissionBox onComplete={onComplete} />
          <MissionCompleted complete={complete} />
        </Container>
      </ContainerWrapper>
    </div>
  );
}

const ContainerWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 26rem;
  // height: 900px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 50rem) {
    & {
      width: 700px;
      height: 900px;
      padding: 20px;
    }
  }
`;
