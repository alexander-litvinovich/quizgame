import React, { Component } from "react";
import Header from "components/Header";
import LastRoundWidget from "components/LastRoundWidget";

import RoundButton from "components/RoundButton";
import Icon from "components/Icon";
import {secToTimeString, roundEfficiency} from "utils/Helpers.js"
import "./StatisticsLayout.css";

const StatisticsLayoutTableLine = ({
  timeTrial,
  right,
  wrong,
  time,
  skipped,
  efficiency
}) => (
  <tr>
    <td>{timeTrial ? "Time attack" : "Card set"}</td>
    <td>{`${right} hits / ${time}`}</td>
    <td>{wrong}</td>
    <td>{skipped}</td>
    <td>{efficiency} hits/min</td>
  </tr>
);

class StatisticsLayout extends Component {
  renderFallback = () => (
    <div className="StatisticsLayout-Fallback">
      <h2>There is nothing to show</h2>
      <div>
        Play couple of games, have fun, then return and we will show you the
        Statistics.
      </div>
    </div>
  );

  render() {
    const { rounds, lastRound, clearStats, returnToMenu } = this.props;

    return (
      <div className="StatisticsLayout">
        <Header
          leftButton={
            <RoundButton {...returnToMenu} title="Back to menu" small ghost>
              <Icon name="Back" />
            </RoundButton>
          }
        >
          <h1>Statistics</h1>
        </Header>
        {!lastRound ? (
          this.renderFallback()
        ) : (
          <>
             <LastRoundWidget stats={lastRound} style="stats" />
            {rounds && (
              <>
                <table>
                <tr>
                  <td>mode</td>
                  <td>result</td>
                  <td>buzz</td>
                  <td>skipped</td>
                  <td>efficiency</td>
                </tr>

                  {rounds.map(
                    ({
                      timeTrial,
                      right,
                      wrong,
                      time,
                      skipped,
                      timeStamp,
                    }) => (
                      <StatisticsLayoutTableLine
                        key={timeStamp}
                        timeTrial={timeTrial}
                        right={right}
                        wrong={wrong}
                        time={secToTimeString(time)}
                        skipped={skipped}
                        efficiency={roundEfficiency({right, time})}
                      />
                    )
                  )}
                </table>

              </>
            )}
          </>
        )}
      </div>
    );
  }
}

export default StatisticsLayout;
