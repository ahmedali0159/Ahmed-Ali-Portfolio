import React from 'react'
import about from '../images/hans.png';

function ImageSection() {
    return (
        <div className='image-section'>
           <div className="img">
                <img src={about} alt=""/>
           </div>
           <div className="about-info">
               <h4><span>Ahmed Ali</span></h4>
           <p className="about-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus labore, temporibus nobis ipsum qui iste.</p>
           <div className="about-details">
           <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Address</p>
                    </div>
                    <div className="right-section">
                        <p>: Ahmed Ali</p>
                        <p>: 22</p>
                        <p>: Bangladesh</p>
                        <p>: Bangla English Hindi</p>
                        <p>: Dhaka,Bangladesh</p>
                    </div>
                    </div>
           </div>
        </div>
    )
}

export default ImageSection;
