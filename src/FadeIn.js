import React from "react";
import { useSpring, animated } from "react-spring";
import "./fade-in.css";

/**
 * Fade In:
 * - when mounting, start with opacity = 0 and move to opacity = 1
 * - need to use animated wrapper (like styled component)
 * - you can wrap as many components as you want and they'll get animated together
 */

export default () => {
  const fade = useSpring({ from: { opacity: 0 }, opacity: 1 });

  return (
    <animated.div style={fade} className="card">
      <h1>Welcome to this page</h1>
      <div>
        Photo booth activated charcoal fanny pack, jianbing meditation
        skateboard celiac DIY pug sustainable affogato iPhone quinoa. Scenester
        offal single-origin coffee direct trade vice.
      </div>
    </animated.div>
  );
};
