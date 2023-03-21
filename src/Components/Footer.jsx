import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { BsFillPlusCircleFill } from "react-icons/bs";
import { FaHome, FaFlag, FaHeartbeat } from "react-icons/fa";
import { TbMessages } from "react-icons/tb";
import { AiFillSetting } from "react-icons/ai";
import Modal from "./Modal";
import BPMeasure from "./measure/BPMeasure";
import BSTMeasure from "./measure/BSTMeasure";
import BWMeasure from "./measure/BWMeasure";
import DietMeasure from "./measure/DietMeasure";

export default function Footer({ show, setShow }) {
  let navigate = useNavigate();

  const txt = ["홈", "미션", "게시판", "설정"];

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

  const [measure, setMeasure] = useState([
    { id: 1, put: false },
    { id: 2, put: false },
    { id: 3, put: false },
    { id: 4, put: false },
  ]);

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
        {show && <Modal onMeasure={onMeasure} />}
        {measure[0].put && <BPMeasure onAlert={onAlert} />}
        {measure[1].put && <BSTMeasure onAlert={onAlert} />}
        {measure[2].put && <BWMeasure onAlert={onAlert} />}
        {measure[3].put && <DietMeasure onAlert={onAlert} />}
      </div>
    </FooterWrapper>
  );
}

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
