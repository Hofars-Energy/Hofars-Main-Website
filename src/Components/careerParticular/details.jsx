import React, { Component } from "react";
import "./details.css";
class DetailsIndividual extends Component {
  state = {};
  render() {
    const { qualifications, responsibilities, mandatorySkills } = this.props;
    return (
      <div className="detailsPura">
        <div className="detailsIC">
          <h2>Details:</h2>
          <br></br>
          <h3>Responsibilities:</h3>
          <div className="responsibilites">
            {responsibilities.map((ellem) => {
              return (
                <h4>
                  <i class="fas fa-hand-point-right"></i> {ellem}
                </h4>
              );
            })}
          </div>

          <div className="qualifications">
            <h3>Qualifications:</h3>
            {qualifications.map((ellem) => {
              return (
                <h4>
                  <i class="fas fa-hand-point-right"></i> {ellem}
                </h4>
              );
            })}
          </div>

          <div className="mandatoryskills">
            <h3>Mandatory Skills:</h3>
            <h4>{mandatorySkills}</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default DetailsIndividual;
