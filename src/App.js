import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";

import SplashContainer from "containers/SplashContainer";
import MenuContainer from "containers/MenuContainer";
import StatisticsContainer from "containers/StatisticsContainer";
import SettingsContainer from "containers/SettingsContainer";
import RulesContainer from "containers/RulesContainer";
import GameContainer from "containers/GameContainer";

import Test from "routes/Test";

import RoundEnd from "routes/RoundEnd";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" exact component={SplashContainer} />
        <Route path="/Statistics" component={StatisticsContainer} />
        <Route path="/Menu" component={MenuContainer} />
        <Route path="/Rules" component={RulesContainer} />
        <Route path="/Settings" component={SettingsContainer} />
        <Route path="/Game" exact component={GameContainer} />
        <Route
          path="/Game/Free"
          exact
          component={() => <GameContainer isFreePlay={true} />}
        />

        {/* TODO: convert to Container-Layout */}

        <Route path="/RoundEnd" component={RoundEnd} />

        <Route path="/Test" component={Test} />
      </div>
    );
  }
}

export default App;
