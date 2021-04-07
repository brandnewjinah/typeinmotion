import React, { FC } from "react";
import styled from "styled-components";

interface Props {
  children?: any;
}

const Layout: FC<Props> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  width: 100%;

  @media (min-width: 640px) {
  }

  @media (min-width: 1024px) {
    padding: 0;
  }

  @media (min-width: 1280px) {
    max-width: 1280px;
    padding: 0;
    margin: 0 auto;
  }
`;

export default Layout;
