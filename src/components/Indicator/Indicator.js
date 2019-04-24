import React from 'react';
import './Indicator.css';

const Indicator = ({title, value, onClick = ()=>{}, highlighter=null, children}) => (
    <div className="Indicator" onClick={onClick}>
        <label className="Indicator-Label">
            {highlighter} {title}
        </label>
        <div className="Indicator-Value">
            {children || value}
        </div>
    </div>
);

export default Indicator;
