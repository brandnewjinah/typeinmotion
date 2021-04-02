import React from "react";

//import libraries
import styled from "styled-components";
import moment from "moment";

//import components
import Grid from "../components/Grid";
import Card from "../components/Cards/Card";
import { mainTheme } from "../components/Tokens";

//import css animation
import P001 from "../cssanimation/p001";
import P002 from "../cssanimation/p002";

//import lottie
import P001Lottie from "../lottie/p001";
import P002Lottie from "../lottie/p002";

const Home = () => {
  let startDate = moment("2021-04-01");
  let currenDate = moment();
  let today = currenDate.diff(startDate, "days") + 1;

  return (
    <Wrapper>
      <Row>
        <Grid>
          <Title>
            <span className="day">Day</span>
            <span className="num">02</span>
          </Title>
          <Card>
            <P002 />
            <p>css</p>
          </Card>
          <Card>
            <P002Lottie />
            <p>lottie</p>
          </Card>
        </Grid>
      </Row>
      <Row>
        <Grid>
          <Title>
            <span className="day">Day</span>
            <span className="num">01</span>
          </Title>
          <Card>
            <P001 />
            <p>css</p>
          </Card>
          <Card>
            <P001Lottie />
            <p>lottie</p>
          </Card>
        </Grid>
      </Row>
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
