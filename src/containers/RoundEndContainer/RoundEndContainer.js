import React, { Component } from "react";
import GameStore from "utils/GameStore.js";

import RoundEndLayout from "layouts/RoundEndLayout";

class RoundEndContainer extends Component {
  constructor(props) {
    super(props);
    const rounds = GameStore.loadStats();
    const lastRound = rounds.pop();
    this.state = {
      rounds: rounds,
      lastRound: lastRound
    };
  }

  setHeader = () => {
    this.header = {
      h1 : "Round!"
    }
  }

  clearStats = () => {
    GameStore.clearStats();
    this.setState({ rounds: [] });
  };

  render() {
    const { lastRound, rounds } = this.state;
    return (
      <RoundEndLayout
        roundEnd={this.props.roundEnd}
        header={this.header}
        lastRound={lastRound}
        rounds={rounds}
        clearStats={{onClick:this.clearStats}}
        returnToMenu={{link:"/Menu"}}
        nextRoundButton={{link:"/Game"}}
        goToStats={{link:"/Statistics"}}
      />
    );
  }
}

export default RoundEndContainer;
