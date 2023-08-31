import "../components/HeroImgStyles.css";

import React from 'react';
import myphoto from "../assets/myphoto.jpg";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
<div className="mask">
<img className="into-image" src={myphoto} alt="myphoto"/>
</div>
<div className="content">
<p>HI, I'M SATYENDRA</p>
<h1>Full-Stack Developer.</h1>
<div>
    <Link to="/project" className="btn">Projects</Link>
    <Link to="/contact" className="btn btn-light">Contact</Link>
</div>
</div>
    </div>
    
  )
}

export default HeroImg