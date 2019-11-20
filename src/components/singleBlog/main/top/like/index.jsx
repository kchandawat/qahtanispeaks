import React, { Component } from "react";
import firebase from "../../../../../firebase";
import Cookies from "universal-cookie";
import { message } from "antd";
import "../style.css";
const cookies = new Cookies();
const plusOneRef = firebase
  .database()
  .ref()
  .child("posts");
class Like extends Component {
  state = {
    liked: "button-like",
    disabled: false,
    hidden: cookies.get("like/" + this.props.id) ? "none" : "block"
  };
  onLike = () => {
    this.state.liked === "button-like"
      ? this.setState({ liked: "liked", disabled: !this.state.disabled })
      : this.setState({ liked: "button-like", disabled: !this.state.disabled });
    plusOneRef.child(this.props.id).once("value", snaphot => {
      plusOneRef
        .child(this.props.id)
        .child("likes")
        .set(
          (snaphot.child("likes").exists() ? snaphot.child("likes").val() : 0) +
            1
        )
        .then(() => {
          cookies.set("like/" + this.props.id, true, {
            path: "/",
            expires: new Date(Date.now() + 307584000000)
          });
          message.success("We're glad that you love our content.", 7);
          this.setState({ hidden: "none" });
        });
    });
  };
  render() {
    if (!cookies.get("like/" + this.props.id))
      return (
        <div
          className="container"
          style={{ margin: "50px 0" }}
          style={{ display: this.state.hidden }}
        >
          <button
            className={"button " + this.state.liked}
            onClick={this.onLike}
            disabled={this.state.disabled}
          >
            <i className="fa fa-heart"></i>
            <span> Love it</span>
          </button>
          <br />
          <br />
        </div>
      );
    else return <div />;
  }
}

export default Like;
