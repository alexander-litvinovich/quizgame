import React, { Component } from "react";
import classNames from "classnames";
import "./Checkbox.css";

class Radio extends Component {
    state = {
        value
    };

    constructor(props){
        super(props);
        
        if(props.value) {
            this.state.value = props.value;
        } else {
            if(props.options[0]) this.state.value = props.options[0].value;
        }
    }


    render() {
        const {onChange, options, name} = this.props;

        return (  
            <div className="Radio">
                {options.map((option) => 
                    <React.Fragment>
                        <label>
                            <div>
                                <input name={name} 
                                    type="checkbox" 
                                    className="_visuallyHidden" 
                                    onChange={onChange} 
                                    value={option.value} 
                                    checked={option.value === this.state.value} 
                                    /> {option.label}
                            </div>
                        </label>    
                    </React.Fragment>)}
            </div>
        );
    }
}
 
export default Radio;