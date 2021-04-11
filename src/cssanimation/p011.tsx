import React, { FC } from "react";
import styled, { css } from "styled-components";

interface Props {}

const P011: FC<Props> = () => {
  return (
    <Wrapper>
      <Row1>
        <div className="text">HELLO</div>
      </Row1>
    </Wrapper>
  );
};

const Flex = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  ${Flex}
  position: relative;
  width: 100%;
  height: 240px;
  font-family: "Fira Sans Extra Condensed", sans-serif;
  font-weight: 300;
  font-size: 1.875rem;
  overflow: hidden;

  @media (min-width: 640px) {
    font-size: 2.5rem;
  }
`;

const Row1 = styled.div`
  .text {
    position: absolute;
    text-transform: uppercase;
    letter-spacing: 1rem;
    transform: translate(600%, -50%);
    animation: p011_position 3s;
    animation-timing-function: cubic-bezier(0.5, 1, 0.89, 1);
    animation-iteration-count: infinite;
  }

  @keyframes p011_position {
    0% {
      transform: translate(600%, -50%);
      letter-spacing: 1rem;
    }
    10% {
      letter-spacing: 1rem;
    }
    30% {
      transform: translate(-50%, -50%);
      letter-spacing: 0;
    }
    100% {
      transform: translate(-50%, -50%);
      letter-spacing: 0;
    }
  }
`;

export default P011;
