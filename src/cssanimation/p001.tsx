import React, { FC } from "react";
import styled, { css } from "styled-components";

interface Props {}

const P001: FC<Props> = () => {
  return (
    <Wrapper>
      <Row1>
        <div className="text">HELLO</div>
      </Row1>
      <Row2>
        <div className="text">THERE</div>
      </Row2>
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
  height: 300px;
  flex-direction: column;
  background-color: aliceblue;
  font-family: "Fira Sans Extra Condensed", sans-serif;
  font-weight: 700;
  font-size: 2.5rem;

  div {
    height: 2.5rem;
    overflow: hidden;
  }
`;

const Row1 = styled.div`
  .text {
    animation: slideup1 3s infinite;
  }

  @keyframes slideup1 {
    0% {
      opacity: 0;
      margin-top: 40px;
    }
    25% {
      opacity: 1;
      margin-top: 0;
    }
    80% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

const Row2 = styled.div`
  .text {
    animation: slideup2 3s infinite;
  }

  @keyframes slideup2 {
    0% {
      opacity: 0;
      margin-top: 40px;
    }
    4% {
      opacity: 0;
      margin-top: 40px;
    }
    29% {
      opacity: 1;
      margin-top: 0;
    }
    80% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

export default P001;
