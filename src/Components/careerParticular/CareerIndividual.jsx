import React, { Component } from "react";
import HeroCI from "./heroCI";
import DetailsIndividual from "./details";
import jobs from "../../jsonFiles/jobs.json";
class CareerIndividual extends Component {
  state = { job: jobs[parseInt(this.props.match.params.id) - 1] };
  componentDidMount() {
    window.scrollTo(0, 0);
    console.log(this.state.job);
  }

  render() {
    const {
      name,
      location,
      budget,
      qualifications,
      responsibilities,
      mandatorySkills,
    } = this.state.job;
    return (
      <>
        <HeroCI name={name} location={location} budget={budget} />
        <DetailsIndividual
          qualifications={qualifications}
          responsibilities={responsibilities}
          mandatorySkills={mandatorySkills}
        />
      </>
    );
  }
}

export default CareerIndividual;
