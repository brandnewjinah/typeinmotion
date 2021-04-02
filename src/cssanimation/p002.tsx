import React, { FC } from "react";
import styled, { css } from "styled-components";

interface Props {}

const Card: FC<Props> = () => {
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
  font-weight: 500;
  font-size: 4rem;
  overflow: hidden;
  background-color: aliceblue;
  -webkit-backface-visibility: hidden;
  /*-webkit-perspective: 1000;
  -webkit-transform: translate3d(0, 0, 0); */
`;

const Row1 = styled.div`
  animation: scale 2s infinite;

  .text {
    backface-visibility: hidden;
    -webkit-font-smoothing: antialiased;
    /* transform: perspective(1px) translateZ(0);
    -webkit-font-smoothing: subpixel-antialiased; */
  }

  @keyframes scale {
    0% {
      transform: scale(15);
      opacity: 0;
    }
    23% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      transform: scale(1);
    }
  }
`;

export default Card;
