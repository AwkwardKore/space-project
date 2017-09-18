import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Team from './Team';
import Interviews from './Interviews';
import Reactions from './Reactions';

class Main extends Component {
  render() {
    return(
      <main>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/team" component={Team}/>
          <Route path="/interviews" component={Interviews}/>
          <Route path="/reactions" component={Reactions}/>
        </Switch>
      </main>
    );
  }
}

export default Main;
