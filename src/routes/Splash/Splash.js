import React, { Component } from 'react';
import './Splash.css';

class Splash extends Component{

    navToMenu = () => {
        this.props.history.push('/Menu');
    }

    render(){
        setTimeout(this.navToMenu, 1000);
       
        return( 
            <div className="splash" onClick={this.navToMenu}>
                <div className="decoration">
                        <div className="rect1">
                            <div className="rect2">
                                <div className="rect3">
                                    <div className="rect4"></div>
                                </div>
                            </div>
                        </div>
                </div>
                
                <div className="App_title">
                    <h2 className="App_title_word">Explain me&nbsp;that!</h2>
                    <label className="App_title_description">game for english learners</label>
                </div>   
            </div>
        );
    }
}

export default Splash;