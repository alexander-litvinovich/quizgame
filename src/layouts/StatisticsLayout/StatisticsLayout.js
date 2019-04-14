import React, { Component } from "react";
import Header from "components/Header";

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
            </div>
            {rounds && (
              <>
                <ul>{/* print round table  */}</ul>
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
