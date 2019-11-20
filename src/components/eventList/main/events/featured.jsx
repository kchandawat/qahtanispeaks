import React from "react";
import { Link } from "react-router-dom";

const Featured = props => {
  const { mainEvent } = props;
  const validURL = str => {
    var pattern = new RegExp(
      "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // fragment locator
    return !!pattern.test(str);
  };

  const date = new Date(mainEvent["lastDate"]);
  console.log(date.toISOString());
  return (
    <div className="row featured-event pri-pad-b">
      <div className="col-md-7 col-sm-7 left-block">
        <figure>
          <Link to={"/event/" + mainEvent["key"]}>
            <img src={mainEvent["image"]} alt="" />
          </Link>
        </figure>
      </div>

      <div className="col-md-5 col-sm-5 text-center right">
        <small>
          {date.toDateString()} | {mainEvent["Location"]}
        </small>
        <h5 className="border-title mb-45">
          <Link to={"/event/" + mainEvent["key"]}>{mainEvent["name"]}</Link>
        </h5>

        <div
          className="count-down-wrap mb-25"
          data-end-date={
            date.getFullYear() +
            "/" +
            (date.getMonth() + 1) +
            "/" +
            date.getDate()
          }
        />
        {console.log(mainEvent["lastDate"], "date")}

        <div className="content-wrap text-left">
          <p>{mainEvent["about"].split("<p>")[0]}</p>
        </div>
        {validURL(mainEvent["registrationLink"]) && (
          <a
            href={mainEvent["registrationLink"]}
            disabled={Date.now() >= mainEvent["lastDate"]}
            className="btn sec-bg text-uppercase"
          >
            secure my seat
          </a>
        )}
      </div>
    </div>
  );
};

export default Featured;
