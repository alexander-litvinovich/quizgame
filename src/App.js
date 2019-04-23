import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import SplashContainer from "containers/SplashContainer";
import MenuContainer from "containers/MenuContainer";
import RoundEndContainer from "containers/RoundEndContainer";
import SettingsContainer from "containers/SettingsContainer";
import RulesContainer from "containers/RulesContainer";
import GameContainer from "containers/GameContainer";

import Test from "routes/Test";

class App extends Component {
  render() {
    return (
      <div className="App">
      <Switch>

        <Route path="/" exact component={SplashContainer} />
        <Route path="/Statistics" component={()=><RoundEndContainer roundEnd={false}/>} />
        <Route path="/RoundEnd" component={()=><RoundEndContainer roundEnd={true}/>} />
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
        <Route path="/Test" component={Test} />
      </Switch>
      </div>
    );
  }
}

export default App;
