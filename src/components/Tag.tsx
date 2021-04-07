import React, { FC } from "react";
import styled from "styled-components";

import { accentColor } from "./Tokens";

interface Props {
  group?: string;
  method?: string;
}

const Tag: FC<Props> = ({ group, method }) => {
  return <Wrapper group={group}>{method}</Wrapper>;
};

const Wrapper = styled.div<Props>`
  font-size: 0.75rem;
  color: #fff;
  background-color: ${(props) =>
    props.group === "a"
      ? accentColor.green
      : props.group === "b"
      ? accentColor.opal
      : "black"};
  border-radius: 1rem;
  padding: 0.25rem 0.5rem;
`;

export default Tag;
