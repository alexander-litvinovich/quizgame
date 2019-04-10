import React from "react";
import "./ProgressBar.css";

const ProgressBar = ({min, max, value}) => {

    let style = {width: `${100*value/(max-min)}%`};
    
    return(
        <div className="ProgressBar">
            <div className="ProgressBar-fill" style={style}></div>
        </div>
    );
}

export default ProgressBar;