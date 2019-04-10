import React from "react";
import classNames from "classnames";
import "./ModalWindow.css";

const ModalWindow = ({
  children,
  title,
  text,
  color,
  onOpen = () => {},
  onClose = () => {},
  isOpened
}) => {
  const classes = classNames("ModalWindow-Header", {
    "ModalWindow-Header--colorBlue": color === "blue",
    "ModalWindow-Header--colorGreen": color === "green",
    "ModalWindow-Header--colorRed": color === "red",
    "ModalWindow-Header--colorMagenta": color === "magenta",
    "ModalWindow-Header--colorBlack": color === "black"
  });

  return (
    <React.Fragment>
      <div
        className={classNames("ModalWindow", { opened: isOpened })}
        onClick={onClose}
      >
        <div className="ModalWindow-Content">
          {title ? (
            <div class={classes}>
              <h2>{title}</h2>
              {text ? <p className="ModalWindow-Text">{text}</p> : null}
            </div>
          ) : null}
          {children}
        </div>
      </div>
      <div
        className={classNames("ModalOverlay", {
          opened: isOpened
        })}
      />
    </React.Fragment>
  );
};

export default ModalWindow;
