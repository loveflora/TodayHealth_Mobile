import "./App.css";

import { Router, Routes, Route, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { FaHome, FaFlag, FaBell, FaLeaf } from "react-icons/fa";
import { TbMessages } from "react-icons/tb";
import { AiFillSetting } from "react-icons/ai";
import { IoWatch, IoScaleSharp, IoWater } from "react-icons/io5";
import { BiWalk } from "react-icons/bi";
import { CgPill } from "react-icons/cg";
import Mission from "./Router/Mission";
import Board from "./Router/Board";
import Setting from "./Router/Setting";

function App() {
  const txt = ["홈", "미션", "게시판", "설정"];
  const user = { name: "flora", gender: "female", age: 26 };

  let navigate = useNavigate();

  //* ------------------
  //* State
  //* ------------------

  //* ------------------
  //* Handlers
  //* ------------------

  //* ------------------
  //* Render
  //* ------------------

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar>
                <NavbarWrapper>
                  <span style={{ fontWeight: "bold", fontSize: "20px" }}>
                    {user.name}님 👋
                  </span>
                  <span style={{ fontSize: "20px" }}>
                    모두가 건강해지는 그 날까지 🏃{" "}
                  </span>
                  <FaBell
                    style={{
                      color: "#58c78f",
                      width: "30px",
                      height: "30px",
                      cursor: "pointer",
                    }}
                  />
                </NavbarWrapper>
              </Navbar>

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
                      // 중앙정렬
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
                  <Box bg="salmon">
                    <BiWalk className="boxIcon" />
                    <div>30분 이상 걷기</div>
                  </Box>
                  <Box bg="#f2af50">
                    <IoScaleSharp className="boxIcon" />
                    <div>
                      체중 <br />
                      측정하기
                    </div>
                  </Box>
                  <Box bg="#87cc5c">
                    <IoWater className="boxIcon" />
                    <div>물 마시기</div>
                  </Box>
                  <Box bg="#5ccca5">
                    <CgPill className="boxIcon" />
                    <div>약 복용하기</div>
                  </Box>
                </BoxWrapper>
                <Completed>
                  <div>미션 수행 현황</div>
                </Completed>
                <CompletedBoxWrapper>
                  <CompletedBox></CompletedBox>
                  <CompletedBox></CompletedBox>
                  <CompletedBox></CompletedBox>
                  <CompletedBox></CompletedBox>
                </CompletedBoxWrapper>
              </Container>
            </>
          }
        />
        <Route path="/Mission" element={<Mission />} />
        <Route path="/Board" element={<Board />} />
        <Route path="/Setting" element={<Setting />} />
      </Routes>
      <Footer style={{ display: "flex", justifyContent: "center" }}>
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
            {/* props 전달방법 ? */}
            <BsFillPlusCircleFill
              style={{
                color: "#58c78f",
                width: "80px",
                height: "80px",
                cursor: "pointer",
              }}
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

export default App;

//* ------------------
//* STYLE
//* ------------------

const Navbar = styled.div`
  width: 700px;
  border-bottom: 1px solid #e8e8e8;
  display: flex;
  flex-direction: column;
`;

const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

const Container = styled.div`
  width: 670px;
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

  // & > div > .menu {
  //   font-size: 20px;
  //   font-weight: bold;
  //   color: gray;
  //   cursor: pointer;
  //   padding: 5px;
  // }
`;

const Menu = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: gray;
  cursor: pointer;
  padding: 10px;
`;
