import React, { Component } from 'react';
import './Menu.css';
import {Indicator} from "components/Commons";
import Button from "components/Button";


//TODO: Code below is deprecated

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


class Menu extends Component{   
    render(){
        return(
            <div className="mainMenu">
                <div className="appName">
                    <Indicator title="game for english learners">
                        <h1>Explain me that!</h1>
                    </Indicator>
                </div>
                <nav className="menuNav">
                    <Button title="Start" subTitle="Time Attack, 3 min" link="/Game" color="blue"/>
                    <Button title="Free play"  link="/Game/Free" color="green"/>
                    <Button title="Statistics" subTitle="Time Attack: 3 cards for 5 minutes" link="/Statistics" color="magenta"/>
                    <Button title="Settings" link="/Settings" color="red"/>
                    <Button title="Rules" link="/Rules" color="black"/>
{/* 
                    <MenuNavItem title="Start" subTitle="Time Attack, 3 min" link="/Game" />
                    <MenuNavItem title="Free play" link="/Game/Free" />
                    <MenuNavItem title="Statistics" subTitle="Time Attack: 3 cards for 5 minutes" link="#" />
                    <MenuNavItem title="Settings" link="/Settings" />
                    <MenuNavItem title="Rules" link="/Rules" /> */}
                </nav>      
            </div>
        );
    }
}

export default Menu;