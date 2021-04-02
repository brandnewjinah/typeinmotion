import React, { FC } from "react";
import styled from "styled-components";

interface Props {
  children?: any;
}

const Grid: FC<Props> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 16px;

  @media (min-width: 640px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1024px) {
  }

  @media (min-width: 1280px) {
  }
`;

export default Grid;
