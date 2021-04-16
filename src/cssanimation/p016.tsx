import React, { FC } from "react";
import styled, { css } from "styled-components";

interface Props {}

const P016: FC<Props> = () => {
  return (
    <Wrapper>
      <Row1>
        <div className="text1">HELLO</div>
        <div className="text2">THERE</div>
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
`;

const Row1 = styled.div`
  line-height: 1.875rem;
  animation: P016_Scale 3s;
  animation-timing-function: cubic-bezier(0.33, 1, 0.68, 1);
  animation-iteration-count: infinite;

  @keyframes P016_Scale {
    0% {
      transform: scale(1);
    }

    10%,
    100% {
      transform: scale(3);
    }
  }

  .text1 {
    animation: P016_Text1 3s;
    animation-timing-function: cubic-bezier(0.33, 1, 0.68, 1);
    animation-iteration-count: infinite;
  }

  @keyframes P016_Text1 {
    0%,
    20% {
      transform: translate(0, 0);
    }
    80%,
    100% {
      transform: translate(-400%, 0);
    }
  }

  .text2 {
    animation: P016_Text2 3s;
    animation-timing-function: cubic-bezier(0.33, 1, 0.68, 1);
    animation-iteration-count: infinite;
  }

  @keyframes P016_Text2 {
    0%,
    20% {
      transform: translate(0, 0);
    }
    80%,
    100% {
      transform: translate(400%, 0);
    }
  }
`;

export default P016;
