import React from 'react'
import Title from '../components/Title'
import ImageSection from './ImageSection';


function About() {
    return (
        <div className="about-page">
           <Title title={'About Me'}  span={'About Me'}/>
           <ImageSection/>
        </div>
    )
}

export default About
