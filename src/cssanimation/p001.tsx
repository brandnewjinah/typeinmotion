import React, { FC } from "react";
import styled, { css } from "styled-components";

interface Props {}

const P001: FC<Props> = () => {
  return (
    <Wrapper>
      <Row>
        <div className="text1">HELLO</div>
      </Row>
      <Row>
        <div className="text2">THERE</div>
      </Row>
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
  flex-direction: column;
  font-family: "Fira Sans Extra Condensed", sans-serif;
  font-weight: 700;
  font-size: 1.75rem;

  div {
    height: 1.75rem;
    overflow: hidden;
  }

  @media (min-width: 640px) {
    font-size: 3.5rem;

    div {
      height: 3.5rem;
    }
  }
`;

const Row = styled.div`
  .text1 {
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
    90% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  .text2 {
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
    90% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

export default P001;
