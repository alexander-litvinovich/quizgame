import React, { Component } from "react";
import Swipeable from "react-swipy";
import classNames from "classnames";
import "./Card.css";

const SwipeableContainer = (props) => {
  const {cardIndex, children} = props;
  if(cardIndex === 1) return (<Swipeable {...props}/>);
  return (<>{children}</>);
}

export class Card extends Component {
  swipeDirection;

  onClickRight = () => {
    this.forceSwipeRight();
    this.props.right();
  };
  onClickSkip = () => {
    this.forceSwipeLeft();
    this.props.skip();
  };

  onSwipe = direction => {
    this.swipeDirection = direction;
  };

  onAfterSwipe = () => {
    const { isCardBack, onSwipeStart, onSwipeLeft, onSwipeRight } = this.props;

    if (isCardBack) {
      onSwipeStart();
    } else {
      if (this.swipeDirection === "left") onSwipeLeft();
      if (this.swipeDirection === "right") onSwipeRight();
    }
    this.swipeDirection = null;
  };

  render() {
    const {
      currentCard,
      cardSet,
      word,
      tabooWords,
      category,
      setForceSwipe,

      gameMode,
      freePlay,
      cardIndex,
      isCardBack,
      isLoading
    } = this.props;
    return (
      <div
        className={classNames("CardWrapper", `is-layer${cardIndex}`, {
          "is-cardBack": isCardBack,
          "is-loading": isLoading
        })}
      >
        <SwipeableContainer
          isLoading={isLoading}
          cardIndex={cardIndex}
          onSwipe={this.onSwipe}
          onAfterSwipe={this.onAfterSwipe}
          buttons={({ left, right }) => {
            // Dirty hack to drill up forceSwipe func to container
            setForceSwipe(left, false);
            setForceSwipe(right, true);
          }}
        >
          <div className="Card">
            {!isCardBack && (
              <div className="Card_inner">
                {!gameMode && !freePlay && (
                  <div className="Card_number">
                    {currentCard} of {cardSet}
                  </div>
                )}

                <div className="Card_title">
                  <label className="Card_title_category">{category}</label>
                  <h2 className="Card_title_word">{word}</h2>
                </div>

                <div className="Cards_tabooWords">
                  <label className="Cards_tabooWords_title">taboo words:</label>
                  {tabooWords.map((tabooWord, i) => (
                    <div className="Cards_tabooWords_word" key={i}>
                      {tabooWord}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="CardBack">
            <div className="CardBack-inner">
              <div className="CardBack-pattern">
                <h2 className="CardBack-title">Swipe to&nbsp;start!</h2>
                <label className="CardBack-subTitle"> or tap the button below </label>
              </div>
            </div>
          </div>
        </SwipeableContainer>
      </div>
    );
  }
}

export default Card;
