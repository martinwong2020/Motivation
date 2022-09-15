import React from 'react'
import "./Gumball.css"
import {useState,useEffect,useRef} from "react";

import{gsap} from "gsap";

import sakura from "../images/sakura.PNG";
import DB from './Database'
function Gumball() {
  
  const [BallState,setBallState]=useState(false);
  const [CardOut,setCardOut]=useState(false);
  const capsule=useRef();
  // useEffect(()=>{
  //   if (BallState==true){
  //     console.log("went");
  //     // gsap.to(capsule.current,{

  //     // });
  //     let ball=document.getElementById("caps11");
  //     gsap.to(ball,{
  //       x:getWidth()/2,
  //       y:getHeight()/2
  //     })
  //   }
  // },[BallClick]);
  function ShakeEffect(){
    console.log("Here")
    let machine=document.getElementsByClassName("GumBall");
    Object.keys(machine).forEach(function(key,value){
      machine[key].style.setProperty("animation","shake 0.5s");
    })
    
  }
  function HandleTurn(){
    let handle=document.getElementsByClassName("Gumball_handle");
    handle[0].style.setProperty("animation","turn 0.5s");
  }
  function BallDrop(){
  
    let ball=document.getElementById("caps15");
    ball.style.setProperty("animation","roll 1.5s forwards");
    setBallState(true)
  }

  function CapsuleOpen(){
    console.log(BallState);
    let ball=document.getElementById("caps15");
    let note=document.getElementById("Note");
    let top_card=document.getElementById("top_note");
    let bottom_card=document.getElementById("bottom_note");
    // const css = window.document.styleSheets[0].insertRule(`
    //   @keyframes enlarge {
    //     0% {transform: translateY(380px) rotate(100deg); z-index:101;}
    //     100% {transform:translate(-100px,10px) rotate(350deg); z-index:1000; height:130px; width:130px;}   
    //   }`, window.document.styleSheets[0].cssRules.length);

    if (BallState==true){
      // ball.style.animation="enlarge 3s forwards";
      // ball.style.setProperty("top","1330px");
      ball.style.setProperty("animation","enlarge linear 3s forwards");
      setTimeout(function(){
        note.style.setProperty("animation","card_container linear 2s forwards");
        top_card.style.setProperty("animation","top_card_enlarge linear 2s forwards");
        bottom_card.style.setProperty("animation","bottom_card_enlarge linear 2s forwards");
        
      },3000)
      setTimeout(function(){
        ball.style.animation="";
        // Retrieve();
        getData();
      },5000)
      setCardOut(true)
    }
    
  }

  // function getWidth() {
  //   return Math.max(
  //     document.body.scrollWidth,
  //     document.documentElement.scrollWidth,
  //     document.body.offsetWidth,
  //     document.documentElement.offsetWidth,
  //     document.documentElement.clientWidth
  //   );
  // }
  
  // function getHeight() {
  //   return Math.max(
  //     document.body.scrollHeight,
  //     document.documentElement.scrollHeight,
  //     document.body.offsetHeight,
  //     document.documentElement.offsetHeight,
  //     document.documentElement.clientHeight
  //   );
  // }

  function Retrieve(){
    let bottom_note=document.getElementById("bottom_note");
    let result= JSON.parse(localStorage.getItem("Submissions"));
    let rand_num=Math.floor(Math.random()*Object.keys(result).length);
    
    bottom_note.append(result[rand_num]);
    // console.log(localStorage.getItem("quote"));
  }
  let state={
    db:new DB(),
    quotes: {}
  }
  function getData(){
    let num=Math.ceil(Math.random()*25);
    let quote_id="quote"+num.toString();
    let bottom_note=document.getElementById("bottom_note");
    state.db.getQuoteId(quote_id,bottom_note);
  }

  function reset(){
    let note=document.getElementById("Note");
    let top_card=document.getElementById("top_note");
    let bottom_note=document.getElementById("bottom_note");
    note.style.setProperty("animation","card_container_shrink linear 2s forwards");
    top_card.style.setProperty("animation","top_card_shrink linear 2s forwards");
    bottom_note.style.setProperty("animation","bottom_card_shrink linear 2s forwards");
    bottom_note.innerHTML="";

    let machine=document.getElementsByClassName("GumBall");
    Object.keys(machine).forEach(function(key,value){
      machine[key].style.removeProperty("animation","shake 0.5s");
    })


    let ball=document.getElementById("caps15");
    if (BallState==true){
      // ball.style.animation="";
      setBallState(false);
    }
    setCardOut(false);
  }
  function randocolor(){
    let colors=[
      "linear-gradient(150deg,rgb(91, 212, 87),rgb(91, 212, 87) 50%,white 51%)",
      "linear-gradient(150deg,rgb(253, 255, 159),rgb(231, 233, 125) 50%,white 51%)",
      "linear-gradient(105deg,rgb(111, 111, 204),rgb(111, 111, 204) 50%,white 51%)",
      "linear-gradient(100deg,rgb(125, 184, 233),rgb(125, 184, 233) 50%,white 51%);",
      "linear-gradient(300deg,rgb(228, 105, 105),rgb(228, 105, 105) 50%,white 51%)"
    ]
    let border_col=[
      "solid 5px rgb(123, 233, 101)",
      "solid 5px rgb(231, 235, 0)",
      "solid 5px rgb(85, 85, 247)",
      "solid 5px rgb(57, 130, 190)",
      "solid 5px rgb(228, 59, 59)"
    ]
  let num=Math.floor(Math.random()*5);
  return colors[num];
  }
  useEffect(()=>{
    let colors=[
      "linear-gradient(150deg,rgb(91, 212, 87),rgb(91, 212, 87) 50%,white 51%)",
      "linear-gradient(150deg,rgb(253, 255, 159),rgb(231, 233, 125) 50%,white 51%)",
      "linear-gradient(105deg,rgb(111, 111, 204),rgb(111, 111, 204) 50%,white 51%)",
      "linear-gradient(100deg,rgb(125, 184, 233),rgb(125, 184, 233) 50%,white 51%);",
      "linear-gradient(300deg,rgb(228, 105, 105),rgb(228, 105, 105) 50%,white 51%)"
    ]
    let border_col=[
      "solid 5px rgb(123, 233, 101)",
      "solid 5px rgb(231, 235, 0)",
      "solid 5px rgb(85, 85, 247)",
      "solid 5px rgb(57, 130, 190)",
      "solid 5px rgb(228, 59, 59)"
    ]
  let num=Math.floor(Math.random()*5);
  let cap=document.getElementById("caps15");
  cap.style.setProperty("background",colors[num]);
  cap.style.setProperty("border",border_col[num]);
  },[]);
  return (
    <div className="Gumball_container" id="Gumball_container">
      <div className="Gumball_machine">
        <div className="Handle GumBall">
          <div className="Handle_content GumBall"></div>
        </div>
        <div className="Lid GumBall">

        </div>
        <div className="Glass_container">
          <div className="capsule GumBall" id="caps1"></div>
          <div className="capsule GumBall" id="caps2"></div>
          <div className="capsule GumBall" id="caps3"></div>
          <div className="capsule GumBall" id="caps4"></div>
          <div className="capsule GumBall" id="caps5"></div>
          <div className="capsule GumBall" id="caps6"></div>
          <div className="capsule GumBall" id="caps7"></div>
          <div className="capsule GumBall" id="caps8"></div>
          <div className="capsule GumBall" id="caps9"></div>
          <div className="capsule GumBall" id="caps10"></div>
          <div className="capsule GumBall" id="caps11"></div>
          <div className="capsule GumBall" id="caps12"></div>
          <div className="capsule GumBall" id="caps13"></div>
          <div className="capsule GumBall" id="caps14"></div>
          <div className="capsule GumBall" id="caps15" ref={capsule} onClick={
            ()=>{
              CapsuleOpen();
            }
          } ></div>
            <div className="card_container" id="Note" onClick={
              ()=>{
                reset();
              }
            }>
              <div className="top_note" id="top_note"
                style={{backgroundImage:`url(${sakura})`}}>
              </div>
              <div className="bottom_card" id="bottom_note">
              </div>
            </div>
        </div>
        <div className="Gumball_body GumBall">
          <div className="Gumball_turn GumBall" onClick={()=>{
            if(CardOut==false){
              ShakeEffect();
              HandleTurn();
              BallDrop();
            }
          }}>
            <div className="Gumball_handle GumBall">
            </div>
          </div>
          <div className="Gumball_text GumBall">
            <h5>Inspire</h5>
          </div>
          <div className="Gumball_output GumBall">

          </div>
        </div>
      </div>
    </div>
  )
}

export default Gumball