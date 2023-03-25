import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "No Q-drivng",
          "No Toll",
          "No Parking Fee",
          "Built for Urbaners",
          "Ride in Style",
          "Built to last"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
