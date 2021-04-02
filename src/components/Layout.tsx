import React, { FC } from "react";
import styled from "styled-components";

interface Props {
  children?: any;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Container = styled.div`
  width: 100%;
  padding: 2rem 16px;

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
