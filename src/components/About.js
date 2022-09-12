import React from 'react'
import "./About.css"
import light_img from "../images/japan_light.jpg";

function About() {
  return (
    <div className="about_container">
      <div className="text_container">
        <div>
          <h1 className="title">About The Project INSPIRE:</h1>
          <div className="about_text_container">
            <h3 className="about_text"> 
              The Inspiration behind the project is to develop a website that can help 
              uplift and motivate others. As a person that deviates from what I need to
              focus on, this project also helps to inspire my continual development in front-end
              coding. This project is to help create a positive impact to the community by spreading
              positivity and motivational speech to others. Help others by submitting an uplifiting 
              speech to bring others up.
              
            </h3>
          </div>
        </div>
      </div>
      <div className="img_container">
        <div className="about_card_outer">
            <div className="about_card_container">
              <div className="about_top_card"
                style={{backgroundImage:`url(${light_img})`,}}>
              </div>
              <div type="text" id="quote_sub" className="about_bottom_card">
                <h3>Motivation starts with you</h3>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About