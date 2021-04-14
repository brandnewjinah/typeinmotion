import React, { FC } from "react";
import styled, { css } from "styled-components";

interface Props {}

const P014: FC<Props> = () => {
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
  font-weight: 300;
  font-size: 4rem;
  overflow: hidden;
`;

const Row1 = styled.div`
  letter-spacing: 2rem;
  transform: scale(5);
  filter: blur(1px);
  animation: P014_scale 3s;
  animation-timing-function: cubic-bezier(0.1, 1, 0.2, 1);
  animation-iteration-count: infinite;

  @keyframes P014_scale {
    0% {
      opacity: 0;
    }
    35%,
    100% {
      transform: scale(1);
      opacity: 1;
      filter: blur(0);
    }
  }

  .text {
    animation: p014_track 3s linear;
    animation-iteration-count: infinite;
  }

  @keyframes p014_track {
    0% {
      letter-spacing: 2rem;
    }
    36% {
      letter-spacing: 1.5rem;
    }
    80%,
    100% {
      letter-spacing: 1rem;
    }
  }
`;

export default P014;
