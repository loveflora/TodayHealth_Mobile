import React from "react";
import styled from "styled-components";

import { IoWater } from "react-icons/io5";
import { BiWalk } from "react-icons/bi";
import { CgPill } from "react-icons/cg";
import { ImSpoonKnife } from "react-icons/im";

export default function MissionBox({ onComplete }) {
  return (
    <BoxWrapper>
      <Box bg="salmon">
        <BiWalk className="boxIcon" />
        <div>30분 이상 걷기</div>
        <Btn
          color="salmon"
          onClick={() => {
            onComplete(0);
          }}
        >
          완료
        </Btn>
      </Box>
      <Box bg="#f2af50">
        <ImSpoonKnife
          className="boxIcon-Fork "
          size="55"
          style={{ color: "white" }}
        />
        <div>세끼 식사하기</div>
        <Btn
          color="#f2af50"
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
          color="#87cc5c"
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
          color="#5ccca5"
          onClick={() => {
            onComplete(3);
          }}
        >
          완료
        </Btn>
      </Box>
    </BoxWrapper>
  );
}

const BoxWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 28rem;
  height: 30rem;
  padding: 20px 0;
  justify-content: center;

  @media (min-width: 50rem) {
    & {
      width: 100%;
      height: 80rem;
      padding: 20px 0;
    }
  }
`;

const Box = styled.div`
  padding: 30px 50px;
  background-color: ${({ bg }) => bg};
  border-radius: 10px;
  width: 160px;
  height: 160px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  margin: 10px;
  display: flex;
  flex-direction: column;

  .boxIcon-Fork {
    width: 40px;
  }

  .boxIcon {
    color: white;
    width: 60px;
    height: 40px;
  }

  & > div {
    color: white;
    font-size: 14px;
    padding: 10px;
  }

  @media (min-width: 50rem) {
    & {
      width: 270px;
      height: 270px;
    }

    .boxIcon {
      color: white;
      width: 70px;
      height: 70px;
    }

    .boxIcon-Fork {
      margin-top: 10px;
      width: 60px;
      height: 40px;
    }

    & > div {
      color: white;
      font-size: 24px;
      padding: 20px;
    }
  }
`;

const Btn = styled.button`
  width: 50px;
  height: 24px;
  border: none;
  outline: none;
  border-radius: 3px;
  font-size: 12px;
  font-weight: bold;
  color: ${({ color }) => color};

  @media (min-width: 50rem) {
    & {
      width: 60px;
      height: 30px;
      font-size: 16px;
    }
  }
`;
