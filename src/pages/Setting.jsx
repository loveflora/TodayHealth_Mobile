import React from "react";
import styled from "styled-components";

import { CgProfile } from "react-icons/cg";
import { GiStairsGoal } from "react-icons/gi";
import { CgPill } from "react-icons/cg";
import { AiFillSetting } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";

import { Routes, Route, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Header from "../components/common/Header";
import Profile from "../components/setting/Profile";
import Goals from "../components/setting/Goals";
import Pills from "../components/setting/Pills";
import Set from "../components/setting/Set";

export default function Setting() {
  const userData = useSelector(({ user }) => user);
  let navigate = useNavigate();

  console.log(userData);

  return (
    <div>
      <div>
        <Header text={"설정"} />
        <Routes>
          <Route
            path="/*"
            element={
              <ContainerWrapper>
                <Container>
                  {userData.img ? (
                    <ProfileImg src={userData.img} />
                  ) : (
                    <CgProfile
                      size="100"
                      style={{ color: "#58c78f", cursor: "pointer" }}
                      onClick={() => navigate("profile")}
                    />
                  )}
                  <div
                    style={{
                      display: "flex",
                    }}
                  >
                    <Info onClick={() => navigate("profile")}>
                      <div
                        style={{
                          fontSize: "30px",
                          display: "flex",
                          marginRight: "auto",
                        }}
                      >
                        {userData.name}
                      </div>
                      <div style={{ fontSize: "20px" }}>
                        {userData.gender} | {userData.age}세
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
                  <Li onClick={() => navigate("set")}>
                    <AiFillSetting
                      size="50"
                      style={{ margin: "10px", cursor: "pointer" }}
                      color="gray"
                    />
                    <Txt>기기 설정</Txt>
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
              </ContainerWrapper>
            }
          />

          <Route path="profile" element={<Profile />} />
          <Route path="goals" element={<Goals />} />
          <Route path="pills" element={<Pills />} />
          <Route path="set" element={<Set />} />
        </Routes>
      </div>
    </div>
  );
}

const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 722px;
  margin: 0 auto;

  @media (min-width: 50rem) {
    & {
      width: 720px;
      height: 900px;
    }
  }
`;

const Container = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 40px;

  @media (min-width: 50rem) {
    & {
      width: 700px;
      padding: 40px 60px;
    }
  }
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
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 400px;

  @media (min-width: 50rem) {
    & {
      width: 700px;
    }
  }
`;

const Li = styled.li`
  border-bottom: 1px solid #e8e8e8;
  list-style-type: none;
  padding: 20px 30px;
  text-align: left;
  font-size: 22px;
  display: flex;
  cursor: pointer;

  @media (min-width: 50rem) {
    & {
      font-size: 30px;
    }
  }
`;

const Txt = styled.p`
  display: flex;
  align-items: center;
  margin: auto 0;
  padding: 0 10px;
  cursor: pointer;
`;

const ProfileImg = styled.img`
  margin: 30px;
  border-radius: 100px;
  width: 120px;
  @media (min-width: 50rem) {
    width: 30%;
  }
`;
