export default class GameStore{

    static loadSettings = function(){
        return JSON.parse(localStorage.getItem("gameSettings")) || [];
    }

    static saveSettings = function(newSettings){
        localStorage.setItem("gameSettings", JSON.stringify(newSettings));
    }

    static loadStats = function(){
        return JSON.parse(localStorage.getItem("gameStats")) || [];
    }

    static pushStats = function(roundStat){
        let stats = this.loadStats();
        stats.push(roundStat);
        localStorage.setItem("gameStats", JSON.stringify(stats));
    }

    static clearStats = function(){
        localStorage.removeItem("gameStats");
    }
};