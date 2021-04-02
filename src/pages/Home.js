import React from "react";
import { useHistory } from "react-router-dom";

//import libraries
import styled from "styled-components";
import moment from "moment";

//import components
import Grid from "../components/Grid";
import Card from "../components/Cards/Card";
import { mainTheme } from "../components/Tokens";
import Pagination from "../utility/Pagination";

//import animation components
import { Animations } from "../helper/Animations";

const Home = () => {
  const history = useHistory();
  let startDate = moment("2021-04-01");
  let currenDate = moment();
  let today = currenDate.diff(startDate, "days") + 1;

  const CSSAnimation = Animations[`a00${today}`];
  const LOTTIEAnimation = Animations[`a00${today}Lottie`];

  const handlePrev = () => {
    let prevPage = today - 1;
    history.push(`/${prevPage}`);
  };

  return (
    <Wrapper>
      <Title>
        <span className="day">Day</span>
        <span className="num">{today}</span>
      </Title>
      <Grid>
        <Card>
          <CSSAnimation />
          <p>css</p>
        </Card>
        <Card>
          <LOTTIEAnimation />
          <p>lottie</p>
        </Card>
      </Grid>
      <Pagination home handlePrev={handlePrev} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  p {
    font-size: 0.875rem;
    text-align: center;
    margin: 0.5rem 0;
  }
`;

const Row = styled.section`
  margin: 2rem 0;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: ${mainTheme.primaryFont};
  font-size: ${mainTheme.header5};
  font-weight: 400;
  padding: 2rem 0;

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

export default Home;