import React, { Component } from 'react';
import GameStore from "utils/GameStore.js";

import SettingsLayout from "layouts/SettingsLayout";

class SettingsContainer extends Component {
  gameModeOptions = [
    {
      title: "Time attack",
      value: true
    },
    {
      title: "Cards set",
      value: false
    }
  ];

  timeLimitOptions = [
    {
      title: "Half of minute",
      value: 30
    },
    {
      title: "1 minute",
      value: 60
    },
    {
      title: "3 minutes",
      value: 60 * 3
    },
    {
      title: "5 minutes",
      value: 60 * 5
    }
  ];

  dictionariesList = [
    {
      title: "Urban dictionary",
      value: true,
      url: "test",
    }
  ]

  constructor(props) {
    super(props);
    this.state = GameStore.loadSettings();
  }

  changeGameMode = gameMode => () => {
    this.setState({ gameMode: gameMode }, () => {
      GameStore.saveSettings(this.state);
    });
  };

  changeTimeLimit = timeLimit => () => {
    this.setState({ timeLimit: timeLimit }, () => {
      GameStore.saveSettings(this.state);
    });
  }

  changeCardSet = cardSet => {
    this.setState({ cardSet: cardSet }, () => {
      GameStore.saveSettings(this.state);
    });
  }

  onTest = event => {
    console.log(event.target.checked);
    this.setState({checkboxTest: event.target.checked})
  };

  render() {
    const { gameMode, timeLimit, cardSet } = this.state;

    return (
      <SettingsLayout
        gameModeOptions={this.gameModeOptions}
        timeLimitOptions={this.timeLimitOptions}

        dictionariesList={this.dictionariesList}

        onTest = {this.onTest}

        gameMode={gameMode}
        timeLimit={timeLimit}
        cardSet={cardSet}
        checkboxTest={this.state.checkboxTest}

        changeGameMode={this.changeGameMode}
        changeTimeLimit={this.changeTimeLimit}
        changeCardSet={this.changeCardSet}

        returnToMenu={{ link: "/Menu" }}
      />
    );
  }
}

export default SettingsContainer;
