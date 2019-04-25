import React from "react";
import SplashLayout from "layouts/SplashLayout";
import { withRouter } from "react-router-dom";

const SplashContainer = withRouter(({ history }) => {
  const navToMenu = () => {
    history.push("/Menu");
  };

  setTimeout(navToMenu, 1000);

  return <SplashLayout onClick={navToMenu} />;
});

export default SplashContainer;
