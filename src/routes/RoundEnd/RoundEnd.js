import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GameStore from './../../utils/GameStore';
import './RoundEnd.css';

class RoundEnd extends Component{
    stats = [];

    constructor(props){
        super(props);
        this.stats = GameStore.loadStats();
    }

    state = {
                right: 1,
                timeLimit: 1
    }

    render(){
        let {right, skipped, time, timeLimit, timeTrial} = this.stats[this.stats.length-1]||[];
        return(
            <div className="RoundEnd">
                <h1>Well done!</h1>
                <div>You called {right} cards for {time} seconds.</div>
                <div>previous rounds:</div>
                
                <div><Link to="/Game"><button>New round</button></Link></div>
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
                <button className="clearStats" onClick={GameStore.clearStats}>Clear statistics</button>
            </div>
        );
    }
}

export default RoundEnd;