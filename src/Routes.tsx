import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//import layout
import Layout from "./components/Layout";

//import pages
import Home from "./pages/Home";
import Daily from "./pages/Daily";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Layout>
          <Route exact path="/" component={Daily} />
        </Layout>
      </Switch>
    </Router>
  );
};

export default Routes;
