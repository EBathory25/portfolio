import React from "react";

function Svg_Gradient() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 800"
    preserveAspectRatio="xMidYMid slice"
    className="absolute w-full z-10 h-full">
      <path fill="#FFEB3B" d="M0 0H1600V800H0z"></path>
      <path fill="#fccf3b" d="M1600 160L0 460 0 350 1600 50z"></path>
      <path fill="#f8b23b" d="M1600 260L0 560 0 450 1600 150z"></path>
      <path fill="#f5963c" d="M1600 360L0 660 0 550 1600 250z"></path>
      <path fill="#f1793c" d="M1600 460L0 760 0 650 1600 350z"></path>
      <path fill="#EE5D3C" d="M1600 800L0 800 0 750 1600 450z"></path>
    </svg>
  );
}

export default Svg_Gradient;