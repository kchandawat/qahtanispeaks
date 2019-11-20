import React from "react";
import Counter from "./counter";
import QAndA from "./qAndA";
const Bottom = props => {
  return (
    <div>
      <Counter event={props.event} />
      <QAndA event={props.event} />
    </div>
  );
};

export default Bottom;
