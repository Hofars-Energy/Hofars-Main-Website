import React, { Component } from "react";
import Contactus from "../contactus/cu";
import MapComp from "../mapcomp/Map";
class cp extends Component {
  state = {};
  render() {
    return (
      <div className="contact1">
        <Contactus />
        <MapComp />
      </div>
    );
  }
}

export default cp;
