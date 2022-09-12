import React from 'react'
import "./Gumball.css"
import {useState,useEffect,useRef} from "react";

import{gsap} from "gsap";

import sakura from "../images/sakura.PNG";
function Gumball() {
  
  const [BallState,setBallState]=useState(false);
  const [BallClick,setBallClick]=useState(false);
  const capsule=useRef();
  const tl=useRef();
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
    let ball=document.getElementById("caps15");
    let note=document.getElementById("Note");
    let top_card=document.getElementById("top_note")
    const css = window.document.styleSheets[0];
      css.insertRule(`
      @keyframes enlarge {
        0% {transform: translateY(380px) rotate(100deg); z-index:101;}
        99% {transform:translate(-100px,10px) rotate(350deg); z-index:1000; height:130px; width:130px;}
        100%{display:none}
      }`, css.cssRules.length);
    if (BallState==true){
      ball.style.animation="enlarge 3s forwards";
      setTimeout(function(){
        note.style.setProperty("animation","card_container linear 2s forwards");
        top_card.style.setProperty("animation","top_card_enlarge linear 2s forwards");
      },3000)
      setTimeout(function(){
        Retrieve();
      },5000)
      setBallClick(true)
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
    bottom_note.append(localStorage.getItem("quote"));
    console.log(localStorage.getItem("quote"));
  }
  return (
    <div className="Gumball_container">
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
          }></div>
            <div className="card_container" id="Note">
              <div className="top_note" id="top_note"
                style={{backgroundImage:`url(${sakura})`}}>
              </div>
              <div className="bottom_card" id="bottom_note">
              </div>
            </div>
        </div>
        <div className="Gumball_body GumBall">
          <div className="Gumball_turn GumBall" onClick={()=>{
            ShakeEffect();
            HandleTurn();
            BallDrop();
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