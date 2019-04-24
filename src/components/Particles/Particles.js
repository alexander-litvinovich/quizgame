import React from "react";
import "./Particles.css";

const iterate = new Array(18).fill(null);

const Particles = () => (
  <div class="Particles">
    {iterate.map((_,index) => (
      <div key={`b${index}`} class="Particles-box">
        <div key={`p${index}`} class="Particles-part" />
      </div>
    ))}
  </div>
);

export default Particles;
