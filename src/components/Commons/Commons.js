import React from 'react';
import './Commons.css';


const Indicator = (props) => {
    let {title, value} = props;
    console.log('indicator');
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

export {Indicator, ProgressBar};
