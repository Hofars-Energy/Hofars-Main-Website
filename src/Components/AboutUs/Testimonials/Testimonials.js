import React from "react";
import Testimonial from "./Testimonialscomp";
import prof1 from "../Container/imgs/prof1.jpg";

const Testimonials = (props)=>
{
  const styleObj1 = {
      color: "",
      fontSize: "45px",
      textAlign: "center", 
      paddingTop: "80px",
      paddingBottom :"40px",
}

  return (

 <div>
 <div class="testi-container">
  <div> 
  <h2  style = {styleObj1}> <i> Testimonials </i></h2>
  <Testimonial prof ={prof1} title = "Akriti Mishra " header = "CEO at Hofars" cont = "Jaguar shark! So tell me - does it really exist? Checkmate... Eventually, you do plan to have dinosaurs on your dinosaur tour, right? Yeah" />;
  <Testimonial prof ={prof1} title = "Akriti Mishra " header = "CEO at Hofars" cont = "Jaguar shark! So tell me - does it really exist? Checkmate... Eventually, you do plan to have dinosaurs on your dinosaur tour, right? YeahJohn Doe saved us from a web disaster." />;
  <Testimonial prof ={prof1} title = "Akriti Mishra " header = "CEO at Hofars" cont = "John Doe saved us from a web disaster.Jaguar shark! So tell me - does it really exist? Checkmate... Eventually, you do plan to have dinosaurs on your dinosaur tour, right? YeahJaguar shark! So tell me - does it really exist? Checkmate... Eventually, you do plan to have dinosaurs on your dinosaur tour, right? Yeah" />
 </div>
  </div>
  </div>
)
}

export default Testimonials;
