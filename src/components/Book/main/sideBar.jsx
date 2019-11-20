import React, { Component } from "react";
import { message } from "antd";
import md5 from "js-md5";
import firebase from "../../../firebase";
const databaseRef = firebase.database().ref();

const subscriberRef = databaseRef.child("subscribers");

class SideBar extends Component {
  state = {
    name: "",
    email: "",
    disabled: false,
    submitButton: "Subscribe now!"
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
      }
    });
  };
  render() {
    return (
      <div className="col-md-3 col-sm-3 right-block sidebar">
        <div className="subscription widget text-center">
          <h3>
            <span>Subscribe For Getting Access To</span> EXCLUSIVE CONTENT
          </h3>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <input
                type="text"
                placeholder="Your Name"
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
                placeholder="Your Email"
                value={this.state.email}
                name="email"
                onChange={this.onUpdate}
                disabled={this.state.disabled}
                required
              />
            </div>

            <input
              type="submit"
              className="btn"
              value={this.state.submitButton}
              disabled={this.state.disabled}
            />
          </form>
        </div>

        {/* <div className="widget">
        <a href="#" className="image-effect">
          <img
            src={process.env.PUBLIC_URL + "/assets/images/sidebar-banner.jpg"}
            alt=""
          />
        </a>
      </div> */}
      </div>
    );
  }
}

export default SideBar;
