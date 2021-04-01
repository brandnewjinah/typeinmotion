import React from "react";

//import libraries
import styled from "styled-components";

//import components
import Grid from "../components/Grid";
import Card from "../components/Cards/Card";

//import css animation
import P001 from "../cssanimation/p001";

//import lottie
import P001Lottie from "../lottie/p001";

const Home = () => {
  return (
    <Wrapper>
      <Grid>
        <Card>
          <P001 />
          <p>css</p>
        </Card>
        <Card>
          <P001Lottie />
          <p>lottie</p>
        </Card>
      </Grid>
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

export default Home;
