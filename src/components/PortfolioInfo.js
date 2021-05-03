import React from 'react'

function PortfolioInfo(props) {
    const {name, img, description} = props.portfolio;
    return (
      <div className="col-md-4 card-main">
            <div className="card">
           <div className="image-container">
               <img src={img}  alt=""/>
           </div>
           <div className="card-content">
           <div className="card-title">
                <h3>{name}</h3>
            </div>
            <div className="card-body">
                <p>{description}</p>
            </div>
           </div>
            <div className="show">
               <a href="">
                   <button className="btn github">
                       Github
                   </button>
               </a>
               <a href="">
                   <button className="btn github">
                       Github
                   </button>
               </a>
               <a href="">
                   <button className="btn github">
                       Live
                   </button>
               </a>
            </div>
       </div>
      </div>
    )
}

export default PortfolioInfo
