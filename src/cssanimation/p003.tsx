import React, { FC } from "react";
import styled, { css } from "styled-components";

interface Props {}

const P003: FC<Props> = () => {
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
  background-color: aliceblue;
`;

const Row1 = styled.div`
  animation: scale 3s ease-out;
  animation-iteration-count: infinite;

  .text {
    backface-visibility: hidden;
    -webkit-font-smoothing: antialiased;
  }

  @keyframes scale {
    0% {
      letter-spacing: 0.5rem;
      opacity: 0;
    }
    30% {
      letter-spacing: 0;
    }
    60% {
      opacity: 1;
    }
    100% {
    }
  }
`;

export default P003;
