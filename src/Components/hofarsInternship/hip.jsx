import React, { Component, useEffect, useState } from "react";
import "./hip.css";

var scrollCount = 0;

const HofarsIP = () => {
  const [colleft, leftHandle] = useState(false);
  const [colright, rightHandle] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  window.addEventListener("scroll", handleScroll);
  function handleScroll() {
    if (window.pageYOffset > 500) {
      leftHandle(true);
      window.setTimeout(function () {
        rightHandle(true);
      }, 500);
    }
  }
  function handleIcon() {
    window.requestAnimationFrame(function () {
      scrollCount = window.pageYOffset;
      scrollDown();
    });
  }

  function scrollDown() {
    scrollCount += 25;
    if (window.pageYOffset < document.getElementById("hero").clientHeight) {
      window.scrollTo(0, scrollCount);
      window.requestAnimationFrame(function () {
        scrollDown();
      });
    }
  }

  return (
    <>
      <div
        className="containerhip"
        onScroll={() => handleScroll()}
        id="container"
      >
        <div className="hero" id="hero">
          <div className="hero-content">
            <h1>
              NOT ALL THOSE WHO WANDER ARE{" "}
              <span className="highlight">LOST</span>
              .<br />
              <span>
                YOUR <span className="highlight">STORY</span> STARTS AT HOFARS.
              </span>
            </h1>
            <div className="description">
              Hofars offers an excellent internship program for the Energy,
              Computer Science, Electronics and Communications and MBA Students.
              The internships are for a maximum duration of 6 months. The # of
              internship positions available depends on the project
              availability. So far 110 candidates of various nationalities from
              diverse domains and having different skillsets have interned with
              us from incorporation till date. The past results of these
              programs have been very encouraging.
            </div>
            <div className="buttons">
              <button id="scroll-button" onClick={() => handleIcon()}>
                START EXPLORING
              </button>
            </div>
          </div>
          <i
            className="fa fa-angle-double-down"
            id="scroll-icon"
            onClick={() => handleIcon()}
          ></i>
          <div className="gradient-overlay"></div>
        </div>
        <div className="flex-wrapper">
          <div className="section">
            <div className="gradient-2-overlay"></div>
            <div
              className={colleft ? "col-left fade-in-left" : "col-left"}
              id="col-left"
            >
              <h2>
                {" "}
                SO YOU LIKE TO <span className="highlight-secondary">GROW</span>
                ?
              </h2>
              <div className="paragraph">
                Lorem ipsum dolor sit amet, elementum curabitur ac vel lacus
                vulputate, vivamus tellus ante rutrum dictum. Risus morbi eros
                etiam vel, ipsum nec porttitor, sit wisi eu dictum in curae
                ipsum. <br />
                <br />
                Non in wisi tellus, proin in id, consectetuer wisi et orci
                gravida et augue, amet arcu. Tortor lectus nulla vitae lectus
                vestibulum, vel a nulla erat, tempor ipsum quis vestibulum
                malesuada quam dictum, et scelerisque mattis justo, nec euismod
                nisl. Vitae viverra a. Ante sed dolor, augue a lorem neque eu,
                sed aliquet euismod fermentum. Vitae justo fringilla at, vivamus
                natoque ultrices, elit vivamus vitae fermentum volutpat tellus
                per, sed elit massa in, sint torquent duis dolor lacus diam in.
                Ultrices vitae at sed enim pellentesque, leo purus magna sit
                pulvinar sit, vitae dui dui, diam nunc eget non, lectus sit
                nulla libero gravida. Sed lacinia augue.{" "}
              </div>
            </div>
            <div
              className={colright ? "col-right fade-in-bottom" : "col-right"}
              id="col-right"
            >
              <div className="col-right-overlay"></div>
              Give your career a head start by applying for an internship at
              Hofars!
              <div className="input-container">
                <input type="text" placeholder="Your name" />
                <input type="email" placeholder="Email" />
              </div>
              <button
                id="countmein"
                className="full-width"
                onClick={() => console.log("yo")}
              >
                Count Me In!
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HofarsIP;
