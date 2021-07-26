import React, { Component } from "react";
import CareerCards from "../careerCards/careerCards";
import HeroCareer from "../heroCareer/HeroCareer";
class CareerMainPage extends Component {
  state = {};
  render() {
    return (
      <>
        <HeroCareer />
        <CareerCards />
      </>
    );
  }
}

export default CareerMainPage;
