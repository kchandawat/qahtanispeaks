import React, { Component } from "react";
import $ from "jquery";
import { BehaviorSubject } from "rxjs";
import { scan } from "rxjs/operators";
import ReactHtmlParser from "react-html-parser";
import Axios from "axios";
import "./style.css";
import { Link } from "react-router-dom";

class ChatBot extends Component {
  state = {
    input: "",

    chat: []
  };

  config;
  id;
  allow;
  messages;
  conv = new BehaviorSubject([]);
  res = this.conv.asObservable().pipe(scan((acc, val) => acc.concat(val)));
  componentDidMount() {
    this.initalize();
    this.res.subscribe(r => this.setState({ chat: r }));
  }
  updateInput = event => {
    this.setState({ input: event.target.value });
  };
  constructor(req) {
    super(req);
    this.id = Math.floor(Math.random() * 10000000000);
    this.allow = false;
    Axios.get(
      "https://us-central1-qahtanispeaks-pvdafx.cloudfunctions.net/bot/token"
    ).then(res => {
      this.config = {
        headers: {
          Authorization: "Bearer " + res.data.token,
          "Content-Type": "application/json; charset=utf-8"
        }
      };
      this.allow = true;
    });
  }
  initalize = () => {
    $(document).ready(function() {
      var $chatbox = $(".chatbox"),
        $chatboxTitle = $(".chatbox__title"),
        $chatboxTitleClose = $(".chatbox__title__close"),
        $chatboxCredentials = $(".chatbox__credentials");
      $chatboxTitle.on("click", function() {
        $chatbox.toggleClass("chatbox--tray");
      });
      $chatboxTitleClose.on("click", function(e) {
        e.stopPropagation();
        $chatbox.addClass("chatbox--closed");
      });
      $chatbox.on("transitionend", function() {
        if ($chatbox.hasClass("chatbox--closed")) $chatbox.remove();
      });
    });
  };
  onSubmit = e => {
    e.preventDefault();

    if (this.allow) {
      this.allow = false;
      this.conv.next({
        // @ts-ignore
        type: "human",
        message: this.state.input
      });

      const request = {
        queryInput: {
          text: {
            text: this.state.input,
            languageCode: "en-US"
          }
        }
      };

      Axios.post(
        "https://dialogflow.googleapis.com/v2/projects/" +
          "qahtanispeaks-pvdafx" +
          "/agent/sessions/" +
          this.id +
          ":detectIntent",
        request,
        this.config
      ).then(
        r => {
          console.log("output", r);
          // @ts-ignore
          if (r.data.queryResult.fulfillmentText) {
            this.conv.next({
              // @ts-ignore
              type: "bot",
              // @ts-ignore
              message: r.data.queryResult.fulfillmentText
            });
          } else if (r.data.queryResult.webhookPayload) {
            this.conv.next({
              // @ts-ignore
              type: "event",
              // @ts-ignore
              message: r.data.queryResult.webhookPayload.null
            });
          }
          // @ts-ignore

          this.conv.next(r);
          this.allow = true;
        },
        err => {
          this.allow = true;
        }
      );
    }
    $("#chatScroll").animate(
      { scrollTop: $("#chatScroll")[0].scrollHeight },
      500
    );
  };
  render() {
    return (
      <div className="row">
        <div className="chatbox chatbox22 chatbox--tray">
          <div className="chatbox__title">
            <h5>
              <a>Eva</a>
            </h5>
            <button className="chatbox__title__tray">
              <span></span>
            </button>

            <button className="chatbox__title__close">
              <span>
                <svg viewBox="0 0 12 12" width="12px" height="12px">
                  <line
                    stroke="#FFFFFF"
                    x1="11.75"
                    y1="0.25"
                    x2="0.25"
                    y2="11.75"
                  ></line>
                  <line
                    stroke="#FFFFFF"
                    x1="11.75"
                    y1="11.75"
                    x2="0.25"
                    y2="0.25"
                  ></line>
                </svg>
              </span>
            </button>
          </div>
          <div className="chatbox__body" id="chatScroll">
            {this.state.chat.map((item, index) => {
              console.log(item);
              switch (item.type) {
                case "human":
                  return (
                    <div
                      className="chatbox__body__message chatbox__body__message--left"
                      key={index}
                    >
                      <div className="ul_section_full">
                        <ul className="ul_msg">
                          <li>
                            <strong>You</strong>
                          </li>
                          <li>{item.message}</li>
                        </ul>
                        <div className="clearfix"></div>
                      </div>
                    </div>
                  );
                case "bot":
                  return (
                    <div
                      className="chatbox__body__message chatbox__body__message--right"
                      key={index}
                    >
                      <img
                        src={
                          process.env.PUBLIC_URL + "assets/images/assistant.jpg"
                        }
                        alt="Picture"
                      />

                      <div className="ul_section_full">
                        <ul className="ul_msg">
                          <li>
                            <strong>Eva</strong>
                          </li>
                          <li>{ReactHtmlParser(item.message)}</li>
                        </ul>
                        <div className="clearfix"></div>
                      </div>
                    </div>
                  );
                case "event": {
                  return Object.values(item.message).map(
                    (eventItem, indexx) => {
                      return (
                        <div className="ul_section_full" key={indexx}>
                          <ul className="ul_msg">
                            <li>
                              <strong>Eva</strong>
                            </li>
                            <li>
                              <img
                                className="card-img-top"
                                style={{ borderRadius: "0.5rem" }}
                                src={eventItem.image}
                                alt="Card image cap"
                              />
                              <div className="card-body">
                                <h5
                                  className="card-title"
                                  style={{ marginBottom: "8px" }}
                                >
                                  {eventItem.name}
                                </h5>
                                <h6
                                  className="card-subtitle mb-2 text-muted"
                                  style={{ fontSize: "14px" }}
                                >
                                  About Event:
                                </h6>

                                <p className="card-text">
                                  {eventItem.about.split("<p>")[0] + "..."}
                                </p>
                                <p style={{ fontWeight: "bold", margin: 0 }}>
                                  Price:{" "}
                                  {eventItem.price.currency +
                                    eventItem.price.actual}
                                </p>
                                <p style={{ fontSize: "12px", margin: 0 }}>
                                  Early bird:{" "}
                                  {eventItem.price.currency +
                                    eventItem.price.earlyBird}
                                </p>
                                <p style={{ fontSize: "12px" }}>
                                  late:{" "}
                                  {eventItem.price.currency +
                                    eventItem.price.late}
                                </p>
                                <p style={{ fontWeight: "bold", margin: 0 }}>
                                  Last Date:{" "}
                                  {new Date(eventItem.lastDate).toDateString()}
                                </p>
                              </div>
                              <Link to={"/event/" + eventItem.key}>
                                <button
                                  className="btn btn-primary"
                                  style={{ borderRadius: "0.5rem" }}
                                >
                                  <img
                                    src="./assets/arrow.svg"
                                    width="25"
                                    alt=""
                                  />
                                </button>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      );
                    }
                  );
                }
              }
            })}{" "}
          </div>
          <div className="panel-footer">
            <form className="input-group" onSubmit={this.onSubmit}>
              <input
                id="btn-input"
                value={this.state.input}
                onChange={this.updateInput}
                type="text"
                className="form-control input-sm chat_set_height"
                placeholder="Type your message here..."
                tabIndex="0"
                dir="ltr"
                required
                spellCheck="false"
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                contentEditable="true"
              />

              <span className="input-group-btn">
                <button
                  type="submit"
                  className="btn bt_bg btn-sm"
                  id="btn-chat"
                >
                  Send
                </button>
              </span>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ChatBot;
