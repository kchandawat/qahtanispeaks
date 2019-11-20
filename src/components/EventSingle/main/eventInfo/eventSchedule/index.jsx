import React from "react";
import Day from "./day";
const EventSchedule = props => {
  const { event } = props;
  const schedule = event.schedule;
  const cards = schedule.cards;
  return (
    <div className="row">
      <div className="col-md-12 col-sm-12">
        <div className="title-wrap mb-35">
          <h4>Event Schedules</h4>
        </div>
        <ul className="event-schedule">
          {Object.keys(cards).map((key, index) => {
            return (
              <Day
                day={index}
                key={key}
                timestamp={cards[key]["timestamp"]}
                start={cards[key]["start"]}
                end={cards[key]["end"]}
                title={cards[key]["title"]}
                body={cards[key]["body"]}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default EventSchedule;
