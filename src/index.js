import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import Store from "./stores";
// import Todo from './Todo';
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={Store().store}>
    {/* <React.StrictMode> */}
    <App />
    {/* </React.StrictMode> */}
  </Provider>
);

reportWebVitals();
