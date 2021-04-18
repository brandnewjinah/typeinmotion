import React, { FC } from "react";
import styled, { css } from "styled-components";

interface Props {}

const P017: FC<Props> = () => {
  return (
    <Wrapper>
      <Row1>
        HELLO
        <div>HELLO</div>
        <div>HELLO</div>
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
`;

const Row1 = styled.div`
  position: relative;
  margin: auto;
  color: transparent;
  font-size: 4rem;
  font-weight: 700;

  div {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    color: #000;
    pointer-events: none;
  }

  div:nth-child(1) {
    -webkit-mask-image: linear-gradient(black 50%, transparent 50%);
    mask-image: linear-gradient(black 50%, transparent 50%);
    animation: P017_1 5s infinite;
  }

  @keyframes P017_1 {
    0% {
      transform: translateX(100%);
      opacity: 0;
    }
    25% {
      transform: translateX(0%);
      opacity: 1;
    }
    82% {
      transform: translateX(0%);
      opacity: 1;
    }
    100% {
      transform: translateX(-100%);
      opacity: 0;
    }
  }

  div:nth-child(2) {
    -webkit-mask-image: linear-gradient(transparent 50%, black 50%);
    mask-image: linear-gradient(transparent 50%, black 50%);
    animation: P017_2 5s infinite;
  }

  @keyframes P017_2 {
    0% {
      transform: translateX(100%);
      opacity: 0;
    }
    20% {
      transform: translateX(0%);
      opacity: 1;
    }
    80% {
      transform: translateX(0%);
      opacity: 1;
    }
    100% {
      transform: translateX(-100%);
      opacity: 0;
    }
  }
`;

export default P017;
