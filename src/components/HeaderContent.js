import React from "react";
import styled from "styled-components";
import SecondaryButton from "./SecondaryButton";
import phone from "../img/phone.svg";
import ring1 from "../img/ring_orange.svg";
import message1 from "../img/message_pink.svg";
import message2 from "../img/message_blue.svg";
import { Fade } from "react-reveal";

const HeaderContentStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding-top: 3rem;
  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
  }

  .left-content {
    display: flex;
    align-items: center;
    padding-right: 3rem;
    h1 {
      font-size: 3.5rem;
      font-weight: 600;
      @media screen and (max-width: 700px) {
        padding: 5rem 4rem;
        font-size: 3rem;
      }
    }
    .white {
      padding: 1.4rem 0;
      color: white;
    }
  }
  .right-content {
    position: relative;
    .phone {
      width: 80%;
      display: flex;
      justify-content: center;
    }
    .ring1 {
      position: absolute;
      width: 15%;
      bottom: 0;
      right: 20%;
      left: auto;
      bottom: 25%;
      animation: tomove 6s infinite;
      transition: all 0.5s ease-in-out;
    }
    .message1 {
      position: absolute;
      top: 0;
      right: 20%;
      left: auto;
      top: 3%;
      width: 20%;
      animation: move 7s infinite;
      transition: all 0.5s ease-in-out;
    }
    .message2 {
      position: absolute;
      bottom: 15%;
      left: 0;
      width: 20%;
      animation: move 5s infinite;
      animation-name: 0.5s;
      transition: all 0.5s ease-in-out;
    }
  }

  //Header animations
  .message {
    @keyframes move {
      0% {
        transform: translateY(0) rotate(0deg) scale(1) translateX(0);
      }
      50% {
        transform: translateY(-12px) rotate(-30deg) scale(1.2) translateX(10px);
      }
      100% {
        transform: translateY(0px) rotate(0deg) scale() translateX(0px);
      }
    }

    @keyframes tomove {
      0% {
        transform: translateY(0) rotate(0deg) scale(1) translateX(0);
      }
      50% {
        transform: translateY(-12px) rotate(60deg) scale(1.2) translateX(10px);
      }
      100% {
        transform: translateY(0px) rotate(0deg) scale() translateX(0px);
      }
    }
  }
`;

function HeaderContent() {
  return (
    <HeaderContentStyled>
      <Fade left>
        <div className="left-content">
          <div className="left-text-container">
            <h1>Smart Banking For Freelancers</h1>
            <p className="white">
              Draft is a revolutionary mobile app built to help yu manage your
              business easily and save you money
            </p>
            <SecondaryButton name={"Register Now"} />
          </div>
        </div>
      </Fade>
      <Fade right>
        <div className="right-content">
          <img src={phone} className="phone" />
          <img src={ring1} className="ring1" />
          <img src={message1} className="message1" />
          <img src={message2} className="message2" />
        </div>
      </Fade>
    </HeaderContentStyled>
  );
}

export default HeaderContent;
