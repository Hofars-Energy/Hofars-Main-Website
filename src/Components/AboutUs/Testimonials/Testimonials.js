import React from "react";
import Testimonial from "./Testimonialscomp";
import prof1 from "../Container/imgs/prof1.jpg";

const Testimonials = (props)=>
{
  const styleObj1 = {
      color: "",
      fontSize: 45,
      textAlign: "center",
      paddingTop: "50px",
      }
  return (
  <div> 
  <h2  style = {styleObj1}> <i> Testimonials </i></h2>
  <Testimonial prof ={prof1} />;
  <Testimonial prof ={prof1} />;
  <Testimonial prof ={prof1} />
 
  </div>
)
}

export default Testimonials;
