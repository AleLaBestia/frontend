import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import card from "../img/creditcard.svg";

const CardSectionStyled = styled.section`
  .card-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    @media screen and (max-width: 884px) {
      grid-template-columns: repeat(1, 1fr);
    }

    .card-right {
      display: flex;
      justify-content: flex-end;
    }
    .card-left {
      p {
        padding: 1rem 0;
      }
    }
  }
`;

function CardSection() {
  return (
    <CardSectionStyled>
      <InnerLayout>
        <div className="card-container">
          <div className="card-left">
            <h2 className="secondary-heading">
              One card for all your payments
            </h2>
            <p>
              Get 3% back on everything you buy with Draft card. Register today
              and enjoy every aspect of your business.
            </p>
          </div>
          <div className="card-right">
            <img src={card} />
          </div>
        </div>
      </InnerLayout>
    </CardSectionStyled>
  );
}

export default CardSection;
