import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Settings.css';
import GameStore from 'utils/GameStore';

class Settings extends Component{

    state = {};

    constructor(props){
        super(props);

        let settings = GameStore.loadSettings();
        console.log(settings)
        this.state = {
            /* Settings */
            timeTrial: settings.timeTrial,
            timeLimit: settings.timeLimit || 30,
            cardsQuantity:  settings.cardsQuantity || 3,
        }
    }

    changeNumber = (event)=>{
        let update = {};
        update[event.target.name] = parseInt(event.target.value);
        this.setState(update, ()=>{GameStore.saveSettings(this.state)});
    }

    changeMode = (event)=>{
        this.setState({
            timeTrial: (event.target.value==="true"?true:false)
        }, ()=>{GameStore.saveSettings(this.state)});
    }

    render(){
        return( 
            <div className="Settings">
                <h1>Settings</h1>
                <div>
                    <input type="radio" name="timeTrial" id="timeTrialOn" value="true" checked={this.state.timeTrial===true} onChange={this.changeMode} />
                    <label htmlFor="timeTrialOn">Time limited</label>
                </div>
                <div>
                    <input type="radio" name="timeTrial" id="timeTrialOff" value="false" checked={this.state.timeTrial===false} onChange={this.changeMode} />
                    <label htmlFor="timeTrialOff">Set of cards</label>
                </div>

                <div>Time limit
                    <select name="timeLimit" value={this.state.timeLimit} onChange={this.changeNumber}>
                        <option value={30}>Half of minute</option>
                        <option value={60}>1 minute</option>
                        <option value={60*3}>3 minutes</option>
                        <option value={60*5}>5 minutes</option>
                    </select>
                </div>
                
                <div>Set size
                    <input name="cardsQuantity" type="number" min="3" max="10" value={this.state.cardsQuantity}  onChange={this.changeNumber} />
                </div>

                <div><Link to="/Menu"><button>Back to menu</button></Link></div>
            </div>
        );
    }
}

export default Settings;