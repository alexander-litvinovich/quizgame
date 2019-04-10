import React from 'react';
import './Indicator.css';

const Indicator = ({title, value, onClick = ()=>{}, children}) => (
    <div className="Indicator" onClick={onClick}>
        <label className="Indicator-Label">
            {title}
        </label>
        <div className="Indicator-Value">
            {children || value}
        </div>
    </div>
);

export default Indicator;