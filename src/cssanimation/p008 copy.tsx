import React, { FC } from "react";
import styled, { css } from "styled-components";

interface Props {}

const P008: FC<Props> = () => {
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
  background-color: #000;
`;

const Row1 = styled.div`
  /* background: 50% 100% / 10% 10% no-repeat
    radial-gradient(ellipse at bottom, #fff, transparent, transparent); */
  background: -webkit-linear-gradient(aqua, white);
  -webkit-background-clip: text;

  color: transparent;
  animation: P008_reveal 3s;
  animation-timing-function: cubic-bezier(0.5, 0, 0.84, 0);
  animation-iteration-count: infinite;

  /* @keyframes P008_reveal {
    25% {
      background-size: 400% 400%;
    }
    100% {
      background-size: 400% 400%;
    }
  } */
`;

export default P008;
