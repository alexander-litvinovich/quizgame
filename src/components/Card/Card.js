import React, { Component } from 'react';
import Swipeable from 'react-swipy';
import './Card.css';

export class Card extends Component {
  onClickRight  = ()=>{
    this.forceSwipeRight();
    this.props.right();
  }
  onClickSkip = ()=>{
    this.forceSwipeLeft();
    this.props.skip();
  }

  swipeHandler = (...rest)=>{

    console.log(rest);
  }

  afterSwipeHandler = (...rest)=>{

    console.log(rest);
  }

  forceSwipeLeft;
  forceSwipeRight;


  render() {
    const {word, tabooWords, category, image} = this.props;
    return (
      <Swipeable
        onSwipe={this.swipeHandler}
        onAfterSwipe={this.afterSwipeHandler}
        buttons={({left, right}) => {
          this.forceSwipeLeft = left;
          this.forceSwipeRight = right;
        }}
      >
        <div className="Card">
          <div className="Card_inner">
            <div className="Card_number">1 of 10</div>

            <div className="Card_title">
              <label className="Card_title_category">{category}</label>
              <h2 className="Card_title_word">{word}</h2>
            </div>

            <div className="Cards_tabooWords">
              <label className="Cards_tabooWords_title">taboo words:</label>
              {tabooWords.map((tabooWord, i)=>
              <div
                className="Cards_tabooWords_word"
                key={i}
              >
                {tabooWord}
              </div>)}
            </div>
            {//TODO: think about images. May be in next version implement it.
              image
              ? < img alt="" src = {image}/>
              : ('')
            }
          </div>
        </div>
      </Swipeable>
    )
  }
}

export default Card
