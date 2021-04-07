import React, { FC } from "react";
import styled from "styled-components";

import Tag from "../Tag";
import { neutral } from "../Tokens";

interface Props {
  children?: any;
  group?: string;
  label?: string;
  method?: string;
}

const Card: FC<Props> = ({ children, group, label, method }) => {
  return (
    <Wrapper>
      <div>{children}</div>
      <Info>
        <div className="left">{label}</div>
        <div className="right">
          <Tag group={group} method={method} />
        </div>
      </Info>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  background-color: ${neutral[10]};
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.875rem;
  color: #202121;
  border-top: 1px solid ${neutral[200]};
  padding: 1.75rem;

  .left {
    font-weight: 600;
    text-transform: uppercase;
  }
`;

export default Card;
