import React, { FC } from "react";
import styled, { css } from "styled-components";

interface Props {}

const P006: FC<Props> = () => {
  return (
    <Wrapper>
      <Row1>
        <div className="text" data-text="hello">
          HELLO
        </div>
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
  background-color: #fafafa;
`;

const Row1 = styled.div`
  .text {
    position: relative;
    text-transform: uppercase;
    color: #fff;
    -webkit-text-stroke: 1px #eee;

    &::after {
      content: "";
      position: absolute;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #fafafa;
      animation: p006_reveal 2.8s linear;
      /* animation-timing-function: cubic-bezier(0.5, 0, 0.75, 0); */
      animation-iteration-count: infinite;
    }

    &::before {
      content: attr(data-text);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      color: #000;
      -webkit-text-stroke: 0;
      overflow: hidden;
      animation: filler 2.8s linear;
      /* animation-timing-function: cubic-bezier(0.5, 0, 0.75, 0); */
      animation-iteration-count: infinite;
    }
  }

  @keyframes p006_reveal {
    0% {
      left: 0;
    }
    30% {
      left: 100%;
    }
    100% {
      left: 100%;
    }
  }

  @keyframes filler {
    0% {
      opacity: 0;
    }
    35% {
      opacity: 0;
    }
    48% {
      opacity: 100%;
    }
    100% {
      opacity: 100%;
    }
  }
`;

export default P006;
