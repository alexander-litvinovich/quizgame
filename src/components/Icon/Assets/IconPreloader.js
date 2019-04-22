import React from "react";

const IconPreloader = () => (
  <svg
    width="30"
    height="30"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 30 30"
    preserveAspectRatio="xMidYMid"
    class="lds-rolling"
  >
    <circle
      cx="15"
      cy="15"
      fill="none"
      ng-attr-stroke="{{config.color}}"
      ng-attr-stroke-width="{{config.width}}"
      ng-attr-r="{{config.radius}}"
      ng-attr-stroke-dasharray="{{config.dasharray}}"
      stroke="#ffffff"
      stroke-width="4"
      r="12"
      stroke-dasharray="30 15"
      stroke-linecap="round"
      transform="rotate(215 15 15)"
    >
      <animateTransform
        attributeName="transform"
        type="rotate"
        calcMode="linear"
        values="0 15 15;360 15 15"
        keyTimes="0;1"
        dur="1s"
        begin="0s"
        repeatCount="indefinite"
      />
    </circle>
  </svg>
);

export default IconPreloader;
