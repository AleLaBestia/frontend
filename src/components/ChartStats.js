import React from "react";
import styled from "styled-components";

const ChartStatsStyled = styled.div`
  background-color: white;
  border-radius: 50px;
  border: 1px solid var(--border-colour);
  width: 100%;
  height: 10rem;
  padding: 2rem;
  padding-right: 1rem;
  box-shadow: 0px 25px 50px rgba(22, 25, 79, 0.05);
  h4 {
    font-size: 3rem;
    color: var(--purple-primary);
  }
  p {
    color: black;
  }
`;

function ChartStats({ name, amount }) {
  return (
    <ChartStatsStyled>
      <p>{name}</p>
      <h4>{amount}</h4>
    </ChartStatsStyled>
  );
}

export default ChartStats;
