import React from "react";
import Top from "./top";
import EventSchedule from "./eventSchedule";
const EventInfo = props => {
  return (
    <div className="tab-pane pri-pad" id="event-info">
      <div className="container">
        <Top event={props.event} />
        <EventSchedule event={props.event} />
      </div>
    </div>
  );
};

export default EventInfo;
