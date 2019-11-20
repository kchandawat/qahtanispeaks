import React from "react";
import { createBrowserHistory } from "history";
import { Route, Switch, withRouter } from "react-router-dom";
import "./index.css";

import EventSingle from "./components/EventSingle";
import Home from "./components/home";
import Nav from "./components/common/navbar";
import Footer from "./components/common/footer";
import { loadReCaptcha } from "react-recaptcha-v3";
import EventList from "./components/eventList";
import SingleBlog from "./components/singleBlog";
import BlogList from "./components/blogList";
import Contact from "./components/contact";
import ChatBot from "./components/common/chatBot";
import Books from "./components/books";
import Error from "./components/error";
import About from "./components/about";

import {
  TransitionGroup,
  CSSTransition,
  Transition
} from "react-transition-group";

import Book from "./components/Book";

var hist = createBrowserHistory();
let loc = hist.location;
function App({ location }) {
  if (loc !== location) {
    window.scrollTo({
      top: 0,
      left: 0
    });

    loc = location;
  }
  loadReCaptcha("6Le9H7oUAAAAAJSaneca-1VV_jL9tNo1C8b7iSet");
  return (
    <div>
      <Nav location={location} />

      <TransitionGroup>
        <CSSTransition
          key={location.key}
          timeout={{ enter: 600, exit: 600 }}
          classNames="fade"
        >
          <div className="route-section">
            <Switch location={location}>
              <Route exact path="/" component={Home} key="home" />
              <Route
                path="/event/:id"
                exact
                component={EventSingle}
                key="eventsingle"
              />
              <Route path="/events" component={EventList} key="events" />
              <Route
                path="/blog/:id"
                component={SingleBlog}
                key="singleblog"
                exact
              />
              <Route path="/blogs" component={BlogList} key="blogs" />
              <Route path="/contact" component={Contact} key="contact" />
              <Route path="/book/:eventType?" component={Book} key="book" />
              <Route path="/about" component={About} key="about" />
              <Route path="/The+Power+Of+Words" component={Books} key="books" />
              <Route component={Error} />
            </Switch>
          </div>
        </CSSTransition>
      </TransitionGroup>

      <Footer />

      <ChatBot />
    </div>
  );
}

export default withRouter(App);
