import React, { Component } from 'react'
import './Card.css';

export class Card extends Component {
    state = {question:"Some question", description:"Some description", image: "./logo.svg"};

    constructor(props) {
      super(props)
    
      this.state = {
        question: props.question || "none",
        description: props.description || "none",
        image: props.image || "./logo.svg",
      }
    }
    

  render() {
    const {question, description, image} = this.state;
    return (
      <div class="Card">
        <h2>{question}</h2>
        {
          image ? < img src = {
            image
          }
          />:('')
        }
        <p>{description}</p>
        <div>
            <button name="negative"><span role="img" aria-label="negative">👎</span></button>
            <button name="positive"><span role="img" aria-label="positive">👍</span></button>
        </div>
      </div>
    )
  }
}

export default Card
