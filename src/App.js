
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from 'react-router-dom';
import {useState,useEffect,useRef} from "react";
import './App.css';
import About from './components/About'
import Gumball from './components/Gumball';
import Donation from './components/Donation';
import { HashLink } from 'react-router-hash-link';

import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";


// import PouchDB from 'pouchdb-browser';
// const db = new PouchDB('mydb');
let remoteCouch = false;
// let remoteCouch = false;
// db.changes({
//   since: 'now',
//   live: true
// }).on('change', showMsg);
// function addMsg(text){
//   let todo = {
//     _id: new Date().toISOString(),
//     title: text,
//     completed: false
//   };
//   db.put(todo, function callback(err, result) {
//     if (!err) {
//       console.log('Successfully posted a todo!');
//     }
    
//   });
// }
// function showMsg() {
//   db.allDocs({include_docs: true, descending: true}, function(err, doc) {
//     redrawTodosUI(doc.rows);
//   });
// }
function App() {
  // addMsg("hello");
  let custom_msg=[
    "Hey! Try clicking on one of the navigation buttons.",
    "Have you tried the gumball?",
    "Are you ready to inspire?",
    "How's your day?",
    "Enjoy yourself!"
  ]
  async function type(sentence,delay=100){
    let letters=sentence.split("");
    let i=0
    let sen=document.getElementById("sentences");
    while (i<letters.length){
      await timer(delay);
      sen.append(letters[i]);
      i++;
    }
  }
  async function deletetext(){
    let sen=document.getElementById("sentences").textContent;
    let sen_div=document.getElementById("sentences");
    let letters=sen.split("");
    let i=letters.length;
    while(i>0){
      await timer(100);
      letters.pop();
      sen=letters.join("");

      sen_div.innerHTML="";
      sen_div.append(sen);
      i--;
    }
  }

  async function text_type(){
    await type("Hey, over here!");
    await timer(2000);
    await deletetext();
    let run=true;
    while (run) {
      let num=Math.floor(Math.random()*custom_msg.length);
      await type(custom_msg[num]);
      await timer(2000);
      await deletetext();
    }
  }
  function timer(delay){
    return new Promise(res=>{
      setTimeout(res,delay)
    })
  }
  
  useEffect(()=>{
    
    
    text_type();
  },[]);

  return (
    <BrowserRouter>
      <div className="App">
        <div className="Header">
          <ul className="Nav">
            <li>
              <HashLink className="NavIcon" smooth to="/about#about_container">About</HashLink>
              {/* <Link className="NavIcon" to="/about">About</Link> */}
            </li>
            <li>
              <HashLink className="NavIcon" smooth to="/gumball#Gumball_container">Gumball</HashLink>
            </li>
            <li>
              <HashLink className="NavIcon" smooth to="/donation#Inspire_container">Inspire</HashLink>
            </li>
          </ul> 
        </div>
        <div className="app_container">
          <div id="sentences" className="sentence"></div>
          <div className="cursor"></div>
        </div>
        <About/>
        <Gumball/>
        <Donation/>
        
      </div>
      
    </BrowserRouter>
  );
}

export default App;
