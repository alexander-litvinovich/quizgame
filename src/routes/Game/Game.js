import React, { Component } from 'react';
import './Game.css';
import outerData from './../../datamock.json';
import Card from './../../components/Card/Card';
import GameStore from './../../utils/GameStore';

class Game extends Component{
    
    
    cards = outerData.words;
    cardsQueue = [];

    state = {};
    initialState = {};    
    
    
    constructor(props){
      super(props);

      let settings = GameStore.loadSettings();
      this.state = {
        /* Settings */
        timeTrial: settings.timeTrial,
        timeLimit: settings.timeLimit || 30,
        cardsQuantity:  settings.cardsQuantity || 3,
        
        /* Game state */
        gameStart: false,
        right: 0,
        wrong: 0,
        skipped: 0,
        time: 0,
        timerID: 0,
      };

      this.initialState = {...this.state};
    }
    
    componentDidMount(){
      this.resetCards();
    }

    startTimer = ()=>{
      
      this.setState({
        timerID: window.setInterval(this.tick, 1000),
        gameStart: true
      },()=>{
        console.log(this.state)
      });
    }

    componentWillUnmount(){
      clearInterval(this.state.timerID);
    }
    
    tick = () => {
      let {time, timeTrial, timeLimit} = this.state;
      
      if(timeTrial && time === timeLimit){
        return this.roundEnd();
      }

      this.setState({time : time+1});
      
    }

    roundEnd = ()=>{
      let roundStat = {
        timeStamp: Date.now(),
        time: this.state.time, 
        timeTrial: this.state.timeTrial, 
        timeLimit: this.state.timeLimit,
        right: this.state.right,
        wrong: this.state.wrong,
        skipped: this.state.skipped,
      };

      GameStore.pushStats(roundStat);
      this.props.history.push('/RoundEnd');
    }

    resetCards = ()=>{
      if(this.state.timeTrial) clearInterval(this.state.timerID);
      this.cards.sort(() => Math.random() - 0.5);
      if(this.state.timeTrial === false) {
        this.cardsQueue = this.cards.splice(0, this.state.cardsQuantity);
      } else {
        this.cardsQueue = this.cards;
      }

      console.log(this.cardsQueue);
      this.setState(this.initialState);
    }
    
    answer = (isRight) => ()=>{
      if(!this.state.gameStart) this.startTimer();
      this.cardsQueue.shift();
      let answerCount = (
        isRight
        ?{right: this.state.right+1}
        :{wrong: this.state.wrong+1}
      );
      this.setState(answerCount,()=>{
        if(this.cardsQueue.length === 0) this.roundEnd();
      });
    }
    
    skip = ()=>{
      if(!this.state.gameStart) this.startTimer();
      let currentCard = this.cardsQueue.shift();
      this.cardsQueue.push(currentCard);
      this.setState({skipped: this.state.skipped+1});
    };
    
    render() {
      return (      
          <div className="game">
              <div className="params">
                timeLimit: {this.state.timeTrial===true?'true':'false'}
              </div>
              <div className="timer">{this.state.time} sec. / {this.state.timeLimit} sec.</div>
    
              {this.cardsQueue.map((card, i)=>{
              let {word, image, category, tabooWords} = card;
              return <Card 
                      key={i} 
                      word={word} 
                      image={image} 
                      category={category} 
                      right={this.answer(true)} 
                      wrong={this.answer(false)} 
                      skip={this.skip} 
                      tabooWords={tabooWords}
                    />
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