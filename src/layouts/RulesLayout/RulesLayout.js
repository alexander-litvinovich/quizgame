import React from "react";
import "./RulesLayout.css";
import Header from "components/Header";
import Icon from "components/Icon";
import RoundButton from "components/RoundButton";
import Button from "components/Button";

const RulesLayout = ({ returnToMenu }) => {
  return (
    <div className="RulesLayout">
      <Header
        leftButton={
          <RoundButton small ghost {...returnToMenu}>
            <Icon name="Back" />
          </RoundButton>
        }
      >
        <h1>I am the RulesLayout pane</h1>
      </Header>
      <p>This is description of the game and list of RulesLayout.</p>
      <Button title="Ok, it's clear!" color="green" {...returnToMenu} />
    </div>
  );
};

export default RulesLayout;
