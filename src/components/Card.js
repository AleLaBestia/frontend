import React from "react";
import styled from "styled-components";

const CardStyled = styled.div`
  background-color: white;
  padding: 3rem 2rem;
  border-radius: 30px;
  box-shadow: 0px 25px 50px rgba(22, 25, 79, 0.05);
  .card-title {
    font-size: 2rem;
    color: black;
    text-align: center;
    padding: 1rem 0;
    span {
      font-size: 1.4rem;
    }
  }

  .button-con {
    text-align: center;
    padding: 1.5rem 0rem;

    button {
      border: 2px solid #16194f;
      padding: 0.5rem 1.8rem;
      outline: none;
      cursor: pointer;
      color: black;
      border-radius: 20px;
    }
  }

  .card-con {
    display: flex;
    justify-content: center;
    img {
      padding: 5rem;
    }
  }

  .plan-con {
    display: flex;
    justify-content: center;
    img {
      padding: 0.5rem;
    }
  }
`;

function Card({
  account,
  amount,
  text,
  button,
  card,
  active,
  inactive,
  check,
  checkDisable,
  text1,
  text2,
  text3,
  text4,
  text5,
  text6,
  text7,
  text8,
}) {
  return (
    <CardStyled>
      <h4 className="card-title">{account}</h4>
      <h4 className="card-title">
        {amount}
        <span>/m</span>
      </h4>
      <p>{text}</p>
      <div className="button-con">
        <button>{button}</button>
      </div>

      <img src={card} />
      <div className="plan-con">
        <img src={active} />
        <img src={inactive} />
      </div>
      <p className="text-check">
        <img src={check} />
        {text1}
      </p>
      <p className="text-check">
        <img src={check} />
        {text2}
      </p>
      <p className="text-check">
        <img src={check} />
        {text3}
      </p>
      <p className="text-check">
        <img src={check} />
        {text4}
      </p>
      <p className="text-check">
        <img src={check} />
        {text5}
      </p>
      <p className="text-check">
        <img src={checkDisable} />
        {text6}
      </p>
      <p className="text-check">
        <img src={checkDisable} />
        {text7}
      </p>
      <p className="text-check">
        <img src={checkDisable} />
        {text8}
      </p>
    </CardStyled>
  );
}

export default Card;
