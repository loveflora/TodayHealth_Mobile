import React from "react";
import styled from "styled-components";
import Header from "../Components/Header";
import Profile from "../Components/Setting/Profile";
import Goals from "../Components/Setting/Goals";
import Pills from "../Components/Setting/Pills";
import Set from "../Components/Setting/Set";

import { CgProfile } from "react-icons/cg";
import { GiStairsGoal } from "react-icons/gi";
import { CgPill } from "react-icons/cg";
import { AiFillSetting } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";

import { Router, Routes, Route, useNavigate } from "react-router-dom";

export default function Setting({ user }) {
  let navigate = useNavigate();

  return (
    <div>
      <Header text={"설정"} />
      <ContainerWrapper>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Container>
                  <CgProfile
                    size="100"
                    style={{ color: "#58c78f", cursor: "pointer" }}
                  />
                  <div
                    style={{
                      display: "flex",
                    }}
                  >
                    <Info>
                      <div
                        style={{
                          fontSize: "30px",
                          display: "flex",
                          marginRight: "auto",
                        }}
                        onClick={() => navigate("profile")}
                      >
                        {user.name}
                      </div>
                      <div style={{ fontSize: "20px" }}>
                        {user.gender} | {user.age}세
                      </div>
                    </Info>
                  </div>
                </Container>
                <Ul>
                  <Li>
                    <GiStairsGoal
                      size="50"
                      style={{ margin: "10px", cursor: "pointer" }}
                      color="gray"
                      onClick={() => navigate("goals")}
                    />
                    <Txt onClick={() => navigate("goals")}>목표 설정</Txt>
                    <IoIosArrowForward
                      style={{
                        display: "flex",
                        margin: "auto 0px auto auto",
                        color: "gray",
                        cursor: "pointer",
                      }}
                    />
                  </Li>
                  <Li>
                    <CgPill
                      size="50"
                      style={{ margin: "10px", cursor: "pointer" }}
                      color="gray"
                      onClick={() => navigate("pills")}
                    />
                    <Txt
                      onClick={() => {
                        navigate("pills");
                      }}
                    >
                      복약 정보
                    </Txt>
                    <IoIosArrowForward
                      style={{
                        display: "flex",
                        margin: "auto 0px auto auto",
                        color: "gray",
                        cursor: "pointer",
                      }}
                      onClick={() => navigate("set")}
                    />
                  </Li>
                  <Li>
                    <AiFillSetting
                      size="50"
                      style={{ margin: "10px", cursor: "pointer" }}
                      color="gray"
                      onClick={() => navigate("set")}
                    />
                    <Txt onClick={() => navigate("set")}>기기 설정</Txt>
                    <IoIosArrowForward
                      style={{
                        display: "flex",
                        margin: "auto 0px auto auto",
                        color: "gray",
                        cursor: "pointer",
                      }}
                    />
                  </Li>
                </Ul>
              </div>
            }
          />

          <Route
            path="/profile"
            element={
              <>
                <Profile />
              </>
            }
          />
          <Route
            path="/goals"
            element={
              <>
                <Goals />
              </>
            }
          />
          <Route
            path="/pills"
            element={
              <>
                <Pills />
              </>
            }
          />
          <Route
            path="/set"
            element={
              <>
                <Set />
              </>
            }
          />
        </Routes>
      </ContainerWrapper>
    </div>
  );
}

const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 900px;
`;

const Container = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 40px;
  width: 700px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  cursor: pointer;
`;

const Ul = styled.ul`
  width: 700px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const Li = styled.li`
  border-bottom: 1px solid #e8e8e8;
  list-style-type: none;
  padding: 20px 30px;
  text-align: left;
  font-size: 30px;
  display: flex;
`;

const Txt = styled.p`
  display: flex;
  align-items: center;
  margin: auto 0;
  padding: 0 10px;
  cursor: pointer;
`;
