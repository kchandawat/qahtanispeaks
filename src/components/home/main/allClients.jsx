import React from "react";
import { Link } from "react-router-dom";

const AllClients = () => {
  return (
    <div className="featured-sale ">
      <div className="container">
        <div className="row">
          <div className="col-md-7 col-sm-7 left text-center">
            <div className="title-wrap text-center mb-35">
              <h2 className="text-uppercase">
                A young boy born with a severe stuttering problem
              </h2>
              <h5>to becoming the world Champion</h5>
            </div>

            <div className="content-wrap text-center mb-45">
              <p>
                Before Mohammed Qahtani became a media sensation for empowering
                people and sharing knowledge across the globe, he had his share
                of obstacles to overcome. He was recognized by The king of Saudi
                Arabia as one of the top Speakers in the world.Mohammed Qahtani
                has been feautured in many top corporate firms as a keynote
                speaker and has conducted several workshops for the fortune 500.
              </p>
            </div>
          </div>

          <div className="col-md-5 col-sm-5 right">
            <figure>
              <img src="assets/images/clients.png" alt="" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllClients;
