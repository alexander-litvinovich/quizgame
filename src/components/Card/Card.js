import React, { Component } from 'react'
import './Card.css';

export class Card extends Component {
    state = {question:"Some question", description:"Some description"};

    constructor(props) {
      super(props)
    
      this.state = {
        question: props.question || "none",
        description: props.description || "none",
      }
    }
    

  render() {
    const {question, description} = this.state;
    return (
      <div class="Card">
        <h2>{question}</h2>
        <p>{description}</p>
        <div>
            <button name="negative">👎</button>
            <button name="positive">👍</button>
        </div>
      </div>
    )
  }
}

export default Card
