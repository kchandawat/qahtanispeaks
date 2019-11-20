import React from "react";
const QAndA = props => {
  const { event } = props;
  const question = event.questions;

  return (
    <div className="more-info pri-pad-b">
      <div className="container">
        <div className="row" />
        {Object.keys(question).map(key => {
          return (
            <div className="col-md-4 col-sm-4" key={key}>
              <h6 className="mb-15">{question[key]["q"]}</h6>

              <div className="content-wrap mb-0">
                <p>{question[key]["a"]}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QAndA;
