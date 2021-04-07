import React, { FC } from "react";
import styled, { css } from "styled-components";

interface Props {}

const P002: FC<Props> = () => {
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
  font-weight: 500;
  font-size: 4rem;
  overflow: hidden;
`;

const Row1 = styled.div`
  animation: scale 2s infinite;

  .text {
    backface-visibility: hidden;
    -webkit-font-smoothing: antialiased;
  }

  @keyframes scale {
    0% {
      transform: scale(15);
      opacity: 0;
    }
    23% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      transform: scale(1);
    }
  }
`;

export default P002;
