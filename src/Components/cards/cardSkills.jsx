import React from "react";
import CardItem from "./cardItem";
import "./cardsskills.css";
import hr from "../../images/hr.jpeg";
import e from "../../images/energy.png";
import cx from "../../images/cx.jpeg";
import it from "../../images/it.jpeg";
const CardSkills = () => {
  return (
    <div className="cards">
      <h1>Our Expertise</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items2">
            <CardItem
              src={it}
              text="Information Technology"
              label="IT"
              path="/skills"
            />
            <CardItem src={e} text="Energy" label="E" path="/skills" />
            <CardItem
              src={hr}
              text="Human Resource"
              label="HR"
              path="/skills"
            />
            <CardItem
              src={cx}
              text="Customer Excellence"
              label="CX"
              path="/skills"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CardSkills;
