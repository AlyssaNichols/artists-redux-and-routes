// index.js

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import logger from "redux-logger";

// Redux
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";


const artistReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_ARTISTS":
      return action.payload;
    // case "ADD_ARTIST":
    //   return [...state, action.payload];
    default:
      return state;
  }
};

// The store is the big JavaScript Object that holds all of the information for our application
const storeInstance = createStore(
  combineReducers({
    artistReducer,
  }),
  applyMiddleware(logger)
);

// Wrap our App in a Provider, this makes Redux available in
// our entire application
ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,

  document.getElementById("root")
);
