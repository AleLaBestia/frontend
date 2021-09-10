import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import logo from "../img/logo.svg";

const FooterStyled = styled.footer`
  padding: 0 18rem;
  background-color: #dce2f0;

  .footer-con {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  .logo-con {
    display: flex;
    align-items: center;
    margin-left: -10rem;

    img {
      width: 80px;
    }
  }

  .botton-nav {
    display: flex;
    justify-content: space-between;
    li {
      padding: 0.5rem;
      color: black;
    }
  }
`;

function Footer() {
  return (
    <FooterStyled>
      <InnerLayout>
        <div className="footer-con">
          {" "}
          <div className="logo-con">
            <div className="logo-items">
              <img src={logo} />
              <p>
                Copyright @2021 El lobo dev<br></br>
                All rights reserved
              </p>
            </div>
          </div>
          <ul className="botton-nav">
            <div className="links1">
              <li>
                <a href="#">Team</a>
              </li>
              <li>
                <a href="#">Press</a>
              </li>
              <li>
                <a href="#">Fees</a>
              </li>
            </div>
            <div className="links2">
              <li>
                <a href="#">Team</a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
              <li>
                <a href="#">Affiliate</a>
              </li>
            </div>
            <div className="links3">
              <li>
                <a href="#">Terms of use</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
            </div>
          </ul>
        </div>
      </InnerLayout>
    </FooterStyled>
  );
}

export default Footer;
