import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GameStore from './../../utils/GameStore';
import './RoundEnd.css';

class RoundEnd extends Component{
    stats = [];
    state = {};

    constructor(props){
        super(props);
        this.stats = GameStore.loadStats();
        ({right: this.state.right, skipped: this.state.skipped, time: this.state.time, timeLimit: this.state.timeLimit, timeTrial: this.state.timeTrial} = this.stats[this.stats.length-1] || {});
    }


    clearStats(){
        this.stats = [];
        GameStore.clearStats();
        this.setState(this.state);
    }

    render(){
        let {right, skipped, time, timeLimit, timeTrial} = this.state;
        return(
            <div className="RoundEnd">
                <h1>Well done!</h1>
                <div>You called {right} cards for {time} seconds.</div>
                <div>previous rounds:</div>
                
                <div><Link to="/Game"><button>New round</button></Link></div>
                
                {this.stats.length > 0 && (
                    <React.Fragment>
                        <h3>Statistics:</h3>
                        <ul>
                            {
                                this.stats.reverse().map((round, i)=>{
                                    let timeStamp = new Date(round.timeStamp);
                                    return <li key={i}>
                                        <span class="timeStamp">{timeStamp.toLocaleDateString("en-US")}</span>
                                        <span className="gameType">
                                            {round.timeTrial?'Time Trial':'Set of cards'}
                                        </span>
                                        <span className="time">
                                            {round.time}
                                        </span>
                                        <span className="score">
                                            ({round.right} / {round.skipped})
                                        </span>
                                    </li>
                                })
                            }
                        </ul>
                        <button className="clearStats" onClick={this.clearStats.bind(this)}>Clear statistics</button>
                    </React.Fragment>
                )}
            </div>
        );
    }
}

export default RoundEnd;