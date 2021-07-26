import React from "react";
import "./Testimonialscomp.css";

const Testimonialscomp = (props)=>
{
  return (
  <div>
  <div class="container">
  <img className = "img_cc" src = {props.prof}/>
  <p className = "header"> {props.title}  </p>
  <p className = "title_pos" > {props.header} </p>
  <p className = "content_prof"> {props.cont} </p>
  </div>
</div>
)}

export default Testimonialscomp;