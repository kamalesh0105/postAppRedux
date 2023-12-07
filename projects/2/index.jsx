import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import myimg from "./night.jpg";

const root = document.getElementById("root");

function btn(name) {
  return (
    <div className="template">
      <button type="button" class="btn btn-info">
        {name}
      </button>
    </div>
  );
}
const main = (
  <div className="wrapper">
    <div className="inner-wrapper">
      <div className="image-holder">
        <div className="image">
          <img src={myimg} alt="none"></img>
        </div>
        <h4 className="image-name">
          <b>KAMALESH SELVAM </b>
        </h4>
      </div>
      <div className="job-position">
        <p>Senior Developer, Finland </p>
      </div>
      <div className="skills">
        <h2 className="skill-head">
          <b>SKILLS</b>
        </h2>
        <div className="skill-btn">
          {btn("html")}
          {btn("css")}
          {btn("php")}
          {btn("python")}
          {btn("GIT")}
          {btn("LINUX")}
        </div>
      </div>
      <div className="joindate">
        <p>Joined on 17th sep 2023</p>
      </div>
    </div>
  </div>
);
// const main = <div className="app">{wrapper}</div>;
ReactDOM.render(main, root);
