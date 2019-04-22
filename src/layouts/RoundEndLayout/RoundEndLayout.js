import React, { Component } from "react";
import Header from "components/Header";
import RoundButton from "components/RoundButton";
import Button from "components/Button";

import LastRoundWidget from "components/LastRoundWidget";
import Icon from "components/Icon";
import "./RoundEndLayout.css";
import StatsTable from "components/StatsTable";

class RoundEndLayout extends Component {
  renderFallback = () => (
    <div className="RoundEndLayout-Fallback">
      <h2>There is nothing to show</h2>
      <div>
        Play couple of games, have fun, then return and we will show you the
        Statistics.
      </div>
    </div>
  );

  render() {
    const {
      roundEnd,
      rounds,
      lastRound,
      nextRoundButton,
      returnToMenu,
      goToStats,
      clearStats
    } = this.props;

    return (
      <div className="RoundEndLayout">
        <Header
          fixed
          leftButton={
            <RoundButton {...returnToMenu} title="Back to menu" small ghost>
              {roundEnd ? <Icon name="Menu" /> : <Icon name="Back" />}
            </RoundButton>
          }
        >
          <h1>{roundEnd ? "Round!" : "Statistics"}</h1>
        </Header>

        {!lastRound ? (
          this.renderFallback()
        ) : (
          <div className="RoundEndLayout-pane">
            <LastRoundWidget
              stats={lastRound}
              style={roundEnd ? "round" : "stats"}
              button={
                roundEnd && (
                  <RoundButton
                    color="blue"
                    title="Next round"
                    {...nextRoundButton}
                  >
                    <Icon name="Restart" />
                  </RoundButton>
                )
              }
            />
            {rounds && (
              <StatsTable
                stats={roundEnd ? rounds.slice(0, 5) : rounds}
                faded={roundEnd}
              />
            )}
            {rounds && !roundEnd && (
              <div className="Statistics-clearButton">
              <RoundButton
                {...clearStats}
                title="Clear game statistics"
                color="red"
                small
                >
                <Icon name="Cross" />
              </RoundButton>
                </div>
            )}
          </div>
        )}
        {rounds && roundEnd && (
          <Button title="Statistics" color="black" {...goToStats} />
        )}
      </div>
    );
  }
}

export default RoundEndLayout;
