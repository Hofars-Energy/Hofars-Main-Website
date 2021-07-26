import React from 'react';
import "./CardContainer.css";
const styleObj = {
      color: "",
      fontSize: 55,
      textAlign: "center",
      paddingTop: "60px",
      }


const Cardcomp=(props)=>
{
return (
  <div class="box"> 
       <img src = {props.imgsc} />
       <p class = "head"> {props.headcon}</p>
       <p class = "head_content"><i>{props.content}</i> </p>
  </div>
  );
}
export default Cardcomp;