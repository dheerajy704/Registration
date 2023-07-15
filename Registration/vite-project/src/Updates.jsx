import React from 'react'
import blone from "./assets/Image/blone.png";
import bltwo from "./assets/Image/bltwo.png";
import blthree from "./assets/Image/blthree.png"

const Updates = () => {
  return (
    <div>
       <section className="update-news">
        <div className="up-center-text">
            <h2>New Updates</h2>
        </div>
        <div className="update-cart">

        <div className="cart">
            <img src = {blone} alt=""/>
            <h5>20 Dec 2022</h5>
            <h4>Let's start bring sale on this summer vacation.</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus eius ducimus expedita consectetur quos rerum voluptas magnam officiis laudantium! Voluptatum quibusdam eum cum dolore voluptatibus nihil libero quisquam error? Dolore?</p>
            <h6>Continue Reading..</h6>
       
        </div>

        <div className="cart">
            <img src = {bltwo} alt=""/>
            <h5>20 Dec 2022</h5>
            <h4>Let's start bring sale on this summer vacation.</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus eius ducimus expedita consectetur quos rerum voluptas magnam officiis laudantium! Voluptatum quibusdam eum cum dolore voluptatibus nihil libero quisquam error? Dolore?</p>
            <h6>Continue Reading..</h6>
       
        </div>

        <div className="cart">
            <img src = {blthree} alt=""/>
            <h5>20 Dec 2022</h5>
            <h4>Let's start bring sale on this summer vacation.</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus eius ducimus expedita consectetur quos rerum voluptas magnam officiis laudantium! Voluptatum quibusdam eum cum dolore voluptatibus nihil libero quisquam error? Dolore?</p>
            <h6>Continue Reading..</h6>
        </div>
    </div>
    </section>
    </div>
  )
}

export default Updates
