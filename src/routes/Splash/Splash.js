import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './Splash.css';

class Splash extends Component{

    render(){
        setTimeout(()=>{
            this.props.history.push('/Menu');
        }, 1000);

        return( 
            <div className="splash">
                <h1>Hi! I am taboo game for English learners</h1>
                  This is a taboo in English. Game for learners.
                  
            </div>
        );
    }
}

export default Splash;