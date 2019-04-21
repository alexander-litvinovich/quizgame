import React from "react";
import "./SettingsLayout.css";

import Header from "components/Header";
import Icon from "components/Icon";
import RoundButton from "components/RoundButton";
import Radio from "components/Radio";
import Checkbox from "components/Checkbox";
import NumberInput from "components/NumberInput";

//let checkboxTest = true;

const SettingsLayout = ({
  gameModeOptions,
  timeLimitOptions,

  isDictListLoaded,

  settings,
  dicts,

  onChangeSettings,
  onSelectDicts,

  dictionariesList,

  returnToMenu
}) => {
  return (
    <div className="SettingsLayout">
      <Header
        leftButton={
          <RoundButton title="Back to menu" small ghost {...returnToMenu}>
            <Icon name="Back" />
          </RoundButton>
        }
      >
        <h1>Settings</h1>
      </Header>

      <div className="SettingsLayout-block">
        <label className="SettingsLayout-label">game mode:</label>
        <Radio
          options={gameModeOptions}
          value={settings.gameMode}
          onWhenChange={onChangeSettings("gameMode")}
          color="red"
        />
      </div>

      <div className="SettingsLayout-block">
        {settings.gameMode ? (
          <>
            <label className="SettingsLayout-label">time limit:</label>
            <Radio
              options={timeLimitOptions}
              value={settings.timeLimit}
              onWhenChange={onChangeSettings("timeLimit")}
              color="red"
            />
          </>
        ) : (
          <>
            <label className="SettingsLayout-label">card set:</label>
            <NumberInput
              color="red"
              min={3}
              max={10}
              value={settings.cardSet}
              onWhenChange={onChangeSettings("cardSet")}

              //onWhenChange={alert}
            />
          </>
        )}
      </div>

      <div className="SettingsLayout-block">
        <label className="SettingsLayout-label">vocabluaries:</label>
        {isDictListLoaded ? (
          <div className="DictsSelector">
            {Object.keys(dictionariesList).map(dict => (
              <div className="DictsSelector-dict">
                <Checkbox
                  label={dictionariesList[dict].title}
                  value={dict}
                  onWhenChange={onSelectDicts(dict)}
                  checked={dicts[dict]}
                />
              </div>
            ))}
          </div>
        ) : (
          <div>Dicts loading</div>
        )}
      </div>

      <div className="SettingsLayout-block">
        <label className="SettingsLayout-tip">Settings are saving automatically</label>
      </div>
    </div>
  );
};

export default SettingsLayout;
