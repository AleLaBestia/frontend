import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Card from "./Card";
import card from "../img/creditcard.svg";
import active from "../img/active.svg";
import inactive from "../img/inactive.svg";
import check from "../img/check.svg";
import checkDisable from "../img/check-disabled.svg";

const PaymentStyled = styled.section`
  .card-con {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
    margin-top: 5rem;
    @media screen and (max-width: 800px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
  p {
    text-align: center;
  }
`;

function PaymentSection() {
  return (
    <PaymentStyled>
      <InnerLayout>
        <h3 className="small-heading">
          An exceptional service, <span>at the right price</span>
        </h3>
        <p>Start with our free plan and switch to premium as you grow.</p>
        <div className="card-con">
          <Card
            account={"Free"}
            amount={"$0"}
            text={"Manage your business a simple and efficient account."}
            button={"Get Started"}
            card={card}
            active={active}
            inactive={inactive}
            check={check}
            check={check}
            text1={"10 free local transfers"}
            text2={"Free ATM withdrawals in Dollar up to $250 per month"}
            text3={"Free payments to other Draft accounts"}
            text4={"Prepaid debit cards"}
            text5={"Virtual cards"}
            text6={"Priority 24/7 support"}
            text7={"Exchange 24 currencies"}
            text8={"Multi-user access"}
          />
          <Card
            account={"Premium"}
            amount={"$10"}
            text={"Manage your business a simple and efficient account."}
            button={"Get Started"}
            card={card}
            active={active}
            inactive={inactive}
            check={check}
            checkDisable={check}
            text1={"10 free local transfers"}
            text2={"Free ATM withdrawals in Dollar up to $250 per month"}
            text3={"Free payments to other Draft accounts"}
            text4={"Prepaid debit cards"}
            text5={"Virtual cards"}
            text6={"Priority 24/7 support"}
            text7={"Exchange 24 currencies"}
            text8={"Multi-user access"}
          />
        </div>
      </InnerLayout>
    </PaymentStyled>
  );
}

export default PaymentSection;
