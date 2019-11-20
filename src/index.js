import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";
import reducers from "./reducers";

import App from "./App";

import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import firebase from "./firebase";
import * as serviceWorker from "./serviceWorker";

const store = createStore(
  reducers,
  compose(
    applyMiddleware(reduxThunk.withExtraArgument({ getFirebase })),
    reactReduxFirebase(firebase)
  )
);
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
