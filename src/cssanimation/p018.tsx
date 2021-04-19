import React, { FC } from "react";
import styled, { css } from "styled-components";

interface Props {}

const P018: FC<Props> = () => {
  return (
    <Wrapper>
      <Row1 title="HELLO">HELLO</Row1>
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
  position: relative;
  margin: auto;
  font-size: 4rem;
  font-weight: 500;
  /* transform: translate(0, 0) skew(5deg); */
  animation: P018_glitch 1s linear infinite;

  @keyframes P018_glitch {
    2%,
    50% {
      transform: translate(2px, 0) skew(0deg);
    }

    4%,
    54% {
      transform: translate(-2px, 0) skew(0deg);
    }

    52% {
      transform: translate(0, 0) skew(5deg);
    }
  }

  &:before,
  &:after {
    content: attr(title);
    position: absolute;
    left: 0;
  }

  &:before {
    clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
    animation: P018_glitch_top 1s linear infinite;
  }

  @keyframes P018_glitch_top {
    2%,
    50% {
      transform: translate(1px, -1px) skew(0deg);
    }
    4%,
    54% {
      transform: translate(-1px, 1px) skew(0deg);
    }
    52% {
      transform: translate(0, 0) skew(-13deg);
    }
  }

  &:after {
    clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
    -webkit-clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
    animation: P018_glitch_bottom 1s linear infinite;
  }

  @keyframes P018_glitch_bottom {
    2%,
    50% {
      transform: translate(1px, -1px) skew(0deg);
    }
    4%,
    54% {
      transform: translate(-1px, 1px) skew(0deg);
    }
    52% {
      transform: translate(0, 0) skew(-13deg);
    }
  }
`;

export default P018;
