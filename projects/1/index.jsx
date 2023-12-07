import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

const rootElement = document.getElementById("root");
const app = (
  <div className="wrapper">
    <h1 className="welcomehead">SUBSCRIBE</h1>
    <p>Sign up with your email to recieve update from us!</p>

    <form action="#">
      <div className="inner-wrapper">
        <div className="input-box">
          <input type="text" placeholder="FirstName"></input>
        </div>
        <div className="input-box">
          <input type="text" placeholder="LastName"></input>
        </div>
        <div className="input-box">
          <input type="email" placeholder="ex:WalterWhite@gmail.com"></input>
        </div>
      </div>
      <button type="submit" className="btn">
        Subscribe
      </button>
    </form>
  </div>
);
const main = <div className="main">{app}</div>;

ReactDOM.render(main, rootElement);
