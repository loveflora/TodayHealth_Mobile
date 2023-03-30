import React from "react";
import styled from "styled-components";
import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Header({ text }) {
  const navigate = useNavigate();

  return (
    <NavbarWrapper>
      <Navbar>
        <FaHome
          // size="30"
          className="icon"
          onClick={() => {
            navigate("/");
          }}
        />
        <Title>{text}</Title>
      </Navbar>
    </NavbarWrapper>
  );
}

const NavbarWrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid #e8e8e8;
  height: 61px;

  @media (min-width: 50rem) {
    & {
      height: 70px;
    }
  }
`;

const Navbar = styled.div`
display: flex;
flex-direction: row;
align-items: center;
margin: 0 auto;
justify-content: space-between;
padding: 20px 0;
width: 310px;
height: 61px;

.icon {
  color: gray;
  cursor: pointer;
  width: 30px;
  height: 30px;
}

  @media (min-width: 50rem) {
    & {
      padding: 20px;
      width: 600px;
    }

    .icon {
      width: 40px;
      height: 40px;
    }
  }
  .
`;

const Title = styled.div`
  font-size: 20px;
  width: 260px;
  font-weight: bold;

  @media (min-width: 50rem) {
    & {
      font-size: 30px;
      width: 540px;
    }
  }
`;
