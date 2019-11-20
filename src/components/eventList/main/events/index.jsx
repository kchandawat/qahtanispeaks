import React from "react";
import Featured from "./featured";
import List from "./list";

const Events = props => {
  function removeByIndex(array, index) {
    return array.filter(function(elem, _index) {
      return index != _index;
    });
  }

  const index = event => {
    let i = 0;
    if (event.length === 1) return 0;
    for (i; i < event.length; i++) {
      if (event[i]["value"]["lastDate"] < Date.now() && i - 1 >= 0)
        return i - 1;
    }
    return 0;
  };
  const { event } = props;
  console.log(event, "yes");

  const ind = index(event);
  const eve = removeByIndex(event, ind);
  if (event)
    return (
      <div className="event-bottom pri-pad">
        <div className="container">
          <Featured mainEvent={event[ind]["value"]} />

          <div className="row">
            <div className="col-md-12 col-sm-12">
              <ul className="event-list">
                {eve.map((event, index) => (
                  <List
                    image={event["value"]["image"]}
                    title={event["value"]["name"]}
                    date={new Date(event["value"]["lastDate"])}
                    location={event["value"]["Location"]}
                    index={event["value"]["key"]}
                    key={index}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  else return <div></div>;
};

export default Events;
