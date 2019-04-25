import React, { Component } from "react";
import GameStore from "utils/GameStore.js";
import Dictionary from "utils/Dictionary";

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

  async componentDidMount() {
    const dictList = await Dictionary.list();
    if (this.dictFallback()) {
      let fallback = {};
      Object.keys(dictList).forEach(element => {
        fallback[element] = true;
      });

      this.setState({ dicts: fallback }, () => {
        GameStore.saveDicts(fallback);
      });
    }

    this.setState({ isDictListLoaded: true, dictionariesList: dictList });
  }

  constructor(props) {
    super(props);
    this.state = {
      settings: { ...GameStore.loadSettings() },
      dicts: { ...GameStore.loadDicts() }
    };
  }

  onChangeSettings = set => value => () => {
    console.log("SET UPD!");

    const { settings } = this.state;
    settings[set] = value;

    console.log("SET UPD: ", settings);

    this.setState({ settings: settings }, () => {
      GameStore.saveSettings(settings);
    });
  };

  onSelectDicts = set => event => {
    console.log(event.target.checked);

    let { dicts } = this.state;
    dicts[set] = event.target.checked;

    this.setState({ dicts: dicts }, () => {
      GameStore.saveDicts(dicts);
    });
  };

  dictFallback = () => {
    let { dicts } = this.state;

    return !Object.keys(dicts).reduce((prev, cur) => prev || dicts[cur], false);
  };

  killCache = async () => {
    GameStore.unsetSettings();
    let dictList;
    try {
      dictList = await Dictionary.list(true);
    } catch (error) {
      return console.error("Error on fetching dictionaries list", error);
    }

    try {
      await Object.keys(dictList).forEach(element => {
        Dictionary.get(element, true);
      });
    } catch (error) {
      return console.error("Error on fetching dictionaries", error);
    }
  };


  render() {
    const { settings, dicts, dictionariesList, isDictListLoaded } = this.state;

    return (
      <SettingsLayout
        gameModeOptions={this.gameModeOptions}
        timeLimitOptions={this.timeLimitOptions}
        settings={settings}
        dicts={dicts}
        dictionariesList={dictionariesList}
        onChangeSettings={this.onChangeSettings}
        onSelectDicts={this.onSelectDicts}
        isDictListLoaded={isDictListLoaded}
        dictFallback={this.dictFallback}
        returnToMenu={{ link: "/Menu" }}
        killCache={{ onClick: this.killCache }}
      />
    );
  }
}

export default SettingsContainer;
