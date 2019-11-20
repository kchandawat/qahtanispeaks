import React from "react";
import Subscribe from "./subscribe";
import Events from "./events";

const Main = props => {
  return (
    <main className="main soft-gray event-page">
      <Subscribe event={props.event} />
      <Events event={props.event} />
    </main>
  );
};

export default Main;
