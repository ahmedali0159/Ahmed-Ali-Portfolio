import React from 'react'
import Projects from '../components/Projects'
import Title from '../components/Title'

function Portfolio() {
    return (
        <div className="portfolio-page">
            <div className="portfolio">
            <Title title={"Portfolio"} span={"My Projects"} />
            <Projects/>
            </div>
        </div>
    )
}

export default Portfolio
