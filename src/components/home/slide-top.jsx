import React, { Component } from "react";
import { Spin, Icon } from "antd";
import { message } from "antd";
import md5 from "js-md5";
import firebase from "../../firebase";
const databaseRef = firebase.database().ref();

const subscriberRef = databaseRef.child("subscribers");

const antIcon = (
  <Icon
    type="loading"
    style={{
      fontSize: 96
    }}
    spin
  />
);

class SlideTop extends Component {
  state = {
    name: "",
    email: "",
    disabled: false,
    submitButton: "GET INSTANT ACCESS"
  };
  onUpdate = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    const hash = md5(this.state.email.toLowerCase());
    const payload = { name: this.state.name, email: this.state.email };
    this.setState({ submitButton: "Subscribing...", disabled: true });
    subscriberRef.child(hash).set(payload, error => {
      if (error) {
        this.setState({ submitButton: "Try Again", disabled: false });
      } else {
        this.setState({ disabled: true });
        this.setState({
          name: "",
          email: "",
          submitButton: "Subscribed"
        });
        message.success(
          "Thankyou for Subscribing to Qahtani Speaks, we will keep you updated.",
          7
        );
        setTimeout(function() {
          window.open("https://www.youtube.com/watch?v=g7sobK0GF3M&t=1s");
        }, 2200);
      }
    });
  };
  render() {
    const { home } = this.props;

    if (home) {
      return (
        <div className="banner main-banner">
          <div
            className="fixed-banner home1 overlay"
            style={{
              background:
                "url(" + home ? home["slider"] : "" + ") no-repeat top center"
            }}
          >
            <div className="banner-content">
              <div className="container">
                <div className="row">
                  <div className="col-md-8 col-sm-8 col-xs-12">
                    <div className="content-wrap">
                      <div className="inner">
                        <h1>Make More Time for What Matters Most!</h1>
                        <h5 className="sec-color mb-45">
                          <em>
                            Watch my guide & discover how to Make it a Reality.
                          </em>
                        </h5>

                        <p className="p-0">Make it a Reality - Guide!</p>

                        <form className="form-inline" onSubmit={this.onSubmit}>
                          <div className="form-group">
                            <input
                              type="text"
                              placeholder="Full Name"
                              value={this.state.name}
                              name="name"
                              onChange={this.onUpdate}
                              required
                              disabled={this.state.disabled}
                            />
                          </div>

                          <div className="form-group">
                            <input
                              type="Email"
                              value={this.state.email}
                              name="email"
                              placeholder="Email Address"
                              onChange={this.onUpdate}
                              disabled={this.state.disabled}
                              required
                            />
                          </div>

                          <div className="form-group">
                            <input
                              type="submit"
                              className=" text-uppercase"
                              value={this.state.submitButton}
                              disabled={this.state.disabled}
                            />
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <Spin
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",

              padding: "200px 0px",
              width: "40%"
            }}
            indicator={antIcon}
          />
        </div>
      );
    }
  }
}

export default SlideTop;
