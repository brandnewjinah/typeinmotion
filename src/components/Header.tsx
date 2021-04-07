import React, { FC } from "react";
import styled, { css } from "styled-components";

import { mainTheme, neutral } from "./Tokens";

interface Props {
  day: number;
}

const Header: FC<Props> = ({ day }) => {
  return (
    <Wrapper>
      <span className="day">Day</span>
      <span className="num">{day}</span>
    </Wrapper>
  );
};

const Flex = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.header`
  ${Flex};
  height: 70px;
  font-family: ${mainTheme.primaryFont};
  font-size: ${mainTheme.header5};
  font-weight: 400;
  border-bottom: 1px solid ${neutral[200]};

  .day {
    padding-top: 0.5rem;
  }

  .num {
    display: inline-block;
    font-size: ${mainTheme.header1};
    font-weight: 700;
    margin: 0 0.5rem;
  }
`;

export default Header;
