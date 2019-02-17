import React, { Component } from 'react';
import './Test.css';
import Card from "components/Card"; 
import RoundButton from "components/RoundButton";

const MenuNavItem = (props) => {
    let {title, subTitle="", link} = props;
    return (
    <a href={link} className="menuNav_item">
        <div className="menuNav_item_title">
            {title}
            {subTitle.length>0
            ? (<div className="menuNav_item_subTitle">{subTitle}</div>)
            : ""
            }            
        </div>
    </a>
)};

const Indicator = (props) => {
    let {title, value} = props;
    return (
        <div className="Indicator">
            <label className="Indicator_Label">
                {title}
            </label>
            <div className="Indicator_Value">
                {props.children || value}
            </div>
        </div>
    );
}

const ProgressBar = (props) => {
    let {min, max, value} = props;
    let style = {width: `${100*value/(max-min)}%`};
    return(
        <div className="ProgressBar">
            <div className="ProgressBar_fill" style={style}></div>
        </div>
    );
}

class Test extends Component{

    render(){
    /*    return(
            <div>
                <div className="mainMenu">
                    <div className="appName">
                        <Indicator title="game for english learners">
                            <h1>Explain me that!</h1>
                        </Indicator>
                    </div>
                    <nav className="menuNav">
                        <MenuNavItem title="Start" subTitle="Time Attack, 3 min" link="#" />
                        <MenuNavItem title="Free play" link="#" />
                        <MenuNavItem title="Statistics" subTitle="Time Attack: 3 cards for 5 minutes" link="#" />
                        <MenuNavItem title="Settings" link="#" />
                        <MenuNavItem title="Rules" link="#" />
                    </nav>
                </div>
            </div>
        );*/
        return(
            <div className="game">
                <div className="HeaderMenu">
                    <ProgressBar min="0" max="180" value="30" />
                    <button className="HeaderMenu_showMenu" title="to Main Menu">
                        <svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M26 2H2" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
                            <path d="M26 12H2" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
                            <path d="M26 22H2" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
                        </svg>
                    </button>
                    <button className="HeaderMenu_reset" title="Reset round">
                        <svg width="34" height="35" viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25.9995 12.7153L24.0711 10.7868C20.1658 6.88155 13.8342 6.88155 9.92893 10.7868C6.02369 14.692 6.02369 21.0237 9.92893 24.9289C13.8342 28.8342 20.1658 28.8342 24.0711 24.9289C24.8973 24.1027 25.5487 23.1679 26.0253 22.1704" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
                            <path d="M21.9497 14.3223L27.6066 14.3223L27.6066 8.66547" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                    <div className="indicators">
                        <Indicator title="skipped">13</Indicator>
                        <Indicator title="wrong">2</Indicator>
                        <Indicator title="right">8</Indicator>
                    </div>
                </div>
                <div className="cardsPack">
                    <Card
                      key={1} 
                      word="Metamorphose" 
                      image=""
                      category="Popular science"
                    //  right={this.answer(true)} 
                     // wrong={this.answer(false)} 
                    //  skip={this.skip} 
                      tabooWords={["meta", "amor", "transformation"]}
                    />
                    
                </div>
            </div>
        );
    }
}

export default Test;