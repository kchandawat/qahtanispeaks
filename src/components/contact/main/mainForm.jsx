import React, { Component } from "react";

import { ReCaptcha } from "react-recaptcha-v3";
import firebase from "../../../firebase";
import { message } from "antd";
const databaseRef = firebase.database().ref();
const contactRef = databaseRef.child("contact");

class MainForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FirstName: "",
      LastName: "",
      Email: "",
      Subject: "",
      Message: "",
      SubmitButton: "Send Message",
      disabled: false,
      verified: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  verifyCallback = recaptchaToken => {
    if (recaptchaToken) {
      this.setState({ verified: true });
    }
    console.log(recaptchaToken, "<= your recaptcha token");
  };

  handleSubmit(event) {
    event.preventDefault();
    let button = event.target;
    const templateId = "template_mXvpSkgT";

    const payload = {
      FirstName: this.state.FirstName,
      LastName: this.state.LastName,
      Email: this.state.Email,
      Subject: this.state.Subject,
      Message: this.state.Message,
      Type: 1
    };
    if (this.state.verified) {
      this.setState({ disabled: true, SubmitButton: "Sending" });
      button.value = "sending";

      contactRef.push(payload, error => {
        if (error) {
          console.log("Error has occured during saving process");
          this.setState({ disabled: false, SubmitButton: "Send Message" });
          button.value = "send message";
        } else {
          message.success(
            "Thankyou for Contacting me, I will get back to you shortly.",
            7
          );

          this.sendFeedback(templateId, {
            ...payload
          });
          this.setState({
            FirstName: "",
            LastName: "",
            Email: "",
            Subject: "",
            Message: ""
          });
          this.setState({ disabled: false, SubmitButton: "Send Message" });
          button.value = "send message";
        }
      });
    } else message.warn("please verify that you're a human", 6);
  }
  sendFeedback(templateId, variables) {
    window.emailjs
      .send("gmail", templateId, variables)
      .then(res => {
        console.log("Email successfully sent!");
      })
      // Handle errors here however you like, or use a React error boundary
      .catch(err =>
        console.error(
          "Oh well, you failed. Here some thoughts on the error that occured:",
          err
        )
      );
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="col-md-9 col-sm-9 left-block">
        <div className="box-wrap">
          <div className="contact-info">
            <table>
              <tbody>
                <tr>
                  <td>
                    <span className="icon rounded-crcl blue-bg text-white faa-parent animated-hover ">
                      <i className="pe-7s-map-marker faa-pulse" />
                    </span>
                    P.O.Box 10867 Dhahran 31311 Saudi Arabia
                  </td>

                  <td>
                    <span className="icon rounded-crcl sec-bg text-white faa-parent animated-hover">
                      <i className="pe-7s-mail faa-pulse" />
                    </span>
                    Mohammed.alqahtani.42@gmail.com
                    <br />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="or">
            <span>OR</span>
          </div>

          <p>Please fill up the form below to get in touch with me:</p>

          <div className="form-wrap">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group one-half pull-left">
                <label>
                  First Name <span>*</span>
                </label>
                <input
                  type="text"
                  name="FirstName"
                  placeholder="First Name"
                  required
                  value={this.state.FirstName}
                  onChange={this.handleInputChange}
                />
              </div>

              <div className="form-group one-half pull-right">
                <label>
                  Last Name <span />
                </label>
                <input
                  type="text"
                  placeholder="Last Name"
                  name="LastName"
                  value={this.state.LastName}
                  onChange={this.handleInputChange}
                />
              </div>

              <div className="form-group one-half pull-left">
                <label>
                  Email <span>*</span>
                </label>
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  name="Email"
                  value={this.state.Email}
                  onChange={this.handleInputChange}
                />
              </div>

              <div className="form-group one-half pull-right">
                <label>
                  Subject <span>*</span>
                </label>
                <input
                  type="text"
                  placeholder="Subject"
                  required
                  minLength="4"
                  name="Subject"
                  value={this.state.Subject}
                  onChange={this.handleInputChange}
                />
              </div>

              <div className="form-group full pull-left">
                <label>
                  Message <span>*</span>
                </label>
                <textarea
                  placeholder="Message"
                  required
                  minLength="64"
                  name="Message"
                  value={this.state.Message}
                  onChange={this.handleInputChange}
                />
              </div>

              <ReCaptcha
                sitekey="6Le9H7oUAAAAAJSaneca-1VV_jL9tNo1C8b7iSet"
                action="test"
                verifyCallback={this.verifyCallback}
              ></ReCaptcha>

              <input
                type="submit"
                value={this.state.SubmitButton}
                disabled={this.state.disabled}
              />
            </form>

            <div className="clearfix" />
          </div>
        </div>
      </div>
    );
  }
}

export default MainForm;
