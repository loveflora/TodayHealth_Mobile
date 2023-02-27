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
          size="30"
          style={{
            color: "gray",
            cursor: "pointer",
          }}
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
  width: 700px;
  display: flex;
  margin: 0 auto;
  flex-direction: row;
  align-items: center;
  padding: 10px 30px;
  height: 70px;

  .
`;
