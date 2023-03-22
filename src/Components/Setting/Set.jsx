import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Form from "react-bootstrap/Form";

export default function Set() {
  const navigate = useNavigate();

  // ? 설정 값 유지 : local storage 사용

  const [switchList, setSwitchList] = useState([
    { id: 1, switch: false },
    { id: 2, switch: false },
    { id: 3, switch: false },
  ]);

  let [cnt, setCnt] = useState(0);
  let [watch, setWatch] = useState([
    // { id: 1, switch: false },
    // { id: 2, switch: false },
    // { id: 3, switch: false },
  ]);

  // const [click, setClick] = useState(false);

  console.log(switchList);

  // useEffect(() => {
  //   let watched = JSON.parse(localStorage.getItem("setting"));
  //   console.log(watched == switchList);
  //   // 왜 다르지.....???
  //   console.log(watched);
  //   if (watched === null) {
  //     localStorage.setItem("setting", JSON.stringify([]));
  //     let nullArr = JSON.parse(localStorage.getItem("settting"));
  //     nullArr = [
  //       { id: 1, switch: false },
  //       { id: 2, switch: false },
  //       { id: 3, switch: false },
  //     ];
  //     localStorage.setItem("setting", JSON.stringify(nullArr));
  //     // console.log(JSON.stringify(switchList));
  //     console.log("없음");
  //   } else if (watched !== switchList) {
  //     let initArr = JSON.parse(localStorage.getItem("setting"));
  //     setSwitchList(initArr);
  //     // localStorage.setItem("setting", JSON.stringify(initArr));
  //     setWatch(switchList);
  //     console.log("초기");
  //   }

  //   let editArr = JSON.parse(localStorage.getItem("setting"));
  //   editArr = watch;
  //   localStorage.setItem("setting", JSON.stringify(watch));
  //   // setWatch(editArr);
  //   // console.log("수정");
  //   // console.log(editArr);
  // }, [cnt]);

  console.log(watch);

  // console.log(watch);

  //   let watched = localStorage.getItem("setting");
  //   // const watched = JSON.parse(localStorage.getItem())
  //   // let watched = JSON.parse(localStorage.setItem("setting", switchList));

  //   if (watched === switchList) {
  //     localStorage.setItem(
  //       "setting",
  //       JSON.stringify([
  //         // { id: 1, click: false },
  //         // { id: 2, click: false },
  //         // { id: 3, click: false },
  //       ])
  //     );
  //   } else setWatch(watched);

  // console.log(watch);
  // console.log(switchList);
  // if (watched === null) {
  //   localStorage.setItem("setting", JSON.stringify([]));
  //   // } else setWatch(watched);

  //   let 꺼낸거 = localStorage.getItem("setting");
  //   꺼낸거 = JSON.parse(꺼낸거);
  //   let 데이터 = switchList;
  //   꺼낸거.push(...데이터);

  //   localStorage.setItem("setting", JSON.stringify(꺼낸거));
  //   setSwitchList(꺼낸거);
  // }, [cnt]);

  const onSwitch = (idx) => {
    let copy = [...switchList];
    copy[idx].switch = !copy[idx].switch;
    setSwitchList(copy);
    setWatch(switchList);
    // setCnt((cnt += 1));
  };

  return (
    <Container>
      <Content>
        <Ul>
          <Li>
            수기입력 허용
            <Div>
              {/* <Form.Check
                type="switch"
                onClick={() => {
                  onSwitch(0);
                }}
              /> */}
              {switchList[0].switch ? (
                <ToggleBtn
                  onClick={() => {
                    onSwitch(0);
                  }}
                  style={{ backgroundColor: "blue" }}
                ></ToggleBtn>
              ) : (
                <ToggleBtn
                  onClick={() => {
                    onSwitch(0);
                  }}
                ></ToggleBtn>
              )}
            </Div>
          </Li>
          <Li>
            푸시알림 허용
            <Div>
              {switchList[1].switch ? (
                <ToggleBtn
                  onClick={() => {
                    onSwitch(1);
                  }}
                  style={{ backgroundColor: "blue" }}
                ></ToggleBtn>
              ) : (
                <ToggleBtn
                  onClick={() => {
                    onSwitch(1);
                  }}
                ></ToggleBtn>
              )}
            </Div>
          </Li>
          <Li>
            앱 정보
            <Div>
              {switchList[2].switch ? (
                <ToggleBtn
                  onClick={() => {
                    onSwitch(2);
                  }}
                  style={{ backgroundColor: "blue" }}
                ></ToggleBtn>
              ) : (
                <ToggleBtn
                  onClick={() => {
                    onSwitch(2);
                  }}
                ></ToggleBtn>
              )}
              {/* <Form.Check
                type="switch"
                onClick={() => {
                  onSwitch(2);
                }}
              /> */}
            </Div>
          </Li>
        </Ul>
      </Content>

      <Btn
        onClick={() => {
          navigate(`/Setting`);
        }}
      >
        뒤로 가기
      </Btn>
    </Container>
  );
}

const Container = styled.div`
  width: 700px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 700px;
  margin-top: 40px;
`;

const Ul = styled.ul``;

const Li = styled.li`
  list-style-type: none;
  border-bottom: 1px solid #e8e8e8;
  padding: 20px;
  text-align: left;
  font-size: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
`;

const Div = styled.div`
  .form-check-input {
    cursor: pointer;
  }
`;

const ToggleBtn = styled.button`
  width: 50px;
  height: 30px;
  border-radius: 40px;
  border: 1px solid gray;
`;

const Btn = styled.button`
  width: 200px;
  height: 50px;
  background-color: #58c78f;
  color: white;
  border: none;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px auto;
  font-size: 20px;
`;
