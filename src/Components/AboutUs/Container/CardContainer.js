import React from "react";
import Cardcomp from "./Cardcomp";
import "./CardContainer.css";
import about1 from "./imgs/about1.PNG";
import about2 from "./imgs/about_2.PNG";
import about3 from "./imgs/about_3.PNG";

const CardContainer=()=>
{
const hofar1 = {
    color: "",
    fontSize: "45px",
    textAlign: "center",
    paddingTop: "60px",
    paddingBottom: "30px",
}
const box_2 = {
  textAlign: "center",
}

  return(
  <div style = {box_2}>
  <h2 style = {hofar1}> <i> Why Hofars </i></h2>
  <div>
  <section class="grid grid-template-columns-4">  

  < Cardcomp 
    imgsc ={about1}
    headcon = "IT"
    content = "Competent Strike with Precision does it really exist? Checkmate... Eventually, you do plan to have dinosaurs on your dinosaur tour, right? Yeah"
    />

    <Cardcomp 
    imgsc = {about2}
    headcon = "Energy"
    content = "Competent Strike with Precision does it really exist? Checkmate... Eventually, you do plan to have dinosaurs on your dinosaur tour, right? Yeah" 
    />
    <Cardcomp
    imgsc = {about3}
    headcon = "HR"
    content = "Competent Strike with Precision does it really exist? Checkmate... Eventually, you do plan to have dinosaurs on your dinosaur tour, right? Yeah"
   />

    </section>
    </div>
</div>
  );
}

  
export default CardContainer;
