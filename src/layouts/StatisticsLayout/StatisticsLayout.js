import React, { Component } from "react";
import Header from "components/Header";
import Indicator from "components/Indicator";

const StatisticsLayoutTableLine = ({
  timeTrial,
  right,
  wrong,
  time,
  skipped,
  efficiency
}) => (
  <tr>
    <id>{timeTrial ? "Time attack" : "Card set"}</id>
    <id>{`${right} hits / ${time} min`}</id>
    <id>{wrong}</id>
    <id>{skipped}</id>
    <id>{efficiency}</id>
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
    const { rounds, lastRound, clearStats } = this.props;
    let efficiency = `${lastRound.right / (lastRound.time / 60)} hits/min`;
    return (
      <div className="StatisticsLayout">
        <Header leftButton={<button>back</button>}>
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
                <Indicator title="time" value={lastRound.time} />
                <Indicator title="buzz" value={lastRound.wrong} />
                <Indicator title="skipped" value={lastRound.skipped} />
              </div>
              <div className="lastRoundWidget-bottomLine">
                <Indicator title="efficiency" value={efficiency} />
              </div>
            </div>
            {rounds && (
              <>
                <table>
                  {rounds.map(
                    ({
                      timeTrial,
                      right,
                      wrong,
                      time,
                      skipped,
                      timeStamp,
                      efficiency
                    }) => (
                      <StatisticsLayoutTableLine
                        key={timeStamp}
                        timeTrial={timeTrial}
                        right={right}
                        wrong={wrong}
                        time={time}
                        skipped={skipped}
                        efficiency={efficiency}
                      />
                    )
                  )}
                </table>
                <button onClick={clearStats}>clearStats</button>
              </>
            )}
          </>
        )}
      </div>
    );
  }
}

export default StatisticsLayout;
