import React, { FC } from "react";
import styled from "styled-components";

interface Props {
  children?: any;
}

const Card: FC<Props> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  width: 100%;
`;

export default Card;
