import React, { FC } from "react";
import styled, { css } from "styled-components";

interface Props {}

const P012: FC<Props> = () => {
  return (
    <Wrapper>
      <Row1>
        <span>H</span>
        <span>E</span>
        <span>L</span>
        <span>L</span>
        <span className="letter"></span>
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
  position: absolute;
  /* transform: translate(120%, -50%);
  animation: p012_position 3s;
  animation-timing-function: cubic-bezier(0.5, 1, 0.89, 1);
  animation-iteration-count: infinite; */

  span {
    margin: 0 0.5rem;
    animation: span 3s;
    animation-timing-function: cubic-bezier(0.5, 1, 0.89, 1);
    animation-iteration-count: infinite;
  }

  .letter {
    display: inline-flex;
    height: 1.4rem;
    width: 30vw;
    border: 2px solid #303030;
    border-radius: 1rem;
    margin: 0 0.35rem;
    animation: letter 3s;
    animation-timing-function: cubic-bezier(0.5, 1, 0.89, 1);
    animation-iteration-count: infinite;
  }

  @keyframes p012_position {
    0% {
      transform: translate(120%, -50%);
    }
    30%,
    100% {
      transform: translate(0, -50%);
    }
  }

  @keyframes span {
    30%,
    100% {
      margin: 0 0.125rem;
    }
  }

  @keyframes letter {
    0% {
      width: 30vw;
    }
    30%,
    100% {
      width: 0.8rem;
    }
  }

  @media (min-width: 640px) {
    .letter {
      height: 1.8rem;
    }

    @keyframes letter {
      0% {
        width: 30vw;
      }
      30%,
      100% {
        width: 1rem;
      }
    }
  }
`;

export default P012;
