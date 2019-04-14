import React from "react";

import IconRight from "./Assets/IconRight";
import IconWrong from "./Assets/IconWrong";
import IconSkip from "./Assets/IconSkip";
import IconMenu from "./Assets/IconMenu";
import IconRestart from "./Assets/IconRestart";
import IconCross from "./Assets/IconCross";

const Icon = ({ name }) => {
  const icons = {
    Right: IconRight,
    Wrong: IconWrong,
    Skip: IconSkip,
    Menu: IconMenu,
    Restart: IconRestart,
    Cross: IconCross,
  };
  const CustomIcon = typeof name === "string" && icons[name];

  return CustomIcon ? <CustomIcon /> : name;
};

export default Icon;
