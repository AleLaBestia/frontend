import React from "react";
import styled from "styled-components";
import arrow from "../img/arrow.svg";

const SecondaryButtonStyled = styled.button`
  background-color: var(--dark-primary);
  padding: 0.9rem 1.8rem;
  border-radius: 20px;
  cursor: pointer;
  outline: none;
  border: none;
  display: flex;
  align-items: center;

  img {
    padding-left: 0.9rem;
  }
`;
function SecondaryButton({ name }) {
  return (
    <SecondaryButtonStyled>
      {name}
      <img src={arrow} />
    </SecondaryButtonStyled>
  );
}

export default SecondaryButton;
