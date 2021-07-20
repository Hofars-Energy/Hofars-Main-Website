import React from 'react';
const styleObj = {
      color: "",
      fontSize: 55,
      textAlign: "center",
      paddingTop: "60px",
      }
    const cont = {
      color: "",
      fontSize: 25,
      textAlign: "center", 
      }


const Cardcomp=(props)=>
{
return (
  <div class="item"> 
       <img src = {props.imgsc} />
       <p style = {cont}> <b>{props.headcon}</b> <br></br> 
       <i>{props.content}<br></br> {props.content2} </i> </p>
  </div>
  );
}
export default Cardcomp;