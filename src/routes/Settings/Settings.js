import React, { Component } from 'react';
import './Settings.css';

class Settings extends Component{
    render(){
        return( 
            <div className="Settings">
                <h1>Settings</h1>
                <div>[x] Time attack</div>
                <div>Time limit 3 min</div>
                <div>[ ] Set of words</div>
                <div>Set size 10 words</div>
            </div>
        );
    }
}

export default Settings;