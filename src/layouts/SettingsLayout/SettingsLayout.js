import React from "react";
import "./SettingsLayout.css";

import Header from "components/Header";
import Icon from "components/Icon";
import RoundButton from "components/RoundButton";
import Radio from "components/Radio";
import Checkbox from "components/Checkbox";
import NumberInput from "components/NumberInput";

let checkboxTest = true;


const SettingsLayout = ({
  gameModeOptions,
  timeLimitOptions,

  dictionariesList,

  gameMode,
  timeLimit,
  cardSet,

  onTest,
  checkboxTest,

  changeGameMode,
  changeTimeLimit,
  changeCardSet,

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

      <label>Game mode:</label>
      <Radio
        options={gameModeOptions}
        value={gameMode}
        onWhenChange={changeGameMode}
        color="red"
      />

      {gameMode ? (
        <>
          <label>Time limit:</label>
          <Radio
            options={timeLimitOptions}
            value={timeLimit}
            onWhenChange={changeTimeLimit}
            color="red"
          />
        </>
      ) : (
        <>
          {/* TODO: Fix up cardSet handler  */}
          <label>Card set:</label>
          <NumberInput
            color="red"
            min="3"
            max="10"
            value={cardSet}
            onWhenChange={changeCardSet}
          />
        </>
      )}

      <Checkbox
        label="Urban Dictionary"
        onWhenChange={onTest}
        value={123}
        checked={checkboxTest}
      />
    </div>
  );
};

export default SettingsLayout;
