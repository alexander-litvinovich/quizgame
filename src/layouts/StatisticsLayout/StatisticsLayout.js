import React, { Component } from "react";
import Header from "components/Header";
import Indicator from "components/Indicator";
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

    let efficiency;

    if(lastRound) {
      efficiency = `${lastRound.right / (lastRound.time / 60)} hits/min`;
    }

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
            <div className="lastRoundWidget">
              <h2>Last Round</h2>
              {console.log(lastRound)}
              <div className="lastRoundWidget-topLine">
                <Indicator title="hits" value={lastRound.right} />
                <div className="lastRoundWidget-for">for</div>
                <Indicator title="time" value={secToTimeString(lastRound.time)} />
                <Indicator title="buzz" value={lastRound.wrong} />
                <Indicator title="skipped" value={lastRound.skipped} />
              </div>
              <div className="lastRoundWidget-bottomLine">
                <Indicator title="efficiency" value={`${roundEfficiency(lastRound)} hits/min`} />
              </div>
            </div>
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
                <RoundButton
                  onClick={clearStats}
                  title="Clear game statistics"
                  color="red"
                  small
                >
                  <Icon name="Cross" />
                </RoundButton>
              </>
            )}
          </>
        )}
      </div>
    );
  }
}

export default StatisticsLayout;
