import React from "react";
import classNames from "classnames";
import Indicator from "components/Indicator";
import { secToTimeString, roundEfficiency } from "utils/Helpers.js";

import "./LastRoundWidget.css";

const LastRoundWidget = ({ stats, style, button }) => {
  return (
    <div
      className={classNames("LastRoundWidget", {
        "LastRoundWidget--stats": style === "stats",
        "LastRoundWidget--round": style === "round",
        "LastRoundWidget--extraSpaceForButton": button
      })}
    >
      {style === "stats" && <h2>Last Round!</h2>}
      {console.log(stats)}
      <div className="LastRoundWidget-topLine">
        <Indicator title="hits" value={stats.right} />
        <div className="LastRoundWidget-for">for</div>
        <Indicator title="time" value={secToTimeString(stats.time)} />
        <Indicator title="buzz" value={stats.wrong} />
        <Indicator title="skipped" value={stats.skipped} />
      </div>
      <div className="LastRoundWidget-bottomLine">
        <Indicator
          title="efficiency"
          value={`${roundEfficiency(stats)} hits/min`}
        />
      </div>
      {button &&
      <div class="LastRoundWidget-fab">
        {button}
      </div>
      }
    </div>
  );
};
export default LastRoundWidget;
