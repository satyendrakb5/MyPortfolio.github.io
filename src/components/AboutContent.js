
import "./AboutContentStyles.css"

import React from 'react'
import { Link } from "react-router-dom";
import react from "../assets/react.png"
import react2 from "../assets/react2.jpg"

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I ?</h1>
            <p>I'm a <b>Full Stack Developer.</b></p>
        <Link to="/contact">
            <button className="btn">Contact</button>
        </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={react} className="img" alt="codingimg"/>
                </div>
                <div className="img-stack bottom">
                    <img src={react2} className="img" alt="react"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent;