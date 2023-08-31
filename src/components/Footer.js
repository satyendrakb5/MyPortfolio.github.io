import { FaHome,FaRegUser, FaMailBulk, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa"
import "../components/FooterStyles.css"

import React from 'react'
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <h4>About Me</h4>
                <p>Hello, I'M TechEthusiast</p>
                <div className="social">
                <Link to="https://github.com/satyendrakb5">
                <FaGithub size={30} style={{color:"white",marginRight: "1rem"}}/></Link>
                <Link to="https://www.linkedin.com/in/satyendra-kumar-baghel-329212250">
                <FaLinkedin size={30} style={{color:"white",marginRight: "1rem"}}/></Link>
                <FaInstagram size={30} style={{color:"white",marginRight: "1rem"}}/>
                </div>
            </div>


            <div className="right">
                <div className="location">
                
                    <FaHome size={20} style={{color:"white",marginRight: "2rem"}}/>
                <div>
                    <p>Varanasi</p>
                    <p>Uttar-Pradesh(221008)</p>

                </div>
                </div>

                <div className="phone">
                <h4> <FaRegUser size={20} style={{color:"white",marginRight: "2rem"}}/>
                +9196210XXXX</h4>
                </div>

                <div className="email">
                <Link to="/contact"><h4> <FaMailBulk size={20} style={{color:"white",marginRight: "2rem"}}/>
                satyendrakumarbaghel5@gmail.com</h4></Link>
                
                </div>

            </div>
        </div>
    </div>
  )
}

export default Footer