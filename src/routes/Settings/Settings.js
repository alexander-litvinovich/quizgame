import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Settings.css';

class Settings extends Component{

    state = {};

    constructor(props){
        super(props);

        let settings = this.loadSettings();
        console.log(settings)
        this.state = {
            /* Settings */
            timeTrial: settings.timeTrial,
            timeLimit: settings.timeLimit || 30,
            cardsQuantity:  settings.cardsQuantity || 3,
        }
    }

    loadSettings = function(){
        return JSON.parse(localStorage.getItem("gameSettings")) || [];
    }

    saveSettings = function(){
        console.log(this.state);
        localStorage.setItem("gameSettings", JSON.stringify(this.state));
    }

    changeNumber = function(event){
        let update = {};
        update[event.target.name] = parseInt(event.target.value);
        this.setState(update, ()=>{this.saveSettings()});
    }

    changeMode = function(event){
        this.setState({timeTrial: (event.target.value==="true"?true:false)}, ()=>{this.saveSettings()});
    }

    render(){
        return( 
            <div className="Settings">
                <h1>Settings</h1>
                <div>
                    <input type="radio" name="timeTrial" id="timeTrialOn" value="true" checked={this.state.timeTrial==true} onChange={this.changeMode.bind(this)} />
                    <label htmlFor="timeTrialOn">Time limited</label>
                </div>
                <div>
                    <input type="radio" name="timeTrial" id="timeTrialOff" value="false" checked={this.state.timeTrial==false} onChange={this.changeMode.bind(this)} />
                    <label htmlFor="timeTrialOff">Set of cards</label>
                </div>

                <div>Time limit
                    <select name="timeLimit" value={this.state.timeLimit} onChange={this.changeNumber.bind(this)}>
                        <option value={30}>Half of minute</option>
                        <option value={60}>1 minute</option>
                        <option value={60*3}>3 minutes</option>
                        <option value={60*5}>5 minutes</option>
                    </select>
                </div>
                
                <div>Set size
                    <input name="cardsQuantity" type="number" min="3" max="10" value={this.state.cardsQuantity}  onChange={this.changeNumber.bind(this)} />
                </div>

                <div><Link to="/Menu"><button>Back to menu</button></Link></div>
            </div>
        );
    }
}

export default Settings;