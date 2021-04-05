import React, { FC } from "react";
import styled from "styled-components";

interface Props {
  children?: any;
}

const Grid: FC<Props> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  display: flex;

  @media (min-width: 640px) {
  }

  @media (min-width: 1024px) {
  }

  @media (min-width: 1280px) {
  }
`;

export default Grid;
