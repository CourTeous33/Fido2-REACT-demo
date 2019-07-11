import React from 'react';
import { Route, Switch } from 'react-router-dom';
import WelcomePage from '../components/WelcomePage'

const Home = () => {

  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component = {WelcomePage}/>
      </Switch>
    </React.Fragment>
  );
};

export default Home;
