import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Router, Routes, Route, useNavigate } from "react-router-dom";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { FaHome, FaFlag, FaBell, FaHeartbeat } from "react-icons/fa";
import { TbMessages } from "react-icons/tb";
import { AiFillSetting } from "react-icons/ai";
import { IoWatch, IoScaleSharp, IoWater } from "react-icons/io5";
import { BiWalk } from "react-icons/bi";
import { CgPill } from "react-icons/cg";
import { ImSpoonKnife } from "react-icons/im";
import { GiWaterDrop } from "react-icons/gi";
import Mission from "./Mission";
import Board from "./Board";
import Setting from "./Setting";

export default function Main() {
  const txt = ["홈", "미션", "게시판", "설정"];
  const [color, setColor] = useState("#bdbdbd");
  const userData = useSelector(({ user }) => user);

  let navigate = useNavigate();

  //? Modal창 클릭 시 transition 추가.....ㅠㅠ
  // 클래스 탈부착,,,,?

  const [complete, setComplete] = useState([
    { id: 1, fin: false },
    { id: 2, fin: false },
    { id: 3, fin: false },
    { id: 4, fin: false },
  ]);

  const [show, setShow] = useState(false);

  const onChangeColor = () => {
    color === "#bdbdbd" ? setColor("#58c78f") : setColor("#bdbdbd");
  };

  const onComplete = (idx) => {
    let copy = [...complete];
    copy[idx].fin = !copy[idx].fin;
    setComplete(copy);
  };

  const onModal = () => {
    setShow(!show);
  };

  return (
    <div className="App">
      {show && <Back> </Back>}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Upper>
                <Navbar>
                  <NavbarWrapper>
                    <span style={{ fontWeight: "bold", fontSize: "20px" }}>
                      👋 {userData.name}님
                    </span>
                    <span style={{ fontSize: "20px" }}>
                      🏃 모두가 건강해지는 그 날까지
                    </span>
                    <FaBell
                      className="bell"
                      color={color}
                      onClick={onChangeColor}
                    />
                  </NavbarWrapper>
                </Navbar>
              </Upper>

              <ContainerWrapper>
                <Container>
                  {/* Container__상단 1 */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "spaceBetween",
                    }}
                  >
                    <div
                      style={{
                        marginRight: "auto",
                        fontSize: "20px",
                        fontWeight: "bold",
                        padding: "30px 80px 20px 40px ",
                      }}
                    >
                      💌 오늘의 미션입니다
                    </div>
                    <IoWatch
                      style={{
                        width: "50px",
                        height: "50px",
                        margin: "auto",
                      }}
                    />
                    <div
                      style={{
                        display: "flex",
                        padding: "10px",
                        alignItems: "center",
                      }}
                    >
                      <div
                        style={{
                          borderRight: "3px solid #ccc",
                          padding: "0 10px",
                        }}
                      >
                        <div style={{ fontSize: "23px", fontWeight: "bold" }}>
                          활동
                        </div>
                        <div style={{ fontSize: "18px" }}>0분</div>
                      </div>
                      <div
                        style={{
                          borderRight: "2px solid #ccc",
                          padding: "0 10px",
                        }}
                      >
                        <div style={{ fontSize: "23px", fontWeight: "bold" }}>
                          걸음수
                        </div>
                        <div style={{ fontSize: "18px", color: "blue" }}>0</div>
                      </div>
                      <div
                        style={{
                          borderLeft: "1px solid #ccc",
                          padding: "0 10px",
                        }}
                      >
                        <div style={{ fontSize: "23px", fontWeight: "bold" }}>
                          목표
                        </div>
                        <div style={{ fontSize: "18px" }}>5000보</div>
                      </div>
                    </div>
                  </div>
                  {/* Container__상단 2 */}
                  <BoxWrapper>
                    <Box bg="salmon" style={{ padding: "30px 50px" }}>
                      <BiWalk className="boxIcon" />
                      <div>30분 이상 걷기</div>
                      <Btn
                        onClick={() => {
                          onComplete(0);
                        }}
                      >
                        완료
                      </Btn>
                    </Box>
                    <Box bg="#f2af50" style={{ padding: "30px 50px" }}>
                      <ImSpoonKnife
                        size="55"
                        style={{ color: "white", marginTop: "10px" }}
                      />
                      <div>
                        세끼 <br />
                        식사하기
                      </div>
                      <Btn
                        onClick={() => {
                          onComplete(1);
                        }}
                      >
                        완료
                      </Btn>
                    </Box>
                    <Box bg="#87cc5c">
                      <IoWater className="boxIcon" />
                      <div>물 마시기</div>
                      <Btn
                        onClick={() => {
                          onComplete(2);
                        }}
                      >
                        완료
                      </Btn>
                      {/* <div style={{ fontSize: "15px", padding: "10px" }}>
                        자세히
                      </div> */}
                    </Box>
                    <Box bg="#5ccca5">
                      <CgPill className="boxIcon" />
                      <div>약 복용하기</div>
                      <Btn
                        onClick={() => {
                          onComplete(3);
                        }}
                      >
                        완료
                      </Btn>
                    </Box>
                  </BoxWrapper>
                  <Completed>
                    <div>미션 수행 현황</div>
                  </Completed>
                  <CompletedBoxWrapper>
                    {complete[0].fin ? (
                      <CompletedBox
                        style={{ backgroundColor: "salmon" }}
                      ></CompletedBox>
                    ) : (
                      <CompletedBox></CompletedBox>
                    )}
                    {complete[1].fin ? (
                      <CompletedBox
                        style={{ backgroundColor: "#f2af50" }}
                      ></CompletedBox>
                    ) : (
                      <CompletedBox></CompletedBox>
                    )}
                    {complete[2].fin ? (
                      <CompletedBox
                        style={{ backgroundColor: " #87cc5c" }}
                      ></CompletedBox>
                    ) : (
                      <CompletedBox></CompletedBox>
                    )}
                    {complete[3].fin ? (
                      <CompletedBox
                        style={{ backgroundColor: "#5ccca5" }}
                      ></CompletedBox>
                    ) : (
                      <CompletedBox></CompletedBox>
                    )}
                  </CompletedBoxWrapper>
                </Container>
              </ContainerWrapper>
            </>
          }
        />
        <Route path="/Mission" element={<Mission />} />
        <Route path="/Board/*" element={<Board />} />
        <Route path="/Setting/*" element={<Setting user={userData} />} />
      </Routes>
      <Footer style={{ display: "flex", justifyContent: "center" }}>
        {show ? (
          <Show>
            <Modal className="start">
              <MeasureTitle>측정하기</MeasureTitle>
              <MeasureWrapper>
                <MeasureBox>
                  <FaHeartbeat size="50" className="measureIcon" />
                  <Measure>혈압</Measure>
                </MeasureBox>
                <MeasureBox>
                  <GiWaterDrop size="50" className="measureIcon" />
                  <Measure>혈당</Measure>
                </MeasureBox>
                <MeasureBox>
                  <IoScaleSharp size="50" className="measureIcon" />
                  <Measure>체중</Measure>
                </MeasureBox>
                <MeasureBox>
                  <ImSpoonKnife size="50" className="measureIcon" />
                  <Measure>식사</Measure>
                </MeasureBox>
              </MeasureWrapper>
            </Modal>
          </Show>
        ) : (
          <ModalClose className="end"></ModalClose>
        )}
        <FooterWrapper>
          <div>
            <FaHome
              className="icon"
              onClick={() => {
                navigate("/");
              }}
            />
            <Menu className="menu">{txt[0]}</Menu>
          </div>
          <div>
            <FaFlag
              onClick={() => {
                navigate("/mission");
              }}
              className="icon"
            />
            <Menu
              className="menu"
              onClick={() => {
                navigate("/Mission");
              }}
            >
              {txt[1]}
            </Menu>
          </div>
          <div>
            <BsFillPlusCircleFill
              style={{
                color: "#58c78f",
                width: "80px",
                height: "80px",
                cursor: "pointer",
              }}
              onClick={onModal}
            />
          </div>
          <div>
            <TbMessages
              className="icon"
              onClick={() => {
                navigate("/Board");
              }}
            />
            <Menu
              className="menu"
              onClick={() => {
                navigate("/Board");
              }}
            >
              {txt[2]}
            </Menu>
          </div>
          <div>
            <AiFillSetting
              className="icon"
              onClick={() => {
                navigate("/Setting");
              }}
            />
            <Menu
              txt={"설정"}
              className="menu"
              onClick={() => {
                navigate("/Setting");
              }}
            >
              {txt[3]}
            </Menu>
          </div>
        </FooterWrapper>
      </Footer>
    </div>
  );
}

const Upper = styled.div`
  width: 100%;
  border-bottom: 1px solid #e8e8e8;
`;

const Navbar = styled.div`
  display: flex;
  margin: 0 auto;
  width: 100%
  align-items: center;
  justify-content: center;
`;

const NavbarWrapper = styled.div`
  max-width: 700px;
  width: 700px;
  display: flex;
  justify-content: space-between;
  padding: 20px;

  .bell {
    color: ${(props) => props.color};
      width: 30px;
      height: 30px;
      cursor: pointer;
    }
  }
`;

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
`;

const BoxWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 950px;
  padding: 20px 0;
  justify-content: center;
`;

const Box = styled.div`
  background-color: ${(props) => props.bg};
  border-radius: 10px;
  width: 270px;
  height: 270px;
  padding: 50px;
  justify-content: center;
  align-items: center;
  margin: 20px;

  .boxIcon {
    color: white;
    width: 70px;
    height: 70px;
  }

  & > div {
    color: white;
    font-size: 24px;
    padding: 20px;
  }
`;

const Btn = styled.button`
  width: 60px;
  height: 30px;
  border: none;
  outline: none;
  border-radius: 3px;
  font-size: 16px;
`;

const Completed = styled.div`
  margin-right: auto;
  font-size: 25px;
  font-weight: bold;
`;

const CompletedBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #eee;
  width: 150px;
  height: 50px;
  border-radius: 10px;
  margin: 20px 0;
`;

const CompletedBoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const Footer = styled.div`
  display: flex;
  justify-content: center;
  border-top: 1px solid #e8e8e8;
  position: relative;
`;

const FooterWrapper = styled.div`
  margin: 30px;
  width: 700px;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .icon {
    width: 50px;
    height: 50px;
    color: #ccc;
    cursor: pointer;
  }
`;

const Menu = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: gray;
  cursor: pointer;
  padding: 10px;
`;

const Modal = styled.div`
  width: 600px;
  height: 420px;
  bottom: 160px;
  left: 80px;
  border-radius: 10px 10px 0 0;
  background-color: white;
  z-index: 2;
  position: absolute;
  transition: all 1s;
`;

const ModalClose = styled.div`
  width: 600px;
  height: 10px;
  position: absolute;
  background-color: blue;
`;

const MeasureTitle = styled.div`
  font-size: 30px;
  margin: 30px 0 30px 0;
  font-weight: bold;
`;

const MeasureWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 40px;
  gap: 30px;
  height: 300px;
  flex-wrap: wrap;
`;

const MeasureBox = styled.div`
  width: 245px;
  height: 120px;
  background-color: #58c78f;
  padding-top: 10px;
  border-radius: 5px;

  .measureIcon {
    color: white;
    margin-top: 8px;
  }
`;

const Measure = styled.div`
  font-size: 20px;
  color: white;
  padding: 10px;
`;

const Back = styled.div`
  width: 100%;
  height: 973px;
  z-index: 1;
  opacity: 0.5;
  position: absolute;
  background-color: gray;
`;

const Show = styled.div`
  //   .start {
  //   }

  //   .end {
  //   }
`;
