import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Router, Routes, Route, useNavigate } from "react-router-dom";

import Mission from "./Mission";
import Board from "./Board";
import Setting from "./Setting";
import MainHeader from "../Components/main/MainHeader";
import ContentTitle from "../Components/main/ContentTitle";
import MissionBox from "../Components/main/MissionBox";
import MissionCompleted from "../Components/main/MissionCompleted";
import Footer from "../Components/Footer";

export default function Main() {
  const userData = useSelector(({ user }) => user);

  //? ---- 구현하고 싶은 기능 ------
  // [완료 23.03.22] Modal창 클릭 시 스르륵 올라옴
  // ----> animation: slide 1s ease-in-out
  //       @keyframes slide {from to 사용}

  const [show, setShow] = useState(false);

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
      {show && <Back></Back>}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <MainHeader userData={userData} />
              <ContainerWrapper>
                <Container>
                  <ContentTitle />
                  <MissionBox onComplete={onComplete} />
                  <MissionCompleted complete={complete} />
                </Container>
              </ContainerWrapper>
            </>
          }
        />
        <Route path="/Mission" element={<Mission />} />
        <Route path="/Board/*" element={<Board />} />
        <Route path="/Setting/*" element={<Setting user={userData} />} />
      </Routes>
      <FooterWrapper>
        <Footer show={show} setShow={setShow} />
      </FooterWrapper>
    </div>
  );
}

const ContainerWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 700px;
  height: 900px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    & {
      background-color: lightgreen;
      text-align: center;
      margin: 0;
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      // width: 400px;
      // height: 650px;
      padding: 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      overflow: auto;
    }
  }
`;

const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  border-top: 1px solid #e8e8e8;
  position: relative;
`;

const Back = styled.div`
  width: 100%;
  height: 750px;
  z-index: 1;
  opacity: 0.5;
  position: absolute;
  background-color: gray;

  @media screen and (max-width: 768px) {
      & {
        visibility: hidden;
        // width: 100%;
        // height: 750px;
        // // height: 100%;
        // height: 800px;
        // z-index: 1;
        // opacity: 0.5;
        // position: fixed;
        // background-color: gray;
        // bottom: 200px;
    }
`;
