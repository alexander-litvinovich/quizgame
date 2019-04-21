import React, { Component } from "react";
import classNames from "classnames";
import "./NumberInput.css";

import RoundButton from "components/RoundButton";
//import Icon from "components/Icon";

class NumberInput extends Component {
  input = React.createRef();

  constructor(props) {
    super(props);
    this.state = { value: props.value };
  }

  inputNormalizer = input => {
    const { min, max } = this.props;
    let result = +input
      .toString()
      .split("")
      .filter(char => /[0-9]/.test(char))
      .join("");

    return result < min ? min : result > max ? max : result;
  };

  onButtonChange = inc => () => {
    const { onWhenChange } = this.props;

    let value = this.inputNormalizer(+this.input.current.value + inc);

    this.setState({ value: value }, () => {
      onWhenChange(value)();
    });
  };

  onKeyDown = event => {
    const { onWhenChange } = this.props;
    let inc = 0;

    if (event.key === "ArrowUp") inc = 1;
    if (event.key === "ArrowDown") inc = -1;

    if (inc !== 0) {
      let value = this.inputNormalizer(+this.input.current.value + inc);

      this.setState({ value: value }, () => {
        onWhenChange(value)();
      });
    }
  };

  onInput = event => {
    const { onWhenChange } = this.props;
    let value = this.inputNormalizer(event.target.value);

    this.setState({ value: value }, () => {
      onWhenChange(value)();
    });
  };

  render() {
    const { small, color } = this.props;
    const { value } = this.state;

    const classes = classNames("NumberInput", {
      "NumberInput--small": small,
      "NumberInput--colorBlue": color === "blue",
      "NumberInput--colorGreen": color === "green",
      "NumberInput--colorRed": color === "red",
      "NumberInput--colorMagenta": color === "magenta",
      "NumberInput--colorBlack": color === "black"
    });

    return (
      <>
        <div className={classes}>
          <div className="NumberInput-minus">
            <RoundButton small ghost onClick={this.onButtonChange(-1)}>
              -
            </RoundButton>
          </div>
          <div className="NumberInput-plus">
            <RoundButton small ghost onClick={this.onButtonChange(1)}>
              +
            </RoundButton>
          </div>
          <div className="NumberInput-input">
            <input
              type="text"
              ref={this.input}
              value={value}
              onInput={this.onInput}
              onKeyDown={this.onKeyDown}
            />
          </div>
        </div>
      </>
    );
  }
}

export default NumberInput;
