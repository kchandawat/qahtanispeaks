import React, { Component } from "react";
import "antd/dist/antd.css";
import moment from "moment";
import { DatePicker, Radio, Checkbox, Input, message } from "antd";
import firebase from "../../../firebase";
import "./style.css";
import { ReCaptcha } from "react-recaptcha-v3";
const databaseRef = firebase.database().ref();
const contactRef = databaseRef.child("contact");
const CheckboxGroup = Checkbox.Group;

const InputGroup = Input.Group;

class BookingForm extends Component {
  state = {
    FirstName: "",
    LastName: "",
    Email: "",
    Mobile: "",
    Organization: "",
    Social: "",
    Address: "",
    EventTitle: "",
    EventLocation: "",
    EventFormat: this.props.eventType ? this.props.eventType : 1,
    EventDate: moment(moment.utc().add(1700000000), "DD/MM/YY"),
    EventType: 1,
    Event: 1,
    AudienceType: ["Employees", "Toastmasters"],
    AudioVisual: ["Podium", "Screen"],
    ThemeOfEvent: "",
    Duration: "",
    ExpectedNumbers: "",
    AnyOtherSpeakers: 3,
    SpeakerDetails: "",
    SpeakerBudget: "",
    Additional: "",
    TravelAccomadation: "",
    Message: "",
    SubmitButton: "Send Booking Request",
    disabled: false,
    verified: false
  };

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
  verifyCallback = recaptchaToken => {
    if (recaptchaToken) {
      this.setState({ verified: true });
    }
    console.log(recaptchaToken, "<= your recaptcha token");
  };
  handleSubmit = event => {
    event.preventDefault();
    let button = event.target;
    const payload = {
      FirstName: this.state.FirstName ? this.state.FirstName : " ",
      LastName: this.state.LastName ? this.state.LastName : " ",
      Email: this.state.Email ? this.state.Email : " ",

      Contact: this.state.Mobile ? parseInt(this.state.Mobile) : 0,
      Organization: this.state.Organization ? this.state.Organization : " ",
      SocialProfileMedia: this.state.Social ? this.state.Social : " ",
      Address: this.state.Address ? this.state.Address : " ",
      EventTitle: this.state.EventTitle ? this.state.EventTitle : " ",
      EventLocation: this.state.EventLocation ? this.state.EventLocation : " ",
      EventFormat:
        this.state.EventFormat == 1
          ? "Keynote"
          : this.state.EventFormat == 2
          ? "Coaching"
          : this.state.EventFormat == 3
          ? "Workshop"
          : " ",
      EventDate: this.state.EventDate ? this.state.EventDate.toString() : " ",
      EventIs:
        this.state.Event == 1
          ? "Ticketed"
          : this.state.Event == 2
          ? "Un-Ticketed"
          : " ",
      EventGoingTo:
        this.state.Event == 1
          ? "Make Profits"
          : this.state.Event == 2
          ? "Cover Costs"
          : " ",
      AudienceType: this.state.AudienceType
        ? this.state.AudienceType.join(", ")
        : " ",
      AudioVisual: this.state.AudioVisual
        ? this.state.AudioVisual.join(", ")
        : " ",
      ThemeOfEvent: this.state.ThemeOfEvent ? this.state.ThemeOfEvent : " ",
      Duration: this.state.Duration ? this.state.Duration : " ",
      NumberOfGuests: this.state.ExpectedNumbers
        ? parseInt(this.state.ExpectedNumbers)
        : 0,
      AnyOtherGuests:
        this.state.AnyOtherSpeakers == 1
          ? "Yes"
          : this.state.AnyOtherSpeakers == 2
          ? "No"
          : this.state.AnyOtherSpeakers == 3
          ? "Not Confirmed"
          : " ",
      GuestDetails: this.state.SpeakerDetails ? this.state.SpeakerDetails : " ",
      SpeakerBudget: this.state.SpeakerBudget
        ? parseInt(this.state.SpeakerBudget)
        : 0,
      AdditionalInfo: this.state.Additional ? this.state.Additional : " ",
      Accomodation: this.state.TravelAccomadation
        ? this.state.TravelAccomadation
        : " ",
      Message: this.state.Message ? this.state.Message : " ",
      Type: 2
    };
    if (this.state.verified) {
      this.setState({ disabled: true, SubmitButton: "Sending" });
      button.value = "sending";

      contactRef.push(payload, error => {
        if (error) {
          console.log("Error has occured during saving process");
          this.setState({
            disabled: false,
            SubmitButton: "Send Booking Request"
          });
          button.value = "Send Booking Request";
        } else {
          this.sendFeedback("booking", {
            ...payload
          });
          message.success(
            "Thankyou your booking request has been received, I will get back to you shortly.",
            7
          );
          this.setState({
            FirstName: "",
            LastName: "",
            Email: "",
            Mobile: "",
            Organization: "",
            Social: "",
            Address: "",
            EventTitle: "",
            EventLocation: "",
            EventFormat: 1,
            EventDate: moment(moment.utc().add(1700000000), "DD/MM/YY"),
            EventType: 1,
            Event: 1,
            AudienceType: ["Employees", "Toastmasters"],
            AudioVisual: ["Podium", "Screen"],
            ThemeOfEvent: "",
            Duration: "",
            ExpectedNumbers: "",
            AnyOtherSpeakers: 3,
            SpeakerDetails: "",
            SpeakerBudget: "",
            Additional: "",
            TravelAccomadation: "",
            Message: ""
          });
          this.setState({
            disabled: false,
            SubmitButton: "Send Booking Request"
          });
          button.value = "Send Booking Request";
        }
      });
    } else {
      message.warn("Please verify that you're Human", 6);
    }
  };

  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  handleInputChangeChecked = (event, boxName) => {
    const value = event;

    const name = boxName;

    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className="col-md-9 col-sm-9 left-block">
        <div className="box-wrap">
          {/* <div className="contact-info">
            <table>
              <tr>
                <td>
                  <span className="icon rounded-crcl blue-bg text-white faa-parent animated-hover ">
                    <i className="pe-7s-map-marker faa-pulse" />
                  </span>
                  89, Lord Concourse DY,San Francisco, CA 94118, United States
                </td>

                <td>
                  <span className="icon rounded-crcl sec-bg text-white faa-parent animated-hover">
                    <i className="pe-7s-mail faa-pulse" />
                  </span>
                  info@yoursite.com
                  <br /> www.yoursite.com
                </td>

                <td>
                  <span className="icon rounded-crcl dark-blue  text-white faa-parent animated-hover">
                    <i className="pe-7s-phone faa-pulse" />
                  </span>
                  +1(400)123-4567
                  <br /> +1(400)890-1234
                </td>
              </tr>
            </table>
          </div>

          <div className="or">
            <span>OR</span>
          </div> */}

          <p>
            <h4>Event Co-ordinator Details:</h4>
          </p>

          <div className="form-wrap">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group one-half pull-left">
                <label>
                  First Name <span>*</span>
                </label>
                <input
                  type="text"
                  placeholder="First Name"
                  required
                  name="FirstName"
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
                  name="LastName"
                  placeholder="Last Name"
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
                  Mobile Number<span>*</span>
                </label>
                <InputGroup compact>
                  <input
                    type="tel"
                    placeholder="Mobile"
                    style={{ width: "7%" }}
                    value="+"
                    readOnly
                  />
                  <input
                    type="number"
                    placeholder="919449577498"
                    minLength="10"
                    style={{ width: "93%" }}
                    required
                    name="Mobile"
                    minLength="10"
                    value={this.state.Mobile}
                    onChange={this.handleInputChange}
                    pattern="[0-9]+"
                  />
                </InputGroup>
              </div>

              <div className="form-group one-half pull-left">
                <label>
                  Organization <span>*</span>
                </label>
                <input
                  type="text"
                  placeholder="Organization"
                  required
                  name="Organization"
                  value={this.state.Organization}
                  onChange={this.handleInputChange}
                />
              </div>

              <div className="form-group one-half pull-right">
                <label>
                  social / online profile <span>*</span>
                </label>
                <input
                  type="text"
                  placeholder="LinkdIn, Facebook, Instagram"
                  required
                  name="Social"
                  value={this.state.Social}
                  onChange={this.handleInputChange}
                />
              </div>

              <div className="form-group full pull-left">
                <label>
                  Address <span>*</span>
                </label>
                <textarea
                  placeholder="Address"
                  required
                  name="Address"
                  value={this.state.Address}
                  onChange={this.handleInputChange}
                />
              </div>
              <p>
                <h4>The Event:</h4>
              </p>
              <div className="form-group one-half pull-left">
                <label>
                  Event Title <span>*</span>
                </label>
                <input
                  type="text"
                  placeholder=""
                  name="EventTitle"
                  required
                  value={this.state.EventTitle}
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="form-group one-half pull-right">
                <label>
                  Event Location <span>*</span>
                </label>
                <input
                  type="text"
                  placeholder="Event Location"
                  name="EventLocation"
                  required
                  value={this.state.EventLocation}
                  onChange={this.handleInputChange}
                />
              </div>

              <div className="form-group one-half pull-left">
                <label>
                  Event's Format <span>* </span>
                </label>
                <br />
                <Radio.Group
                  onChange=""
                  value={this.state.EventFormat}
                  name="EventFormat"
                  required
                  onChange={this.handleInputChange}
                >
                  <Radio value={1}>Keynote</Radio>
                  <Radio value={2}>Coaching</Radio>
                  <Radio value={3}>Workshop</Radio>
                </Radio.Group>
              </div>
              <div className="form-group one-half pull-right">
                <label>
                  Event Date <span>*</span>
                </label>

                <br />
                <DatePicker
                  disabledDate={current => {
                    // Can not select days before today and today
                    return current && current < moment().endOf("day");
                  }}
                  defaultValue={moment(
                    moment.utc().add(1700000000),
                    "DD/MM/YY"
                  )}
                  value={this.state.EventDate}
                  format={"DD/MM/YY"}
                  onChange={e => {
                    this.setState({ EventDate: e });
                  }}
                  name="EventDate"
                />
              </div>

              <div className="form-group one-half pull-left ">
                <label>
                  Is this event <span> </span>
                </label>
                <br />
                <Radio.Group
                  onChange=""
                  value={this.state.EventType}
                  onChange={this.handleInputChange}
                  name="EventType"
                >
                  <Radio value={1}>Ticketed</Radio>
                  <Radio value={2}>Un-ticketed</Radio>
                  <Radio value={3}>Other</Radio>
                </Radio.Group>
              </div>

              <div className="form-group one-half pull-right">
                <label>
                  (Answer only If Ticketed) Is the Event going to,
                  <span> </span>
                </label>
                <br />
                <Radio.Group
                  onChange={this.onChange}
                  value={this.state.Event}
                  name="Event"
                  onChange={this.handleInputChange}
                >
                  <Radio value={1}>Make profits</Radio>
                  <Radio value={2}>Cover Costs</Radio>
                </Radio.Group>
              </div>
              <div className="form-group one-half pull-left">
                <label>
                  The Audience will be: <span> *</span>
                </label>
                <br />
                <CheckboxGroup
                  options={[
                    "Employees",
                    "Top Tier Executives",
                    "Toastmasters",
                    "Mixed",
                    "Open To Public"
                  ]}
                  onChange={e =>
                    this.handleInputChangeChecked(e, "AudienceType")
                  }
                  name="AudienceType"
                  defaultValue={["Employees", "Toastmasters"]}
                  value={this.state.AudienceType}
                />
              </div>

              <div className="form-group one-half pull-right">
                <label>
                  Available audio-visual equipment <span> *</span>
                </label>
                <br />
                <CheckboxGroup
                  options={[
                    "Podium",
                    "Microphone",
                    "Screen",
                    "Projector",
                    "Other"
                  ]}
                  onChange={e =>
                    this.handleInputChangeChecked(e, "AudioVisual")
                  }
                  name="AudiioVisual"
                  value={this.state.AudioVisual}
                  defaultValue={["Podium", "Screen"]}
                />
              </div>
              <p>
                <h4 />
              </p>
              <div className="form-group one-half pull-left">
                <label>
                  Theme of event / Topic of Discussion <span>*</span>
                </label>
                <input
                  type="text"
                  placeholder="Theme/Topic"
                  required
                  name="ThemeOfEvent"
                  onChange={this.handleInputChange}
                  value={this.state.ThemeOfEvent}
                />
              </div>
              <div className="form-group one-half pull-right">
                <label>
                  Expected duration of Speech / Workshop <span />
                </label>
                <input
                  type="text"
                  placeholder="Hours/Minutes"
                  name="Duration"
                  onChange={this.handleInputChange}
                  value={this.state.Duration}
                />
              </div>
              <div className="form-group one-half pull-left">
                <label>
                  Expected number of members / guests in the audience ?
                  <span>*</span>
                </label>
                <input
                  type="number"
                  placeholder=""
                  required
                  name="ExpectedNumbers"
                  onChange={this.handleInputChange}
                  value={this.state.ExpectedNumbers}
                />
              </div>
              <div className="form-group one-half pull-right">
                <label>
                  Any other Speakers / Officials attending the event
                  <span>* </span>
                </label>
                <br />
                <Radio.Group
                  onChange=""
                  value={this.state.AnyOtherSpeakers}
                  onChange={this.handleInputChange}
                  name="AnyOtherSpeakers"
                >
                  <Radio value={1}>Yes</Radio>
                  <Radio value={2}>No</Radio>
                  <Radio value={3}>Not confirmed at the moment</Radio>
                </Radio.Group>
              </div>

              <div className="form-group full pull-left">
                <label>
                  If yes, please provide details
                  <span />
                </label>
                <textarea
                  placeholder="Name of other Speakers/Officials"
                  value={this.state.SpeakerDetails}
                  name="SpeakerDetails"
                  onChange={this.handleInputChange}
                />
              </div>
              <p>
                <h4 />
              </p>
              <div className="form-group one-half pull-left">
                <label>
                  Is there a Speaker Budget you are trying to meet ? Please
                  specify.
                  <span>*</span> (0 in case of non profit event / for a cause)
                </label>
                <input
                  type="number"
                  placeholder="USD"
                  required
                  value={this.state.SpeakerBudget}
                  onChange={this.handleInputChange}
                  name="SpeakerBudget"
                />
              </div>
              <div className="form-group one-half pull-right">
                <label>
                  Additional Information.
                  <br />
                  (Miscellaneous)
                  <span />
                </label>
                <input
                  type="text"
                  placeholder=""
                  value={this.state.Additional}
                  onChange={this.handleInputChange}
                  name="Additional"
                />
              </div>
              <div className="form-group full pull-left">
                <label>
                  Please provide details on Travel & Accommodation arrangements.
                  <span>*</span>
                </label>
                <textarea
                  placeholder=""
                  value={this.state.TravelAccomadation}
                  onChange={this.handleInputChange}
                  name="TravelAccomadation"
                />
              </div>
              <div className="form-group full pull-left">
                <label>
                  Your Message to Mr Qahtani
                  <span />
                </label>
                <textarea
                  placeholder=""
                  value={this.state.Message}
                  name="Message"
                  onChange={this.handleInputChange}
                />
              </div>
              <p>
                <h4 />
              </p>
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

export default BookingForm;
