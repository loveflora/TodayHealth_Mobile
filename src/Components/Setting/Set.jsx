import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Form from "react-bootstrap/Form";

export default function Set() {
  const navigate = useNavigate();

  //? 설정 값 유지 : local storage 사용

  const [switchList, setSwitchList] = useState([
    { id: 1, click: false },
    { id: 2, click: false },
    { id: 3, click: false },
  ]);

  let [cnt, setCnt] = useState(0);
  let [watch, setWatch] = useState([]);

  // const [click, setClick] = useState(false);

  const onSwitch = (idx) => {
    setCnt((cnt += 1));
    let copy = [...switchList];
    copy[idx].click = !copy[idx].click;
    setSwitchList(copy);
  };

  useEffect(() => {
    let watched = localStorage.getItem("setting");
    // const watched = JSON.parse(localStorage.getItem())
    // let watched = JSON.parse(localStorage.setItem("setting", switchList));

    if (watched === switchList) {
      localStorage.setItem(
        "setting",
        JSON.stringify([
          // { id: 1, click: false },
          // { id: 2, click: false },
          // { id: 3, click: false },
        ])
      );
    } else setWatch(watched);
    //   // localStorage.setItem(
    //   //   "setting",
    //   //   JSON.stringify([
    //   //     { id: 1, click: false },
    //   //     { id: 2, click: false },
    //   //     { id: 3, click: false },
    //   //   ])
    //   // );
    //   console.log("맞아");
    // }
    let copy = [...switchList, { why: "?" }];

    let 꺼낸거 = JSON.parse(localStorage.getItem("setting"));
    꺼낸거 = copy;

    localStorage.setItem("setting", JSON.stringify(꺼낸거));
    setWatch(꺼낸거);
    console.log(watched);
  }, [cnt]);

  console.log(watch);
  console.log(switchList);
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

  return (
    <Container>
      <Content>
        <Ul>
          <Li>
            수기입력 허용
            <Div>
              <Form.Check
                type="switch"
                onClick={() => {
                  onSwitch(0);
                }}
              />
            </Div>
          </Li>
          <Li>
            푸시알림 허용
            <Div>
              <Form.Check
                type="switch"
                onClick={() => {
                  onSwitch(1);
                }}
              />
            </Div>
          </Li>
          <Li>
            앱 정보
            <Div>
              <Form.Check
                type="switch"
                onClick={() => {
                  onSwitch(2);
                }}
              />
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
