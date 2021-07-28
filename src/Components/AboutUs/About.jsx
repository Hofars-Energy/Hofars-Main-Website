import "./About.css";
import React from "react";
import au from "../../images/au.jpeg";
import TeamMembers from "./members";
const About = () => {
  return (
    <>
      <div>
        <section className="about-us">
          <h1>About Us</h1>
          <p></p>
          <br></br>
        </section>
      </div>
      <TeamMembers />
    </>
  );
};

export default About;
