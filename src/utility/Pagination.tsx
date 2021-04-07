import React, { FC } from "react";
import styled, { css } from "styled-components";

import { mainTheme } from "../components/Tokens";
import { IconButton } from "../components/Buttons/Button";
import { ArrowRight, ArrowLeft } from "../assets/Icons";
import { neutral } from "../components/Tokens";

interface Props {
  currPage?: number;
  home?: boolean;
  isToday?: boolean;
  handlePrev: () => void;
  handleNext: () => void;
}

const Pagination: FC<Props> = ({
  currPage,
  home,
  isToday,
  handlePrev,
  handleNext,
}) => {
  return (
    <Wrapper>
      {home ? (
        <IconButton
          variant="secondary"
          color={neutral[300]}
          handleClick={() => handlePrev()}
        >
          <ArrowLeft width={20} height={20} color={neutral[600]} stroke={2} />
        </IconButton>
      ) : (
        <>
          {currPage !== 1 && (
            <IconButton
              variant="secondary"
              color={neutral[300]}
              handleClick={() => handlePrev()}
            >
              <ArrowLeft
                width={20}
                height={20}
                color={neutral[600]}
                stroke={2}
              />
            </IconButton>
          )}
          {!isToday && (
            <IconButton
              variant="secondary"
              color={neutral[300]}
              handleClick={() => handleNext()}
            >
              <ArrowRight
                width={20}
                height={20}
                color={neutral[600]}
                stroke={2}
              />
            </IconButton>
          )}
        </>
      )}
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
  font-size: ${mainTheme.helper};

  div {
    cursor: pointer;
  }

  button {
    margin: 0 0.5rem;
  }
`;

export default Pagination;
