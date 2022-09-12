import { upload } from '@testing-library/user-event/dist/upload'
import React from 'react';
import "./Inspire.css";
import sakura from "../images/sakura.PNG";

function Upload(){
  let submission=document.getElementById("quote_sub").textContent;
  console.log(submission);
  localStorage.setItem("quote",submission);
  alert("Thank you for inspiring others.");
  // console.log(localStorage.getItem("quote"));

}
function Donation() {
  return (
    <div className="body">
      <div className="card_outer">
        <div className="card_container">
          <div className="top_card"
            style={{backgroundImage:`url(${sakura})`,}}>
          </div>
          <div type="text" id="quote_sub" className="bottom_card" contentEditable="true" data-text="Inspire Others Here:" onKeyDown={(e)=>{
            if(e.key=="Enter"){
              console.log("we");
              Upload();
            }
          }}>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Donation
