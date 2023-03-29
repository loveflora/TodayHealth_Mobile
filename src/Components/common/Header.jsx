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
        <span style={{ fontSize: "30px", width: "540px", fontWeight: "bold" }}>
          {text}
        </span>
      </Navbar>
    </NavbarWrapper>
  );
}

const NavbarWrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid #e8e8e8;
`;

const Navbar = styled.div`
display: flex;
flex-direction: row;
align-items: center;
margin: 0 auto;
padding: 10px 30px;
width: 26rem;
height: 70px;

.icon {
  color: gray;
  cursor: pointer;
  width: 50px;
  height: 50px;
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
