import React, { Component } from 'react';
import './RoundEnd.css';

class RoundEnd extends Component{
    render(){
        return( 
            <div className="RoundEnd">
                <h1>Well done!</h1>
                <div>You called {5} cards for {3} minutes.</div>
                <div>previous rounds:</div>

                <button>New round</button>
            </div>
        );
    }
}

export default RoundEnd;