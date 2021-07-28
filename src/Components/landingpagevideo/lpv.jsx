import React, { Component } from "react";
import "./lpv.css";
class LandingPageVideo extends Component {
  state = {};
  render() {
    return (
      <div className="lpv-container">
        <h1>Get to know us:</h1>
        <div className="lpv">
          <iframe
            className="landingpagevideo"
            src="https://www.youtube.com/embed/vKz244ZkS2U"
          ></iframe>
        </div>
      </div>
    );
  }
}

export default LandingPageVideo;
