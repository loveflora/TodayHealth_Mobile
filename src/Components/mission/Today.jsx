import React from "react";
import styled from "styled-components";

import { BiWalk } from "react-icons/bi";

export default function Today() {
  return (
    <WalkWrapper>
      <div style={{ flexDirection: "row" }}>
        <BiWalk style={{ display: "flex", width: "400px", height: "200px" }} />
        <WalkTitle>활동량</WalkTitle>
      </div>
      <div>평균 걸음수</div>
    </WalkWrapper>
  );
}

const WalkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const WalkTitle = styled.div`
  font-size: 30px;
  font-weight: bold;
`;
