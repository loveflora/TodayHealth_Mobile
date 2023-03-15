import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Form from "react-bootstrap/Form";

export default function Set() {
  const navigate = useNavigate();

  const [switchList, setSwitchList] = useState([
    { id: 1, click: false },
    { id: 2, click: false },
    { id: 3, click: false },
  ]);
  // const [click, setClick] = useState(false);

  const onSwitch = (idx) => {
    let copy = [...switchList];
    copy[idx].click = !copy[idx].click;
    setSwitchList(copy);
  };

  console.log(switchList);
  return (
    <Container>
      <Content>
        <Ul>
          <Li>
            수기입력 허용
            <Form>
              <Form.Check
                type="switch"
                onClick={() => {
                  onSwitch(0);
                }}
              />
            </Form>
          </Li>
          <Li>
            푸시알림 허용
            <Form.Check
              type="switch"
              onClick={() => {
                onSwitch(1);
              }}
            />
          </Li>
          <Li>
            앱 정보
            <Form.Check
              type="switch"
              onClick={() => {
                onSwitch(2);
              }}
            />
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
