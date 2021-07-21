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
            <span>Hofars</span>
          </h3>
          <p class="footer-links">
            <a href="#">Home</a>.<a href="#">Blog</a>.<a href="#">Pricing</a>.
            <a href="#">Faq</a>.<a href="#">Contact</a>
          </p>

          <p class="footer-company-name">Hofars © 2021</p>

          <div class="footer-icons">
            <a href="#">
              <i class="fa fa-facebook"></i>
            </a>
            <a href="#">
              <i class="fa fa-twitter"></i>
            </a>
            <a href="#">
              <i class="fa fa-linkedin"></i>
            </a>
            <a href="#">
              <i class="fa fa-github"></i>
            </a>
          </div>
        </div>

        <div class="footer-right">
          <p>Contact Us</p>

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
