import React, { FC } from "react";
import styled, { css } from "styled-components";

interface Props {}

const P005: FC<Props> = () => {
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
  width: 100%;
  height: 240px;
  font-family: "Fira Sans Extra Condensed", sans-serif;
  font-weight: 600;
  font-size: 4rem;
  overflow: hidden;
  background-color: #fafafa;
`;

const Row1 = styled.div`
  animation: flicker 3s;
  animation-timing-function: cubic-bezier(0.7, 0, 0.84, 0);
  animation-iteration-count: infinite;

  .text {
    backface-visibility: hidden;
    -webkit-font-smoothing: antialiased;
  }

  @keyframes flicker {
    0% {
      letter-spacing: -1.8rem;
      opacity: 0;
    }
    15% {
      letter-spacing: 0;
      opacity: 1;
    }
    60% {
    }
    100% {
    }
  }
`;

export default P005;
