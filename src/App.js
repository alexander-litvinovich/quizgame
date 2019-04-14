import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';


import Test from 'routes/Test';

import Splash from 'routes/Splash';
import Settings from 'routes/Settings';
import Menu from 'routes/Menu';
import Game from 'routes/Game';
import Rules from 'routes/Rules';
import RoundEnd from 'routes/RoundEnd';


import StatisticsContainer from 'containers/StatisticsContainer';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Route path="/" exact component={Splash} />
        <Route path="/Test" component={Test} />
        <Route path="/Game" component={Game} />
        <Route path="/Menu" component={Menu} />
        <Route path="/Rules" component={Rules} />
        <Route path="/Settings" component={Settings} />
        <Route path="/RoundEnd" component={RoundEnd} />
        <Route path="/Statistics" component={StatisticsContainer} />
      </div>
    );
  }
}

export default App;
