import React from "react";
import Top from "./top";
import Bottom from "./bottom";
const About = props => {
  return (
    <div className="tab-pane active" id="about">
      <Top event={props.event} />
      <Bottom event={props.event} />
    </div>
  );
};

export default About;
