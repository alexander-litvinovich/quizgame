import React, { Component } from 'react';
import './Rules.css';

class Rules extends Component{
    render(){
        return( 
            <div className="rules">
                <h1>I am the Rules pane</h1>
                <p>This is description of the game and list of rules.</p>
            </div>
        );
    }
}

export default Rules;