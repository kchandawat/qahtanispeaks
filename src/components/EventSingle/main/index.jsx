import React from "react";
import Switch from "./switch";
import About from "./about";
import EventInfo from "./eventInfo";

import Faq from "./faq";

const Main = props => {
  return (
    <main className="main soft-gray event-page">
      <Switch />
      <div className="tab-content">
        <About event={props.event} />
        <EventInfo event={props.event} />
        <Faq event={props.event} />
      </div>
    </main>
  );
};

export default Main;
