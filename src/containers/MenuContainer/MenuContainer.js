import React from "react";
import MenuLayout from "layouts/MenuLayout";

const MenuContainer = () => {
  let gameSubTitle = "Time Attack, 3 min";
  let statsSubTitle = "Time Attack: 3 cards for 5 minutes";

  return (
    <MenuLayout
      game={{ link: "/Game", subTitle: gameSubTitle }}
      freePlay={{ link: "/Game/FreePlay" }}
      statistics={{ link: "/Statistics", subTitle: statsSubTitle }}
      settings={{ link: "/Settings" }}
      rules={{ link: "/Rules" }}
    />
  );
};

export default MenuContainer;
