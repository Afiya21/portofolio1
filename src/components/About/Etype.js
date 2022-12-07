import React from "react";
import Typewriter from "typewriter-effect";

function EType() {
  return (
    <Typewriter
      options={{
        strings: [
          "BSC in Computer science from Unity Universty",
          "BSC in software engineering from AlX Hollberton",
          "MIS in Business LeaderShip(pending)",
        ],
        autoStart: true,
        loop: true,
      
      }}
    />
  );
}

export default EType;