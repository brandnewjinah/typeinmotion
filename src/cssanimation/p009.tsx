import React, { FC } from "react";
import styled, { css } from "styled-components";

interface Props {}

const P006: FC<Props> = () => {
  return (
    <Wrapper>
      <Row1>
        <div className="text1">hello</div>
        <div className="text2">there</div>
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
  font-size: 2rem;
  overflow: hidden;

  @media (min-width: 640px) {
    font-size: 4rem;
  }
`;

const Row1 = styled.div`
  ${Flex}
  width: 100%;
  height: 100%;
  text-transform: uppercase;
  overflow: hidden;

  .text1 {
    margin: 0 0.3rem;
    animation: P009_top 3s;
    animation-timing-function: cubic-bezier(0.33, 1, 0.68, 1);
    animation-iteration-count: infinite;
  }

  .text2 {
    margin: 0 0.3rem;
    animation: P009_bottom 3s;
    animation-timing-function: cubic-bezier(0.33, 1, 0.68, 1);
    animation-iteration-count: infinite;
  }

  @keyframes P009_top {
    0% {
      margin-top: 0;
    }
    20% {
      margin-top: 0;
    }

    35% {
      margin-top: -20px;
    }
    100% {
      margin-top: -20px;
    }
  }

  @keyframes P009_bottom {
    0% {
      margin-top: 0;
    }
    20% {
      margin-top: 0;
    }

    35% {
      margin-top: 20px;
    }
    100% {
      margin-top: 20px;
    }
  }
`;

export default P006;
