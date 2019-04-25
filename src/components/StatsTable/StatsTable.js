import React from "react";
import classNames from "classnames";
import { secToTimeString } from "utils/Helpers.js";
import Icon from "components/Icon";

import "./StatsTable.css";

const SlatsTableLine = ({
  timeTrial,
  right,
  wrong,
  time,
  skipped,
  timeStamp,
  efficiency,
  bestScore = false
}) => {

  return (
    <tr key={timeStamp} className="StatsTable-Line">
      <td>
        {timeTrial ? "Time attack" : "Card set"}
        {bestScore && (
          <span className="StatsTable-bestScore">
            <Icon name="Highlight" />
          </span>
        )}
      </td>
      <td>{`${right} hits / ${secToTimeString(time)}`}</td>
      <td className="number">{wrong}</td>
      <td className="number">{skipped}</td>
      <td className="number">{efficiency}</td>
    </tr>
  );
};

const StatsTable = ({ stats, faded }) => {
  return (
    <div
      className={classNames("StatsTable", {
        "StatsTable--faded": faded === true
      })}
    >
      <table>
        <thead className="StatsTable-Header">
          <tr>
            <th>mode</th>
            <th>result</th>
            <th className="number">
              <div className="canRotateContainer">
                <span className="canRotate">buzz</span>
              </div>
            </th>
            <th className="number">
              <div className="canRotateContainer">
                <span className="canRotate">skipped</span>
              </div>
            </th>
            <th className="number">
              <div className="canRotateContainer">
                <span className="canRotate">efficiency</span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {stats.map(round => (
            <SlatsTableLine {...round} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default StatsTable;
