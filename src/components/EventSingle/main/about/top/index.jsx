import React from "react";
import TitleAndInfo from "./titleAndInfo";
import Body from "./body";

const Top = props => {
  return (
    <div className="about-top pri-pad">
      <div className="container">
        <TitleAndInfo event={props.event} />
        <Body event={props.event} />
      </div>
    </div>
  );
};

export default Top;
