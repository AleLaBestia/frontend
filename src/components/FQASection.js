import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import lines from "../img/lines.svg";
import questions from "../questions";
import Question from "./Question";

const FaqStyled = styled.section`
  .c-para {
    width: 100%;
    margin: 0 auto;
    @media screen and (max-width: 800px) {
      width: 80%;
    }
  }
  .lines {
    position: absolute;
    left: 0;
    top: 380%;
    width: 100%;
    z-index: -1;
    img {
      width: 100%;
    }
  }
`;

function FQASection() {
  return (
    <FaqStyled>
      <InnerLayout>
        <h3 className="small-heading">
          Frequently <span>asked question</span>
          <p className="c-para"></p>
          <div className="lines">
            <img src={lines} />
          </div>
          <div className="questions-con">
            {questions.map((q) => {
              return <Question key={q.id} {...q} />;
            })}
          </div>
        </h3>
      </InnerLayout>
    </FaqStyled>
  );
}

export default FQASection;
