import React from "react";
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../Header";

export default function Detail() {
  const params = useParams();
  const id = params.id;
  const navigate = useNavigate();

  return (
    <div>
      <Header text={"게시판"} />
    </div>
  );
}
