import { upload } from '@testing-library/user-event/dist/upload'
import React from 'react';
import "./Inspire.css";

import sakura from "../images/sakura.PNG";
// import PouchDB from 'pouchdb-browser';
// import {Provider} from 'use-pouchdb';


function Upload(){
  let submission=document.getElementById("quote_sub").textContent;
  let quotes=JSON.parse(localStorage.getItem("Submissions"));
  let quote_len=Object.keys(quotes).length;
  if (quote_len<=10){
    quotes[quote_len+1]=submission;
    localStorage.setItem("Submissions",JSON.stringify(quotes));
  }
  
  // console.log(JSON.parse(localStorage.getItem("Submissions"))[1]);
  // localStorage.setItem("quote",submission);
  alert("Appreciate your inspirations.");
  console.log(localStorage.getItem("Submissions"));

}
function Donation() {
  // let quotes=
  //   {
  //     1:"Opportunities don't come, they are created!",
  //     2:"If not today, not tomorrow, then when?",
  //     3:"Success comes from learning and new experience.",
  //     4:"Fortune favors the bold.",
  //     5:"The best time to plant the tree was 20 years ago. The next best time is now!"
  //   }
  // localStorage.setItem("Submissions",JSON.stringify(quotes));
  // const db= new PouchDB('local');

  return (
    <div className="body" id="Inspire_container">
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
