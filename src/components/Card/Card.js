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
          <h2>{word}</h2>
          <div className="tabooWords">
          <span>you shouldn't say:</span>
            {tabooWords.map((tabooWord, i)=>{return <div key={i}>{tabooWord}</div>})}
          </div>
          {
            image 
            ? < img alt="" src = {image}/>
            : ('')
          }
          <p>{category}</p>
          <div>
              <button name="wrong" onClick={this.props.wrong}><span role="img" aria-label="wrong">👎</span></button>
              <button name="right" onClick={this.onClickRight}><span role="img" aria-label="right">👍</span></button>
              <button name="skip" onClick={this.onClickSkip}><span role="img" aria-label="skip">👉</span></button>
          </div>
        </div>
      </Swipeable>
    )
  }
}

export default Card
