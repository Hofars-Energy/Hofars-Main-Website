import "./heroCI.css";
import React from "react";

const HeroCI = (props) => {
  const {
    name,
    location,
    budget,
    qualifications,
    responsibilities,
    mandatorySkills,
  } = props;
  return (
    <div className="hero-containerCareerIndividual">
      <h1>{name}</h1>
      <p>{location}</p>
      <br></br>
      <h3>Salary: {budget}</h3>
      <br></br>
    </div>
  );
};

export default HeroCI;
