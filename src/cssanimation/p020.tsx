import React, { FC } from "react";
import styled, { css } from "styled-components";

interface Props {}

const P020: FC<Props> = () => {
  return (
    <Wrapper>
      <Row1>
        <div className="text">loading</div>
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
  /* font-family: "Fira Sans Extra Condensed", sans-serif; */
  font-weight: 500;
  font-size: 1rem;
  overflow: hidden;

  @media (min-width: 640px) {
    font-size: 2.75rem;
  }
`;

const Row1 = styled.div`
  .text {
    position: relative;
    animation: p020 1.5s linear;
    animation-iteration-count: infinite;

    @keyframes p020 {
      0% {
        opacity: 0;
      }
      20%,
      100% {
        opacity: 1;
      }
    }

    &::before {
      content: "";
      position: absolute;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #fff;
      opacity: 0.9;
      animation: p020_reveal 1.5s linear;
      animation-iteration-count: infinite;
    }

    @keyframes p020_reveal {
      0% {
        left: 0;
      }
      20%,
      100% {
        left: 100%;
      }
    }
  }
`;

export default P020;
