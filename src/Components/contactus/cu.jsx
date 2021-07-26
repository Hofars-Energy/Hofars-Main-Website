import React, { Component } from "react";
import "./contactus.css";
import img from "../../images/img.png";

const Contactus = () => {
  return (
    <div className="cu">
      <footer class="footer-distributed">
        <div class="footer-left">
          <h3>
            <img src={img} id="hofarslogo"></img>
            <span
              style={{
                paddingTop: "5px",
                fontSize: "15vh",
              }}
            >
              Hofars
            </span>
          </h3>
          {/* <p class="footer-links">
            <a href="#">Home</a>.<a href="#">Blog</a>.<a href="#">Pricing</a>.
            <a href="#">Faq</a>.<a href="#">Contact</a>
          </p> */}

          <p class="footer-company-name">Hofars © 2021</p>
          <p
            style={{
              paddingTop: "5px",
              fontSize: "15vh",
              bottom: "5px",
              position: "relative",
              top: "10vh",
            }}
          >
            Contact Us
          </p>
        </div>

        <div class="footer-right">
          <form action="#" method="post">
            <input type="text" name="Name" placeholder="Your Name" />

            <input type="text" name="email" placeholder="Email" />

            <input type="text" name="Subject" placeholder="Subject" />

            <textarea name="message" placeholder="Message"></textarea>
            <button>Send</button>
          </form>
        </div>
      </footer>
    </div>
  );
};

export default Contactus;
