import React from "react";
import Card from "./card";
const SuccessStories = () => {
  return (
    <div className="tab-pane" id="sucess-stories">
      <div className="testimonial prise-full pri-pad pb-0">
        <div className="container">
          <div className="row">
            <ul className="prise-list text-center">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
