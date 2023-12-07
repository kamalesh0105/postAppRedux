// index.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./app/store";
import "./style.css";
const Mainapp = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Mainapp />, rootElement);
