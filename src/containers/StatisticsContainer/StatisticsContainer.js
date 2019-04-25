import React, { Component } from "react";
import GameStore from "utils/GameStore.js";

import StatisticsLayout from "layouts/StatisticsLayout";

class StatisticsContainer extends Component {
  constructor(props) {
    super(props);
    let rounds = GameStore.loadStats();
    const lastRound = rounds.shift();
    if (props.roundEnd) rounds = rounds.slice(0, 5);
    this.state = {
      rounds: rounds,
      lastRound: lastRound,
      roundEnd: props.roundEnd
    };
  }

  clearStats = () => {
    GameStore.clearStats();
    this.setState({ rounds: [] });
  };

  render() {
    const { lastRound, rounds, roundEnd } = this.state;
    return (
      <StatisticsLayout
        roundEnd={roundEnd}
        lastRound={lastRound}
        rounds={rounds}
        clearStats={{ onClick: this.clearStats }}
        returnToMenu={{ link: "/Menu" }}
        nextRoundButton={{ link: "/Game" }}
        goToStats={{ link: "/Statistics" }}
      />
    );
  }
}

export default StatisticsContainer;
