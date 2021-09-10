import React from "react";
import { Fade } from "react-reveal";
import styled from "styled-components";
import bg from "../img/bg.svg";
import HeaderContent from "./HeaderContent";
import Navigation from "./Navigation";

const HeaderStyled = styled.header`
  min-height: 100vh;
  width: 100%;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: 100%;
  .header-content {
    padding: 0 10rem;
    @media screen and (max-width: 1080px) {
      padding: 5rem 5rem;
    }
  }
`;

function Header() {
  return (
    <HeaderStyled>
      <Fade>
        <div className="header-content">
          <Fade top>
            <Navigation />
          </Fade>

          <HeaderContent />
        </div>
      </Fade>
    </HeaderStyled>
  );
}

export default Header;
