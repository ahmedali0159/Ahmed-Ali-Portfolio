import React from 'react'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Home() {
    return (
        <div className="homePage">
           <header className="hero">
               <h1 className="hero-text">
                   Hello I am <span>Ahmed Ali</span>
               </h1>
            
               <h3 className="h-sub-text">MERN Stack Developer</h3>
              {/* <div className="resume">
              <button className="bt-hover" style={{backgroundColor:'#ff9063', border:'1px solid #ff9063', padding:'10px'}}>Resume</button>
              </div> */}
               <div className=" icons">
                <a href="https://www.linkedin.com/in/ahmed-ali26/" target="blank" className="icon-holder">
                <FontAwesomeIcon icon={faLinkedin} className="icon ln"/>
                </a>
                <a href="https://github.com/ahmedali0159" target="blank"  className="icon-holder">
                <FontAwesomeIcon icon={faGithub} className="icon gh"/>
                </a>
               </div>
           </header>
            
        </div>
    )
}

export default Home
