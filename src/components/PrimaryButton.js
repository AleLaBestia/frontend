import React from "react";
import styled from "styled-components";

const ButtonStyled = styled.button`
  background-color: var(--accent-pink);
  padding: 0.6rem 1.8rem;
  border-radius: 20px;
  cursor: pointer;
  outline: none;
  border: none;
`;

function PrimaryButton({ name }) {
  return <ButtonStyled>{name}</ButtonStyled>;
}

export default PrimaryButton;
