import React from "react";
import "./MenuLayout.css";
import Indicator from "components/Indicator";
import Button from "components/Button";

const MenuLayout = ({ game, freePlay, statistics, settings, rules }) => {
  return (
    <div className="MenuLayout">
      <header className="MenuLayout-appName">
        <Indicator title="game for english learners">
          <h1>Explain me that!</h1>
        </Indicator>
      </header>
      <nav className="MenuLayout-menuNav">
        <Button title="Start" color="blue" {...game} />
        <Button title="Free play" color="green" {...freePlay} />
        <Button title="Statistics" color="magenta" {...statistics} />
        <Button title="Settings" color="red" {...settings} />
        <Button title="Rules" color="black" {...rules} />
      </nav>
    </div>
  );
};

export default MenuLayout;
