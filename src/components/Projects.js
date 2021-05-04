import React from 'react'
import laundry from '../images/Laundryes.png'
import blueBird from '../images/Bluebird Books.png'
import PortfolioInfo from './PortfolioInfo'
const portfolios = [
    {
        img: laundry,
        name: 'Laundryes',
        description: 'A full stack laundry app with firebase authentication'
    },
    {
        img: blueBird,
        name: 'Blue Bird Books',
        description: 'A full stack Book app with firebase authentication'
    },
    {
        img: laundry,
        name: 'Laundryes',
        description: 'A full stack laundry app with firebase authentication'
    },
    {
        img: laundry,
        name: 'Laundryes',
        description: 'A full stack laundry app with firebase authentication'
    }
]

function Projects() {
    return (
        <div>
            <h1>My projects</h1>
            <div className="row">
                {
                    portfolios.map(portfolio => <PortfolioInfo portfolio={portfolio}></PortfolioInfo>)
                }
            </div>
            

        </div>
    )
}

export default Projects;
