import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

const Toggle = () => {
  const [isToggled, setToggled] = useState(false);
  const fade = useSpring({
    opacity: isToggled ? 1 : 0
  });

  const colorChange = useSpring({
    color: isToggled ? "black" : "purple"
  });

  const fontChange = useSpring({
    fontSize: isToggled ? "30px" : "10px"
  });

  const transformChange = useSpring({
    transform: isToggled ? "translate3d(100px,0,0)" : "translate3d(-100px,0,0)"
  });

  return (
    <div className="card">
      <animated.h1 style={fade}>Opacity</animated.h1>
      <animated.h1 style={colorChange}>FontColor</animated.h1>
      <animated.h1 style={fontChange}>FontSize</animated.h1>
      <animated.h1 style={transformChange}>Transform</animated.h1>
      <button onClick={() => setToggled(!isToggled)}>switch</button>
    </div>
  );
};

export default Toggle;
