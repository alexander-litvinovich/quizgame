import React, { Component } from 'react';
import './Game.css';
import outerData from './../../datamock.json';
import Card from './../../components/Card/Card';

class Game extends Component{
    
    
    cards = outerData.words;
    
    state = {
      questionQuantity: 3,
      questionIndex: -1,
      gameOver: false,
      timeTrial: true,
      right: 0,
      skipped: 0,
      time: 0,
      timeLimit: 30,
    }
    
    initialState = {};
    
    cardsQueue = [];
    
    constructor(props){
      super(props);
      this.initialState = {...this.state};
      this.right = this.right.bind(this);
      this.skip = this.skip.bind(this);
      this.resetCards = this.resetCards.bind(this);
    }
    
    componentDidMount(){
      this.resetCards();
    }
    
    
    resetCards = function(){
      this.cards.sort(() => Math.random() - 0.5);
      this.cardsQueue = this.cards.splice(0, this.state.questionQuantity);
      console.log(this.cardsQueue);
      this.setState(this.initialState);
    }
    
    right = function(cardId){
      this.cardsQueue.splice(cardId,1);
      this.setState({right: this.state.right+1});
      console.log(this.state);
    };
    
    skip = function(cardId){
      this.cardsQueue.splice(cardId,1);
      this.setState({skipped: this.state.skipped+1});
      console.log(this.state);
    };
    
    render() {
      
      return (      
          <div className="game">
              <div className="timer"> </div>
    
              {this.cardsQueue.map((card, i)=>{
              let {word, image, category, tabooWords} = card;
              return <Card key={i} word={word} image={image} category={category} right={this.right} skip={this.skip} tabooWords={tabooWords}></Card>
              })}
    
              <div>
                  <button onClick={this.startTimer}>Start Game</button>
                  <button onClick={this.resetCards}>Reset</button>
              </div>
          </div> 
      );
    }
}

export default Game;