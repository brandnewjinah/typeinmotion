import React from "react";
import { useHistory } from "react-router-dom";

//import libraries
import styled from "styled-components";
import moment from "moment";

//import components
import Header from "../components/Header";
import Grid from "../components/Grid";
import Card from "../components/Cards/Card";
import { mainTheme } from "../components/Tokens";
import Pagination from "../utility/Pagination";

//import animation components
import { Animations } from "../helper/Animations";

const Home = () => {
  const history = useHistory();
  // let startDate = moment("2021-04-01");
  // let currenDate = moment();
  // let today = currenDate.diff(startDate, "days") + 1;
  let today = 20;

  let num = today.toString().length;
  num = num === 1 ? `0${today}` : `${today}`;

  const CSSAnimation = Animations[`a0${num}`] && Animations[`a0${num}`];
  const LOTTIEAnimation = Animations[`a0${num}Lottie`];

  const handlePrev = () => {
    let prevPage = today - 1;
    history.push(`/${prevPage}`);
  };

  return (
    <Wrapper>
      <Header day={today} />
      <Main>
        <Grid>
          {CSSAnimation && (
            <div className="col">
              <Card group="a" label="Method" method="css">
                <CSSAnimation />
              </Card>
            </div>
          )}
          {LOTTIEAnimation && (
            <div className="col">
              <Card group="b" label="Method" method="lottie">
                <LOTTIEAnimation />
              </Card>
            </div>
          )}
        </Grid>
      </Main>
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

const Main = styled.main`
  padding: 2rem;
`;

export default Home;
