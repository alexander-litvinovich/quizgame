import React, { Component } from "react";
import GameLayout from "layouts/GameLayout";
import { withRouter } from "react-router-dom";
import GameStore from "utils/GameStore.js";
import Dictionary from "utils/Dictionary";

const initialState = (isFreePlay = false, keepScore = false) => {
  let init = {
    cardsQueue: [],
    timerID: null
  };

  init.settings = GameStore.loadSettings();
  if (!keepScore) {
    init.score = {
      right: 0,
      wrong: 0,
      skipped: 0,
      time: 0,

      timeDisplay: init.settings.gameMode ? init.settings.timeLimit : 0,
      currentCard: 1
    };
  }
  init.gameState = {
    isGameStarted: false,
    isFreePlay: isFreePlay,
    isPaused: false,
    isMenuOpened: false,
    isRestartDialogOpened: false
  };

  // init.cardsQueue = [
  //   {isCardBack:true, isLoading: true},
  //   {isCardBack:true, isLoading: true},
  //   {isCardBack:true, isLoading: true},
  //   {isCardBack:true, isLoading: true}
  // ];

  return init;
};

class GameContainer extends Component {
  //Will be functions to force swipe at react-swipy
  forceSwipeLeft;
  forceSwipeRight;

  outerData;

  constructor(props) {
    super(props);

    const { isFreePlay } = props;
    this.state = initialState(isFreePlay);

    console.log(this.state);
  }

  componentWillUnmount() {
    const { timerID } = this.state;
    clearInterval(timerID);
  }

  async componentDidMount() {
    this.outerData = await this.loadDicts(GameStore.loadDicts());
    this.resetCards();
  }

  async loadDicts(filter) {
    try {
      const dictList = await Dictionary.list();
      console.log("PLIST: ", dictList);
      try {
        const dicts = await Promise.all(
          Object.keys(dictList).reduce(
            (prev, dictId) => [...prev, Dictionary.get(dictId)],
            []
          )
        );

        console.log("PARRDICTS: ", dicts);

        let dictFallback = !Object.keys(filter).reduce(
          (prev, cur) => prev || filter[cur],
          false
        );

        const result = Object.keys(dictList).reduce(
          (
            prev,
            dictId,
            index
          ) =>
            filter[dictId] || dictFallback
              ? [...prev, ...dicts[index]]
              : [...prev],
          []
        );

        console.log("PDICTS: ", result);

        this.setState({ isDictLoaded: true });
        return result;
      } catch {
        console.error("Error loading dictionaries");
      }
    } catch {
      console.error("Error loading list");
    }
  }

  render() {
    const { settings, score, gameState, cardsQueue, isDictLoaded } = this.state;

    return (
      <GameLayout
        onAnswer={this.onAnswer}
        onSkip={this.onSkip}
        onStart={this.onStart}
        headerAction={{
          menu: {
            onClick: this.onModalWindowOpened(true, "menu")
          },
          restart: {
            onClick: this.onModalWindowOpened(true, "restart")
          },
          back: {
            link: "/Menu"
          }
        }}
        onMenuActions={{
          overlay: {
            onClose: this.onModalWindowOpened(false, "menu")
          },
          restart: {
            onClick: this.onRestart
          },
          goToMenu: {
            link: "/Menu"
          },
          resume: {
            onClick: this.onModalWindowOpened(false, "menu")
          }
        }}
        onRestartDialogActions={{
          overlay: {
            onClose: this.onModalWindowOpened(false, "restart")
          },
          restart: {
            onClick: this.onRestart
          },
          resume: {
            onClick: this.onModalWindowOpened(false, "restart")
          }
        }}
        settings={settings}
        score={score}
        gameState={gameState}
        cardsQueue={cardsQueue}
        setForceSwipe={this.setForceSwipe}
        isDictLoaded={isDictLoaded}
      />
    );
  }

  setForceSwipe = (func, toRight) => {
    if (toRight) this.forceSwipeRight = func;
    else this.forceSwipeLeft = func;
  };

  onRestart = () => {
    const { timerID } = this.state;
    clearInterval(timerID);
    this.resetCards();
  };

  resetCards = (keepScore = false) => {
    const { isFreePlay } = this.props;

    this.setState(initialState(isFreePlay, keepScore), () => {
      const { settings, gameState } = this.state;

      let cards = [...this.outerData];

      cards.sort(() => Math.random() - 0.5);

      if (settings.gameMode === false) {
        cards = cards.splice(0, settings.cardSet);
      }

      if (!gameState.isFreePlay) cards.push({ isCardBack: true });

      this.setState({ cardsQueue: cards });

      console.log("ON RESET: ", this.state);
    });
  };

  tick = () => {
    let { settings, score } = this.state;

    if (settings.gameMode && score.time === settings.timeLimit) this.roundEnd();

    this.setState(state => {
      const { score, settings } = state;
      score.time += 1;
      score.timeDisplay = settings.gameMode
        ? settings.timeLimit - score.time
        : score.time;
      return { score: score };
    });
  };

  roundEnd = () => {
    const { settings, score, timerID } = this.state;

    clearInterval(timerID);

    let roundStat = {
      timeStamp: Date.now(),
      gameMode: settings.gameMode,
      timeLimit: settings.timeLimit,

      time: score.time,
      right: score.right,
      wrong: score.wrong,
      skipped: score.skipped
    };

    GameStore.pushStats(roundStat);

    this.navToRoundEnd(this.props);
  };

  onModalWindowOpened = (opened, kind) => () => {
    const { gameState } = this.state;

    switch (kind) {
      case "menu":
        gameState.isMenuOpened = opened;
        break;

      case "restart":
        gameState.isRestartDialogOpened = opened;
        break;

      default:
        break;
    }

    this.setState({ gameState: gameState }, () => {
      if (gameState.isGameStarted) this.setPause(opened);
    });
  };

  setPause = paused => {
    let { gameState, timerID } = this.state;

    if (paused === true) {
      clearInterval(timerID);
    } else {
      timerID = window.setInterval(this.tick, 1000);
    }

    gameState.isPaused = paused;

    console.log(`PAUSED ${gameState.isPaused}`);

    this.setState({ gameState: gameState, timerID: timerID });
  };

  onStart = (forceSwipe = false) => () => {
    if (forceSwipe) return this.forceSwipeRight();

    const { gameState, cardsQueue } = this.state;

    cardsQueue.pop();
    gameState.isGameStarted = true;

    this.setState({ cardsQueue: cardsQueue, gameState: gameState }, () => {
      if (cardsQueue.length === 0) this.roundEnd();
      this.setPause(false);
    });
  };

  onAnswer = (isRight, forceSwipe = false) => () => {
    if (forceSwipe) return this.forceSwipeRight();

    const { score, gameState, cardsQueue } = this.state;

    cardsQueue.pop();

    if (isRight) {
      score.right += 1;
    } else {
      score.wrong += 1;
    }

    score.currentCard += 1;

    this.setState({ cardsQueue: cardsQueue, score: score }, () => {
      if (cardsQueue.length === 0) {
        if (gameState.isFreePlay) {
          this.resetCards(true);
        } else {
          this.roundEnd();
        }
      }
    });
  };

  onSkip = (forceSwipe = false) => () => {
    if (forceSwipe) return this.forceSwipeLeft();

    const { cardsQueue, score } = this.state;

    if (cardsQueue.length > 1) {
      cardsQueue.unshift(cardsQueue.pop());
      score.skipped += 1;

      this.setState({ cardsQueue: cardsQueue, score: score }, () => {
        if (cardsQueue.length === 0) this.roundEnd();
      });
    }
  };

  navToRoundEnd = ({ history }) => history.push("/RoundEnd");
}

export default withRouter(GameContainer);
