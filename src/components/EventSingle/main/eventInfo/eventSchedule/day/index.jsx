import React from "react";

const Day = props => {
  if (props.timestamp != 0)
    return (
      <li>
        <span className="date blue-bg text-white">
          {"Day " + (props.day + 1)}
        </span>
        <ul>
          <li>
            <span className="thumb faa-parent animated-hover">
              <i className="fa fa-circle faa-burst" />
            </span>

            <div className="box">
              <span className="sec-color">
                {new Date(props.start).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit"
                })}{" "}
                -{" "}
                {new Date(props.end).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit"
                })}
              </span>
              <h6 className="mb-20">{props.title}</h6>
              <div className="content-wrap mb-0">
                <p>{props.body}</p>
              </div>
            </div>
          </li>
        </ul>
      </li>
    );
  else return <div></div>;
};

export default Day;
