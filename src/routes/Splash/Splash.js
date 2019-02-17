import React, { Component } from 'react';
import './Splash.css';

class Splash extends Component{

    render(){
        // setTimeout(()=>{
        //     this.props.history.push('/Menu');
        // }, 1000);

        return( 
            <div className="splash">
                <div className="decoration">
                        <div className="rect1">
                            <div className="rect2">
                                <div className="rect3">
                                    <div className="rect4"></div>
                                </div>
                            </div>
                        </div>
                </div>
                
                <h1>Explain Me That!</h1>
                <span>game for english learners</span>
                
                  
            </div>
        );
    }
}

export default Splash;