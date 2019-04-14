import React, { Component } from "react";
import GameStore from "utils/GameStore";

import StatisticsLayout from "layouts/StatisticsLayout";

class StatisticsContainer extends Component {
  constructor(props) {
    super(props);
    const rounds = GameStore.loadStats();
    const lastRound = rounds.pop();
    this.state = {
      rounds: rounds,
      lastRound: lastRound
    };
  }

  clearStats = () => {
    GameStore.clearStats();
    this.setState({ rounds: [] });
  };

  render() {
    const { lastRound, rounds } = this.state;
    return (
      <StatisticsLayout
        lastRound={lastRound}
        rounds={rounds}
        clearStats={this.clearStats}
      />
    );
  }
}

export default StatisticsContainer;
