import React from "react";
import MenuLayout from "layouts/MenuLayout";
import GameStore from "utils/GameStore.js";

const MenuContainer = () => {
  const settings = GameStore.loadSettings();

  const timeLimitLabels = {
    30: "Half of minute",
    60: "1 minute",
    180: "3 minutes",
    300: "5 minutes",
  };

  let gameSubTitle = `${settings.gameMode?"Time Attack":"Card Set"}, ${settings.gameMode?timeLimitLabels[settings.timeLimit]:settings.cardSet+" cards"}`;
  let statsSubTitle = "Time Attack: 3 cards for 5 minutes";

  return (
    <MenuLayout
      game={{ link: "/Game", subTitle: gameSubTitle }}
      freePlay={{ link: "/Game/Free" }}
      statistics={{ link: "/Statistics", subTitle: statsSubTitle }}
      settings={{ link: "/Settings" }}
      rules={{ link: "/Rules" }}
    />
  );
};

export default MenuContainer;
