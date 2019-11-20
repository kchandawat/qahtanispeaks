import React, { Component } from "react";
import Card from "./card";
class Pricing extends Component {
  state = {};
  render() {
    return (
      <div className="tab-pane" id="pricing">
        <div className="pricing-box pri-pad">
          <div className="container">
            <div className="row">
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Pricing;
