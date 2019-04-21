import React from "react";
import "./GameLayout.css";
import Card from "components/Card";
import { secToTimeString } from "utils/Helpers.js";

import classNames from "classnames";

import ProgressBar from "components/ProgressBar";
import Indicator from "components/Indicator";
import Icon from "components/Icon";
import Header from "components/Header";
import RoundButton from "components/RoundButton";
import Button from "components/Button";

import ModalWindow from "components/ModalWindow";

const renderHeader = ({ settings, gameState, score, headerAction }) => {
  const timeIndicator = gameState.isFreePlay ? null : settings.gameMode ? (
    <Indicator title="time left" value={secToTimeString(score.timeDisplay)} />
  ) : (
    <Indicator title="time lapsed" value={secToTimeString(score.timeDisplay)} />
  );

  const leftButton = gameState.isFreePlay ? (
    <RoundButton {...headerAction.back} small ghost>
      <Icon name="Back" />
    </RoundButton>
  ) : (
    <RoundButton {...headerAction.menu} small ghost>
      <Icon name="Menu" />
    </RoundButton>
  );

  const rightButton = gameState.isFreePlay ? null : (
    <RoundButton
      {...headerAction.restart}
      disabled={!gameState.isGameStarted}
      small
      ghost
    >
      <Icon name="Restart" />
    </RoundButton>
  );

  console.log("HEADER:", gameState);

  return (
    <>
      <Header leftButton={leftButton} rightButton={rightButton} fixed>
        {timeIndicator}
        <Indicator title="skipped" value={score.skipped} />
        <Indicator title="buzz" value={score.wrong} />
        <Indicator title="hit" value={score.right} />
      </Header>

      {settings.gameMode && (
        <ProgressBar
          min="0"
          max={settings.timeLimit}
          value={score.timeDisplay}
        />
      )}
    </>
  );
};

const renderButtons = ({ onSkip, onAnswer, onStart, gameState }) => {
  return (
    <div className="GameLayout-buttons">
      {gameState.isGameStarted || gameState.isFreePlay ? (
        <>
          <RoundButton color="blue" onClick={onSkip(true)} title="Skip card">
            <Icon name="Skip" />
          </RoundButton>
          <RoundButton
            color="red"
            small
            onClick={onAnswer(false)}
            title="Taboo word spoken"
          >
            <Icon name="Cross" />
          </RoundButton>
          <RoundButton
            color="green"
            onClick={onAnswer(true, true)}
            title="Called right"
          >
            <Icon name="Right" />
          </RoundButton>
        </>
      ) : (
        <>
          <RoundButton
            color="green"
            onClick={onStart(true)}
            title="Start the game"
          >
            <Icon name="Right" />
          </RoundButton>
        </>
      )}
    </div>
  );
};

const renderMenu = ({ gameState, onMenuActions }) => (
  <ModalWindow
    title="Pause"
    color="magenta"
    isOpened={gameState.isMenuOpened}
    {...onMenuActions.overlay}
  >
    {gameState.isGameStarted && (
      <Button
        title="Restart"
        color="blue"
        size="small"
        {...onMenuActions.restart}
      />
    )}
    <Button
      title="Leave game"
      color="red"
      size="small"
      {...onMenuActions.goToMenu}
    />
    <Button
      title="Resume"
      color="green"
      size="small"
      {...onMenuActions.resume}
    />
  </ModalWindow>
);

const renderRestartDialog = ({ gameState, onRestartDialogActions }) => (
  <ModalWindow
    title="Reset game?"
    text="It means that all progress during this round will be lost. So is's up to you!"
    color="black"
    isOpened={gameState.isRestartDialogOpened}
    {...onRestartDialogActions.overlay}
    leftButton={
      <Button
        title="No"
        color="blue"
        size="small"
        {...onRestartDialogActions.resume}
      />
    }
    rightButton={
      <Button
        title="Yes"
        color="red"
        size="small"
        {...onRestartDialogActions.restart}
      />
    }
  />
);

const GameLayout = props => {
  console.log("Game layout: ", props);
  const {
    setForceSwipe,

    onSkip = () => {},
    onAnswer = () => {},
    onStart = () => {},

    settings,
    score,
    gameState,

    cardsQueue,

    isDictLoaded
  } = props;

  const NUMBER_OF_CARDS_TO_SHOW = 4; //4th will be with zero opacity

  return (
    <div
      className={classNames("GameLayout", {
        "is-cardSet": !settings.gameMode,
        "is-freePlay": gameState.isFreePlay
      })}
    >
      {renderHeader(props)}
      <div className="GameLayout-cardWrapper">
            {cardsQueue.length>0 &&
              cardsQueue
                .slice(-NUMBER_OF_CARDS_TO_SHOW)
                .map((card, index, array) => {
                  const {
                    word,
                    image,
                    category,
                    tabooWords,
                    isCardBack,
                    isLoading = false
                  } = card;
                  return (
                    <Card
                      cardIndex={array.length - index} //1-N, 1 - is upper
                      onSwipeLeft={onSkip()}
                      onSwipeRight={onAnswer(true)}
                      onSwipeStart={onStart()}
                      key={word + category}
                      word={word}
                      image={image}
                      category={category}
                      tabooWords={tabooWords}
                      isCardBack={isCardBack}
                      isFreePlay={gameState.isFreePlay}
                      isLoading={isLoading}
                      gameMode={settings.gameMode}
                      cardSet={settings.cardSet}
                      currentCard={score.currentCard}
                      setForceSwipe={setForceSwipe}
                    />
                  );
                })}
      </div>
      {renderButtons(props)}
      {renderMenu(props)}
      {renderRestartDialog(props)}
    </div>
  );
};

export default GameLayout;
