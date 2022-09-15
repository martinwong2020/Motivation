import { upload } from '@testing-library/user-event/dist/upload'
import React, { useEffect } from 'react';
import "./Inspire.css";

import sakura from "../images/sakura.PNG";
// import PouchDB from 'pouchdb-browser';
// import {Provider} from 'use-pouchdb';
import DB from './Database'

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
  let state={
    db:new DB(),
    quotes: {}
  }
  async function printcontent(quote){
    // return await state.db.getQuoteId(quote)
    await state.db.DestroyDB();
  }
  useEffect(()=>{
    // printcontent("w");
    // state.db.createQuotes("Hi");
    // state.db.remove25();
    // console.log("before")
    state.db.create25();
    // console.log(state.db.getAllQuotes());
    // console.log("after")
    // // console.log(state.db.GetRev("quote2"));
    // // console.log(state.db.createQuotes("ye"));
    // console.log(state.db.getQuoteId("quote3"));
    // let text=document.getElementById("quote_sub");
    // // text.append();
    // state.db.getQuoteId("quote2",text);
    // console.log(printcontent("quote3"));
  },[]);
  async function SubmitQuote(){
    let submission= document.getElementById("quote_sub").textContent;
    await state.db.getAllQuotes();
    await state.db.createQuotes(submission);
    // console.log(state.db.getAllQuotes());
    
  }
  
  return (
    <div className="body" id="Inspire_container">
      <div className="card_outer">
        <div className="card_container">
          <div className="top_card"
            style={{backgroundImage:`url(${sakura})`,}}>
          </div>
          <div type="text" id="quote_sub" className="bottom_card" contentEditable="true" data-text="Inspire Others Here:" onKeyDown={(e)=>{
            if(e.key=="Enter"){
              // console.log("we");
              // Upload();
              SubmitQuote();

            }
          }}>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Donation
