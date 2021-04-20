import React, { FC } from "react";
import styled, { css } from "styled-components";

interface Props {}

const P019: FC<Props> = () => {
  return (
    <Wrapper>
      <Row1>
        <div className="text">HELLO THERE</div>
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
  font-size: 1.25rem;
  overflow: hidden;

  @media (min-width: 640px) {
    font-size: 2.75rem;
  }
`;

const Row1 = styled.div`
  .text {
    position: relative;
    text-transform: uppercase;
    letter-spacing: 0.15rem;
    animation: p019_track_move 3s linear;
    animation-iteration-count: infinite;

    @keyframes p019_track_move {
      0% {
        transform: translate(10%, 0);
        letter-spacing: 0.15rem;
        opacity: 0;
      }
      20%,
      80% {
        transform: translate(0, 0);
        letter-spacing: 0;
        opacity: 1;
      }
      100% {
        transform: translate(-10%, 0);
        letter-spacing: 0.15rem;
        opacity: 0;
      }
    }

    &::before {
      content: "";
      position: absolute;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #fff;
      animation: p019_reveal 3s linear;
      animation-iteration-count: infinite;
    }

    @keyframes p019_reveal {
      0% {
        left: 0;
      }
      20%,
      100% {
        left: 100%;
      }
    }

    &::after {
      content: "";
      position: absolute;
      left: -100%;
      width: 100%;
      height: 100%;
      background-color: #fff;
      animation: p019_reveal_after 3s linear;
      animation-iteration-count: infinite;
    }

    @keyframes p019_reveal_after {
      0%,
      80% {
        left: -100%;
      }
      100% {
        left: 0;
      }
    }
  }

  @media (min-width: 640px) {
    @keyframes p010_track {
      0% {
        letter-spacing: 0;
        opacity: 0.8;
      }
      45% {
        letter-spacing: 0.2rem;
        opacity: 1;
      }
      100% {
        letter-spacing: 0.2rem;
        opacity: 1;
      }
    }
  }
`;

export default P019;
