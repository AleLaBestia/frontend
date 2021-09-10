import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import avatar1 from "../img/avatar1.svg";
import avatar2 from "../img/avatar2.svg";
import avatar3 from "../img/avatar3.svg";
import avatar4 from "../img/avatar4.svg";
import avatar5 from "../img/avatar5.svg";
import messaging from "../img/conversation.svg";
import bgCircles from "../img/circleBg.svg";

const MessageStyle = styled.section`
  .message-con {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    @media screen and (max-width: 900px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  .left-items {
    position: relative;
    padding-right: 2rem;
    .m-para {
      padding: 2rem 0;
    }
    .images-con {
      display: flex;
      align-items: center;
      .image-2,
      .image-3,
      .image-4,
      .image-5 {
        margin-left: -20px;
      }
    }
    .bgCircle {
      position: absolute;
      top: -7%;
      left: -10%;
      z-index: -1;
    }
  }
  .right-items {
    position: relative;
    img {
      padding-left: 2rem;
    }
    .bgCircle {
      position: absolute;
      bottom: 0;
      right: 0;
      z-index: -1;
    }
  }
`;

function MessagingSection() {
  return (
    <MessageStyle>
      <InnerLayout>
        <div className="message-con">
          <div className="left-items">
            <h2 className="secondary-heading">
              We support you in 5 different languages
            </h2>
            <p className="m-para">
              Our support team is here to help you in 5 languages - English,
              Spanish, Russian, German, Greek.
            </p>
            <div className="images-con">
              <img src={avatar1} className="image-1" />
              <img src={avatar2} className="image-2" />
              <img src={avatar3} className="image-3" />
              <img src={avatar4} className="image-4" />
              <img src={avatar5} className="image-5" />
              <p> &nbsp; +25 </p>
            </div>
            <img src={bgCircles} className="bgCircle" />
          </div>
          <div className="right-items">
            <img src={messaging} />
            <img src={bgCircles} className="bgCircle" />
          </div>
        </div>
      </InnerLayout>
    </MessageStyle>
  );
}

export default MessagingSection;
