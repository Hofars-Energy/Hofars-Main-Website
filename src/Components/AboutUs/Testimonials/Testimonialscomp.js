import React from "react";
import "./Testimonialscomp.css";

const Testimonialscomp = (props)=>
{
  return (
  <div>
  <div class="container">
   <img src = {props.prof} />
  <p> <span> Akriti Mishra </span> <br></br> CEO at Hofars</p>
  <p> John Doe saved us from a web disaster.</p>
  </div>
</div>
)}

export default Testimonialscomp;