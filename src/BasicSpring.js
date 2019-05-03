import React from "react";
import { useSpring, animated } from "react-spring";
import "./basic-spring.css";

export default () => {
  const fade = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 }
  });

  return (
    <animated.div style={fade}>
      <div className="card">
        <h1>Welcome to this page</h1>
        <h3>this is a description</h3>
        <div>
          Photo booth activated charcoal fanny pack, jianbing meditation
          skateboard celiac DIY pug sustainable affogato iPhone quinoa.
          Scenester offal single-origin coffee direct trade vice. Cred offal
          bespoke next level photo booth. Shaman air plant edison bulb, poke
          stumptown kale chips meggings mixtape gastropub heirloom beard paleo
          blog. Semiotics organic distillery jianbing freegan, paleo trust fund
          celiac shoreditch bitters tofu irony kickstarter listicle.
        </div>
      </div>
    </animated.div>
  );
};
