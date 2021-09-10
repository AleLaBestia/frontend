import React from "react";
import styled from "styled-components";
import arrow from "../img/arrow.svg";
import blob1 from "../img/blob_top.svg";
import blob2 from "../img/blob_bottom.svg";

const AnimatedButtonStyled = styled.button`
  background-color: var(--dark-primary);
  padding: 0.9rem 1.8rem;
  border-radius: 20px;
  cursor: pointer;
  outline: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  overflow: hidden;

  .arrow {
    padding-left: 0.9rem;
    transition: all 1s ease-in-out;
  }

  &:hover {
    color: var(--accent-pink);
    .blob1 {
      transition: all 1s ease-in-out;
      transform: translateX(-120px);
    }
    .blob2 {
      transition: all 1s ease-in-out;
      transform: translateX(140px);
    }

    .arrow {
      padding-left: 1.4rem;
      transition: all 1s ease-in-out;
    }
  }

  .blob1,
  .blob2 {
    position: absolute;
    padding-left: 0.9rem;
    pointer-events: none;
    transition: all 1s ease-in-out;
  }
  .blob1 {
    top: 0;
    right: 0;
  }
  .blob2 {
    bottom: 0;
    left: 0;
  }
`;

function AnimatedButton({ name }) {
  return (
    <AnimatedButtonStyled>
      {name}
      <img src={arrow} className="arrow" />
      <img src={blob1} className="blob1" />
      <img src={blob2} className="blob2" />
    </AnimatedButtonStyled>
  );
}

export default AnimatedButton;
