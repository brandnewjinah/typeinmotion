import React, { FC } from "react";
import styled, { css } from "styled-components";

interface Props {}

const P007: FC<Props> = () => {
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
`;

const Row1 = styled.div`
  .text {
    color: transparent;
    text-shadow: 0 0 30px rgba(0, 0, 0, 1);
    animation: p007_blur 3s;
    animation-timing-function: cubic-bezier(0.5, 0, 0.84, 0);
    animation-iteration-count: infinite;
  }

  @keyframes p007_blur {
    0% {
    }

    20% {
      color: transparent;
    }
    25% {
      color: black;
      text-shadow: none;
    }
    100% {
      color: black;
      text-shadow: none;
    }
  }
`;

export default P007;
