import React, { Component } from "react";
import GameStore from "utils/GameStore";

import StatisticsLayout from "layouts/StatisticsLayout";

class StatisticsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  clearStats = () => {
    this.stats = [];
    GameStore.clearStats();
    this.setState(this.state);
  };

  render() {
    return <StatisticsLayout clearStats={this.clearStats} />;
  }
}

export default StatisticsContainer;
