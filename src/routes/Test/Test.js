import React, { Component } from "react";
import "./Test.css";
import Card from "components/Card";
import RoundButton from "components/RoundButton";
import ModalWindow from "components/ModalWindow";
import ProgressBar from "components/ProgressBar";
import Indicator from "components/Indicator";
import Button from "components/Button";

class Test extends Component {
  state = {
    isOpened: false
  };

  openModal = isOpened => () => {
    this.setState({ isOpened: isOpened });
  };

  doNothing = event => {
    console.log("I do nothing");
    event.stopPropagation();
  };

  render() {
    return (
      <div className="game">
        <ModalWindow
          title="Pause"
          text="I am just text inside of modal window"
          color="magenta"
          isOpened={this.state.isOpened}
          onClose={this.openModal(false)}
        >
          <Button title="Restart" color="blue" size="small" onClick={this.doNothing} />
          <Button title="Leave game" color="red" size="small" onClick={this.doNothing} />
          <Button title="Settings" color="black" size="small" onClick={this.doNothing} />
          <Button
            title="Resume"
            color="green"
            size="small"
            onClick={this.openModal(false)}
          />
        </ModalWindow>

        <Button
          title="I am handlebar!"
          color="black"
          onClick={this.openModal(true)}
        />

        <div className="HeaderMenu">
          <ProgressBar min="0" max="180" value="170" />
          <button className="HeaderMenu_showMenu" title="to Main Menu">
            <svg
              width="28"
              height="24"
              viewBox="0 0 28 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26 2H2"
                stroke="currentColor"
                stroke-width="4"
                stroke-linecap="round"
              />
              <path
                d="M26 12H2"
                stroke="currentColor"
                stroke-width="4"
                stroke-linecap="round"
              />
              <path
                d="M26 22H2"
                stroke="currentColor"
                stroke-width="4"
                stroke-linecap="round"
              />
            </svg>
          </button>
          <button className="HeaderMenu_reset" title="Reset round">
            <svg
              width="34"
              height="35"
              viewBox="0 0 34 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.9995 12.7153L24.0711 10.7868C20.1658 6.88155 13.8342 6.88155 9.92893 10.7868C6.02369 14.692 6.02369 21.0237 9.92893 24.9289C13.8342 28.8342 20.1658 28.8342 24.0711 24.9289C24.8973 24.1027 25.5487 23.1679 26.0253 22.1704"
                stroke="currentColor"
                stroke-width="4"
                stroke-linecap="round"
              />
              <path
                d="M21.9497 14.3223L27.6066 14.3223L27.6066 8.66547"
                stroke="currentColor"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
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
            tabooWords={["meta", "amor", "transformation"]}
          />
        </div>
      </div>
    );
  }
}

export default Test;
