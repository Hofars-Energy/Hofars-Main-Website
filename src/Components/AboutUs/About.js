import "./About.css";
import React from "react";
import CardContainer from "./Container/CardContainer.js";
import about_header from "./Container/imgs/about_us.jpg";
import Testimonials from "./Testimonials/Testimonials";


const About=()=>
{

  return(
  <div>
  <section className="about-us">
         <img src = "about_header" alt =""/>
        <h1 >About Us</h1>
        <p></p>
        <br></br>
  </section>
  <CardContainer/> 
  <Testimonials/>
  </div>
 
  );
}
 
export default About;





