export default class GameStore {
  static loadSettings = function() {

    const DEFAULT_SETTINGS = {
      gameMode: true,
      timeLimit: 30,
      cardSet: 5,
    };

    return JSON.parse(localStorage.getItem("gameSettings")) || DEFAULT_SETTINGS;
  };

  static saveSettings = function(newSettings) {
    console.log(newSettings);

    localStorage.setItem("gameSettings", JSON.stringify(newSettings));
  };

  static loadStats = function() {
    return JSON.parse(localStorage.getItem("gameStats")) || [];
  };

  static pushStats = function(roundStat) {
    const MAX_STATS_COUNT = 20;
    let stats = this.loadStats().slice(0,MAX_STATS_COUNT-1);
    stats.unshift(roundStat);
    localStorage.setItem("gameStats", JSON.stringify(stats));
  };

  static clearStats = function() {
    localStorage.removeItem("gameStats");
  };
}
