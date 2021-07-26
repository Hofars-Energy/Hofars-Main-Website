import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./careerCards.scss";

class CareerCards extends Component {
  state = {
    jobs: [
      { name: ".Net Developer", location: "Hyderabad", id: 1 },
      { name: "Senior Java Developer", location: "Lower Parel, Mumbai", id: 2 },
      { name: "IT Intern", location: "Remote", id: 3 },
      { name: "HR Intern", location: "Remote", id: 4 },
      { name: "Digital Marketing Intern", location: "Remote", id: 5 },
      { name: "Product Consultant", location: "Hyderabad", id: 6 },
      { name: "Shopify Developer", location: "Remote", id: 7 },
      { name: "Business Analyst Intern", location: "Remote", id: 8 },
    ],
  };
  render() {
    return (
      <>
        {" "}
        <>
          <br></br>
          <br></br>
          <br></br>
          <h1 className="openpositions">Open Positions</h1>
          <div class="cccontainer">
            <div className="careercardscontainer">
              <div className="row">
                {this.state.jobs.map((ell) => {
                  if (ell.id % 2 !== 0) {
                    return (
                      <Link to={`careers/${ell.id}`}>
                        <div class="column left">
                          {" "}
                          <div class="card">
                            <h2>{ell.name}</h2>
                            <i class="fas fa-arrow-right"></i>
                            <p>{ell.location}</p>
                            <div class="pic"></div>

                            <button></button>
                          </div>
                        </div>
                      </Link>
                    );
                  } else {
                    return (
                      <Link to={`careers/${ell.id}`}>
                        <div class="column right">
                          <div class="card card2">
                            <h2>{ell.name}</h2>
                            <i class="fas fa-arrow-right"></i>
                            <p>{ell.location}</p>
                            <div class="pic"></div>

                            <button></button>
                          </div>
                        </div>
                      </Link>
                    );
                  }
                })}
              </div>
            </div>
          </div>
        </>
      </>
    );
  }
}

{
  /* <div class="column right">
<div class="card card2">
  <h2>Vauxhall</h2>
  <i class="fas fa-arrow-right"></i>
  <p>a lonely trip.</p>
  <div class="pic"></div>
  <Link to="home">
    <button></button>
  </Link>
</div>
</div> */
}

{
  /* <div class="row">
              <div class="column">
                {" "}
                <div class="card left">
                  <h2>.Net Developer</h2>
                  <i class="fas fa-arrow-right"></i>
                  <p>a lonely trip.</p>
                  <div class="pic"></div>

                  <Link to="home">
                    <button></button>
                  </Link>
                </div>
              </div>
            </div>
*/
}

export default CareerCards;
