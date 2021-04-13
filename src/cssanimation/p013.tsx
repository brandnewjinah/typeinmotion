import React, { FC } from "react";
import styled, { css } from "styled-components";

interface Props {}

const P013: FC<Props> = () => {
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
  overflow: hidden;
`;

const Row1 = styled.div`
  font-size: 4rem;
  transform: scale(0.5);
  filter: blur(5px);
  animation: p013_scale 3s;
  animation-timing-function: cubic-bezier(0.5, 0, 0.75, 0);
  animation-iteration-count: infinite;

  @keyframes p013_scale {
    0% {
      transform: scale(0.5);
    }
    11%,
    100% {
      transform: scale(1);
      filter: blur(0);
    }
  }

  .text {
    animation: p013_track 3s linear;
    animation-iteration-count: infinite;
  }

  @keyframes p013_track {
    0% {
      letter-spacing: 0;
    }
    11% {
      letter-spacing: 0.125rem;
    }
    80%,
    100% {
      letter-spacing: 0.5rem;
    }
  }
`;

export default P013;
