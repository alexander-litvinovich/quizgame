import React, { Component } from 'react'
import './Card.css';

export class Card extends Component {
  render() {
    const {word, tabooWords, category, image} = this.props;
    return (
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
            <button name="right" onClick={this.props.right}><span role="img" aria-label="right">👍</span></button>
            <button name="skip" onClick={this.props.skip}><span role="img" aria-label="skip">👉</span></button>
        </div>
      </div>
    )
  }
}

export default Card
