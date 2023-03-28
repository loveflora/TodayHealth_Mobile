import React from "react";
import styled from "styled-components";
import { FaBell } from "react-icons/fa";
import { useState } from "react";

export default function MainHeader({ userData }) {
  const [color, setColor] = useState("#bdbdbd");

  const onChangeColor = () => {
    color === "#bdbdbd" ? setColor("#58c78f") : setColor("#bdbdbd");
  };

  return (
    <Container>
      <NavbarWrapper>
        <Navbar>
          <span style={{ fontWeight: "bold", fontSize: "20px" }}>
            👋 {userData.name}님
          </span>
          <span style={{ fontSize: "20px" }}>
            🏃 모두가 건강해지는 그 날까지
          </span>
          <FaBell className="bell" color={color} onClick={onChangeColor} />
        </Navbar>
      </NavbarWrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  border-bottom: 1px solid #e8e8e8;
`;

const NavbarWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
`;

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;



  .bell {
    color: ${({ color }) => color};
      width: 20px;
      height: 20px;
      cursor: pointer;
    }
  }


  @media (min-width: 50rem) {
    & {
      max-width: 600px;
     width: 600px;
     padding: 20px;

  .bell {
      width: 30px;
      height: 30px;
    }

  }
`;
