import React from "react";
const Top = props => {
  const { event } = props;
  const schedule = event.schedule;
  const cards = schedule.cards;
  const price = event.price;
  console.log(price);
  return (
    <div className="row pri-pad-b">
      <div className="col-md-4 col-sm-4 left-block">
        <div className="title-wrap mb-25">
          <h4>Registratin Details</h4>
        </div>

        <div className="content-wrap">
          {Object.keys(cards).map((key, index) => {
            const date = new Date(cards[key]["timestamp"]);
            if (cards[key]["timestamp"] != 0)
              return (
                <p key={key}>
                  <strong>{date.toDateString()}</strong>
                  <span>
                    {new Date(cards[key]["start"]).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit"
                    }) +
                      " - " +
                      new Date(cards[key]["end"]).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit"
                      })}
                  </span>
                </p>
              );
            else return <div key={key}></div>;
          })}
          <p>
            <strong>
              Early Bird Price : {price["currency"] + "" + price["earlyBird"]}
            </strong>
            <br />
            <strong>
              Actual Price : {price["currency"] + "" + price["actual"]}
            </strong>
            <br />
            <strong>
              Event Day Price : {price["currency"] + "" + price["late"]}
            </strong>
          </p>
        </div>

        <div className="note">
          <p>
            <small>
              <em>
                <strong>Note:</strong> {schedule["note"]}
              </em>
            </small>
          </p>
        </div>
      </div>

      <div className="col-md-8 col-sm-8 right-block">
        <div className="map-wrap  overlay">
          <img src={event["image"]} style={{ border: 0, maxHeight: "450px" }} />
        </div>
      </div>
    </div>
  );
};

export default Top;
