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
  flex-direction: column;

  .col {
    width: 100%;
    padding: 0.5rem;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export default Grid;
