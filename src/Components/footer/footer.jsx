import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              Hofars <i class="fas fa-radiation-alt ic"></i>
            </Link>
          </div>
          <small className="website-rights">Hofars © 2021</small>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/HofarsEnergy"
              className="social-icon-link facebook"
              target="_blank"
            >
              {" "}
              <i className="fab fa-facebook-f" />
            </a>

            <a
              href="https://www.instagram.com/hofars_energy/"
              className="social-icon-link instagram"
              target="_blank"
            >
              {" "}
              <i className="fab fa-instagram" />
            </a>
            <a
              href="https://www.linkedin.com/company/hofarsenergy"
              className="social-icon-link linkedin"
              target="_blank"
            >
              {" "}
              <i className="fab fa-linkedin" />
            </a>

            <a
              href="https://www.youtube.com/channel/UCfblGBSLQz5g63dUgisXRCA"
              className="social-icon-link youtube"
              target="_blank"
            >
              {" "}
              <i className="fab fa-youtube" />
            </a>

            {/* <a href="" className="social-icon-link github" target="_blank">
              {" "}
              <i className="fab fa-github" />
            </a> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
