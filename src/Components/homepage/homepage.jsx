import React, { Component } from "react";
import HeroSection from "../hero/heroHome";
import CardSkills from "../cards/cardSkills";
import LandingPageVideo from "../landingpagevideo/lpv";
import BlogCards from "../cards/blogcards";
class HomePage extends Component {
  state = {};
  render() {
    return (
      <>
        <HeroSection />
        <LandingPageVideo />
        <CardSkills />
        <BlogCards />
      </>
    );
  }
}

export default HomePage;
