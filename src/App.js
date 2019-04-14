import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import SplashContainer from 'containers/SplashContainer';
import StatisticsContainer from 'containers/StatisticsContainer';


import Test from 'routes/Test';

import Settings from 'routes/Settings';
import Menu from 'routes/Menu';
import Game from 'routes/Game';
import Rules from 'routes/Rules';
import RoundEnd from 'routes/RoundEnd';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Route path="/" exact component={SplashContainer} />
        <Route path="/Statistics" component={StatisticsContainer} />

        {/* TODO: convert to Container-Layout */}

        <Route path="/Game" component={Game} />
        <Route path="/Menu" component={Menu} />
        <Route path="/Rules" component={Rules} />
        <Route path="/Settings" component={Settings} />
        <Route path="/RoundEnd" component={RoundEnd} />

        <Route path="/Test" component={Test} />
      </div>
    );
  }
}

export default App;
