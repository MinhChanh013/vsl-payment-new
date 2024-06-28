import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./Styles/index.scss";
import reportWebVitals from "./reportWebVitals";
// import "react-data-grid/lib/styles.css";
import Router from "./routes/Router";
import { Provider } from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Router />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
