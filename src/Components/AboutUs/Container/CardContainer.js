import React from "react";
import Cardcomp from "./Cardcomp";
import about1 from "./imgs/about1.PNG";
import about2 from "./imgs/about_2.PNG";
import about3 from "./imgs/about_3.PNG";

const styleObj = {
      color: "",
      fontSize: 55,
      textAlign: "center",
      paddingTop: "40px",
      }
const styleObj1 = {
      color: "",
      fontSize: 45,
      textAlign: "center",
      paddingTop: "50px",
      }

const CardContainer=()=>
{
  return(
  <div>
  <h2 style = {styleObj1}> <i> Why Hofars </i></h2>
  <section style = {styleObj} class="grid grid-template-columns-4">  
  < Cardcomp 
    imgsc ={about1}
    headcon = "IT"
    content = "Competent Strike with Precision"
    
    />
    <Cardcomp 
    imgsc = {about2}
    headcon = "Energy"
    content = "Competent Strike with Precision"
    
    />
    <Cardcomp
    imgsc = {about3}
    headcon = "HR"
    content = "Competent Strike with"
    content2 = "Precision" />
    </section>
    </div>
  );
}

  
  
export default CardContainer;
