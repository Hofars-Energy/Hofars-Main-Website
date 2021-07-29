import "./About.css";
import React from "react";
import au from "../../images/au.jpeg";
import TeamMembers from "./members";
const About = () => {
  return (
    <>
      <div className="ramji">
        <section className="about-us">
          <h1>KNOW A LITTLE MORE ABOUT US</h1>
          <p></p>
          <br></br>
        </section>
      </div>
      <TeamMembers />
    </>
  );
};

export default About;
