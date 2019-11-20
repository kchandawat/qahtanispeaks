import React from "react";
import Interested from "../../interested";
const Body = props => {
  const { event } = props;
  let body = String(event["about"]).split("<p>");
  body.shift();
  return (
    <div>
      <div className="row">
        <div className="col-md-12 col-sm-12">
          {body.map((body, index) => (
            <p key={index}>{body}</p>
          ))}
        </div>
      </div>
      <br />
      <br />
      <Interested id={event["key"]} />
    </div>
  );
};

export default Body;
