import React from "react";
const TitleAndInfo = props => {
  const { event } = props;
  const about = String(event["about"]).split("<p>");
  let shortVideoId = String(event["video"]).split("youtu.be/");
  let longVideoId = String(event["video"]).split("v=");
  longVideoId = String(longVideoId[1]).split("&");
  const videoId = shortVideoId[1] ? shortVideoId[1] : longVideoId[0];

  return (
    <div className="row mb-45">
      <div className="col-md-5 col-sm-6 left-block">
        <div className="vid-wrap">
          <figure className="overlay">
            <img
              src={
                videoId !== "undefined"
                  ? "https://img.youtube.com/vi/" + videoId + "/hqdefault.jpg"
                  : "../assets/images/hqdefault.jpg"
              }
              alt=""
            />
          </figure>
          <a
            href={event["video"]}
            className="bla-1 play-btn dafoe"
            disabled={videoId !== "undefined" ? false : true}
          >
            <span>
              <i className="fa fa-play" />
            </span>
          </a>
        </div>
      </div>

      <div className="col-md-6 col-sm-6 right-block">
        <h3>{event["name"]}</h3>
        <p>{about[0]}</p>
      </div>
    </div>
  );
};

export default TitleAndInfo;
