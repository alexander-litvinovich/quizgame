import React, { Component } from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';

class Menu extends Component{   
    render(){
        return( 
            <div className="Menu">
                <h1>the Taboo game</h1>
                <div><Link to="/Game"><button>Start</button></Link></div>
                <div><Link to="/Game/Free"><button>Free play</button></Link></div>
                <div><Link to="/Rules"><button>Rules</button></Link></div>
                <div><Link to="/Settings"><button>Settings</button></Link></div>
            </div>
        );
    }
}

export default Menu;