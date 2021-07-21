import React, { Component } from "react";
import "./blogcards.css";
class BlogCards extends Component {
  state = {};
  render() {
    return (
      <>
        <div class="wrapperbc">
          <h1>Our Ongoing Projects</h1>
          <div class="cols">
            <div class="col" ontouchstart="this.classList.toggle('hover');">
              <div class="container">
                <div
                  class="front"
                  style={{ background: "url(https://unsplash.it/500/500/)" }}
                >
                  <div class="inner">
                    <p>Power Grid</p>
                    <span>Load Shifting</span>
                  </div>
                </div>
                <div class="back">
                  <div class="inner">
                    <p>Analysis of Load Shifting in Power Grid</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col" ontouchstart="this.classList.toggle('hover');">
              <div class="container">
                <div
                  class="front"
                  style={{ background: "url(https://unsplash.it/511/511/)" }}
                >
                  <div class="inner">
                    <p>Performance Management</p>
                    <span>System</span>
                  </div>
                </div>
                <div class="back">
                  <div class="inner">
                    <p>
                      Changing System of Performance Management in Modern Times
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col" ontouchstart="this.classList.toggle('hover');">
              <div class="container">
                <div
                  class="front"
                  style={{ background: "url(https://unsplash.it/502/502/)" }}
                >
                  <div class="inner">
                    <p>Strizzes</p>
                    <span>Lorem ipsum</span>
                  </div>
                </div>
                <div class="back">
                  <div class="inner">
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Alias cum repellat velit quae suscipit c.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col" ontouchstart="this.classList.toggle('hover');">
              <div class="container">
                <div
                  class="front"
                  style={{ background: "url(https://unsplash.it/503/503/)" }}
                >
                  <div class="inner">
                    <p>Clossyo</p>
                    <span>Lorem ipsum</span>
                  </div>
                </div>
                <div class="back">
                  <div class="inner">
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Alias cum repellat velit quae suscipit c.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col" ontouchstart="this.classList.toggle('hover');">
              <div class="container">
                <div
                  class="front"
                  style={{ background: "url(https://unsplash.it/504/504/)" }}
                >
                  <div class="inner">
                    <p>Rendann</p>
                    <span>Lorem ipsum</span>
                  </div>
                </div>
                <div class="back">
                  <div class="inner">
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Alias cum repellat velit quae suscipit c.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col" ontouchstart="this.classList.toggle('hover');">
              <div class="container">
                <div
                  class="front"
                  style={{ background: "url(https://unsplash.it/505/505/)" }}
                >
                  <div class="inner">
                    <p>Reflupper</p>
                    <span>Lorem ipsum</span>
                  </div>
                </div>
                <div class="back">
                  <div class="inner">
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Alias cum repellat velit quae suscipit c.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col" ontouchstart="this.classList.toggle('hover');">
              <div class="container">
                <div
                  class="front"
                  style={{ background: "url(https://unsplash.it/506/506/)" }}
                >
                  <div class="inner">
                    <p>Acirassi</p>
                    <span>Lorem ipsum</span>
                  </div>
                </div>
                <div class="back">
                  <div class="inner">
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Alias cum repellat velit quae suscipit c.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col" ontouchstart="this.classList.toggle('hover');">
              <div class="container">
                <div
                  class="front"
                  style={{ background: "url(https://unsplash.it/508/508/)" }}
                >
                  <div class="inner">
                    <p>Sohanidd</p>
                    <span>Lorem ipsum</span>
                  </div>
                </div>
                <div class="back">
                  <div class="inner">
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Alias cum repellat velit quae suscipit c.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default BlogCards;
