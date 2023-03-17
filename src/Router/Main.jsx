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

  //? ---- 구현하고 싶은 기능 ------
  //? Modal창 클릭 시 transition 추가.....ㅠㅠ
  // 클래스 탈부착,,,,?

  const [complete, setComplete] = useState([
    { id: 1, fin: false },
    { id: 2, fin: false },
    { id: 3, fin: false },
    { id: 4, fin: false },
  ]);

  const [show, setShow] = useState(false);

  const [measure, setMeasure] = useState([
    { id: 1, put: false },
    { id: 2, put: false },
    { id: 3, put: false },
    { id: 4, put: false },
  ]);

  const onChangeColor = () => {
    color === "#bdbdbd" ? setColor("#58c78f") : setColor("#bdbdbd");
  };

  const onComplete = (idx) => {
    let copy = [...complete];
    copy[idx].fin = !copy[idx].fin;
    setComplete(copy);
  };

  console.log(complete);

  const onModal = () => {
    setShow(!show);

    // 입력창도 같이 닫히게 초기화 !
    setMeasure([
      { id: 1, put: false },
      { id: 2, put: false },
      { id: 3, put: false },
      { id: 4, put: false },
    ]);
  };

  //? 입력하기 모달 로직 구현 (무엇을 눌러도 true 값 하나만 나오게)
  // [f, f, f, f] 배열 정의하기
  let item = [];
  for (let i = 0; i < measure.length; i++) {
    item.push(measure[i].put);
  }

  // cnt : true 갯수
  let cnt = 0;
  // 배열 내 true 개수 세기
  for (let i = 0; i < item.length; i++) {
    if (item[i]) {
      cnt += 1;
    }
  }

  const onMeasure = (idx) => {
    if (cnt === 1) {
      // (1) id가 idx + 1 이 true인 경우 (같은거 눌렀을 경우)
      if (measure[idx].put) {
        let copy = [...measure];
        copy[idx].put = !copy[idx].put;
        setMeasure(copy);
      } else {
        // (2) 다른거 눌렀을 경우
        let copy = [...measure];
        // 초기화 후
        copy = [
          { id: 1, put: false },
          { id: 2, put: false },
          { id: 3, put: false },
          { id: 4, put: false },
        ];
        // 해당 idx 토글 변경
        // let copy = [...measure];
        copy[idx].put = !copy[idx].put;
        setMeasure(copy);
      }
    } else {
      let copy = [...measure];
      copy[idx].put = !copy[idx].put;
      setMeasure(copy);
    }
  };

  const onAlert = () => {
    alert("작성 완료되었습니다.");
    setShow(!show);

    // 입력창도 같이 닫히게 초기화 !
    setMeasure([
      { id: 1, put: false },
      { id: 2, put: false },
      { id: 3, put: false },
      { id: 4, put: false },
    ]);
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
                <MeasureBox
                  onClick={() => {
                    onMeasure(0);
                  }}
                >
                  <FaHeartbeat size="50" className="measureIcon" />
                  <Measure>혈압</Measure>
                </MeasureBox>
                <MeasureBox
                  onClick={() => {
                    onMeasure(1);
                  }}
                >
                  <GiWaterDrop size="50" className="measureIcon" />
                  <Measure>혈당</Measure>
                </MeasureBox>
                <MeasureBox
                  onClick={() => {
                    onMeasure(2);
                  }}
                >
                  <IoScaleSharp size="50" className="measureIcon" />
                  <Measure>체중</Measure>
                </MeasureBox>
                <MeasureBox
                  onClick={() => {
                    onMeasure(3);
                  }}
                >
                  <ImSpoonKnife size="50" className="measureIcon" />
                  <Measure>식사</Measure>
                </MeasureBox>
              </MeasureWrapper>
            </Modal>
          </Show>
        ) : (
          <ModalClose className="end"></ModalClose>
        )}
        <div>
          {measure[0].put && (
            <MeasureModal>
              <MeasureTitle>오늘 나의 혈압은 ?</MeasureTitle>
              <div style={{ padding: "20px" }}>
                <InputWrapper style={{ width: "530px", paddingBottom: "20px" }}>
                  <MealTitle>수축기</MealTitle>
                  <Input style={{ width: "150px" }}></Input>
                  <div style={{ padding: "10px 20px", fontSize: "24px" }}>
                    mmHg
                  </div>
                </InputWrapper>
                <InputWrapper style={{ width: "530px" }}>
                  <MealTitle>이완기</MealTitle>
                  <Input style={{ width: "150px" }}></Input>
                  <div style={{ padding: "10px 20px", fontSize: "24px" }}>
                    mmHg
                  </div>
                </InputWrapper>
              </div>
              <MeasureBtn
                onClick={() => {
                  onAlert();
                }}
              >
                작성 완료
              </MeasureBtn>
            </MeasureModal>
          )}
          {measure[1].put && (
            <MeasureModal>
              <MeasureTitle>오늘 나의 혈당은 ?</MeasureTitle>
              <div
                style={{
                  padding: "0 20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "15px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    fontSize: "20px",
                  }}
                >
                  <div
                    style={{
                      padding: "10px",
                      flexDirection: "row",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <input
                      type="radio"
                      name="bst"
                      value="식전"
                      style={{
                        margin: "10px",
                        width: "24px",
                        height: "24px",
                      }}
                    />
                    <div style={{ color: "white", fontSize: "22px" }}>식전</div>
                  </div>
                  <div
                    style={{
                      padding: "10px",
                      flexDirection: "row",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <input
                      type="radio"
                      name="bst"
                      value="식후"
                      style={{
                        margin: "10px",
                        width: "24px",
                        height: "24px",
                      }}
                    />
                    <div style={{ color: "white", fontSize: "22px" }}>식후</div>
                  </div>
                </div>
                <InputWrapper>
                  <MealTitle
                    style={{ padding: "10px 20px", fontSize: "24px" }}
                  ></MealTitle>
                  <Input style={{ width: "150px" }}></Input>
                  <div style={{ padding: "10px 20px", fontSize: "24px" }}>
                    mg/dl
                  </div>
                </InputWrapper>
              </div>
              <MeasureBtn
                onClick={() => {
                  onAlert();
                }}
              >
                작성 완료
              </MeasureBtn>
            </MeasureModal>
          )}
          {measure[2].put && (
            <MeasureModal>
              <MeasureTitle>오늘 나의 체중은 ?</MeasureTitle>
              <InputWrapper style={{ padding: "60px 0" }}>
                <Input style={{ width: "150px" }}></Input>
                <div style={{ padding: "10px 20px", fontSize: "24px" }}>kg</div>
              </InputWrapper>
              <MeasureBtn
                onClick={() => {
                  onAlert();
                }}
              >
                작성 완료
              </MeasureBtn>
            </MeasureModal>
          )}
          {measure[3].put && (
            <MeasureModal>
              <MeasureTitle style={{ margin: "20px 0" }}>
                식사일지 📝
              </MeasureTitle>
              <MeasureContent>
                <InputWrapper>
                  <MealTitle>🍎 아침</MealTitle>
                  <Input></Input>
                </InputWrapper>
                <InputWrapper>
                  <MealTitle>🥗 점심</MealTitle>
                  <Input></Input>
                </InputWrapper>
                <InputWrapper>
                  <MealTitle>🍛 저녁</MealTitle>
                  <Input></Input>
                </InputWrapper>
                <MeasureBtn
                  onClick={() => {
                    onAlert();
                  }}
                >
                  작성 완료
                </MeasureBtn>
              </MeasureContent>
            </MeasureModal>
          )}
        </div>
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
  max-width: 600px;
  width: 600px;
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
  width: 600px;
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
  margin: 0 18px;
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
  margin: 30px 0 20px 0;
  font-weight: bold;
  color: white;
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
  cursor: pointer;

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

const MeasureModal = styled.div`
  width: 600px;
  height: 400px;
  bottom: 630px;
  border-radius: 10px 10px 0 0;
  background-color: salmon;
  opacity: 0.92;
  z-index: 10;
  position: absolute;
  transition: all 1s;
  border-radius: 10px;
  margin: 0 20px;
  padding: 20px 0;
`;

const Input = styled.input`
  border-radius: 5px;
  border: none;
  padding: 8px;
`;

const InputWrapper = styled.div`
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 10px;
  font-size: 20px;
`;

const MeasureContent = styled.div`
  width: 500px;
  height: 300px;
  margin: 0 40px;
`;

const MealTitle = styled.div`
  padding: 10px 38px;
  font-size: 20px;
`;

const MeasureBtn = styled.button`
  width: 120px;
  border: none;
  padding: 10px;
  border-radius: 5px;
  font-size: 20px;
  background-color: #972020;
  color: white;
  bottom: 20px;
  left: 240px;
  position: absolute;
`;
