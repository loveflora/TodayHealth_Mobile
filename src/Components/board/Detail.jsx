import React from "react";
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../Header";

export default function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();

  console.log(id);

  return (
    <Container>
      <Text></Text>
    </Container>
  );
}
