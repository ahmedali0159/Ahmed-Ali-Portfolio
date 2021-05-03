import React from 'react'
import Title from '../components/Title'
import ImageSection from '../components/ImageSection';
import SkillsSection from '../components/SkillsSection';


function About() {
    return (
        <div className="about-page">
           <Title title={'About Me'}  span={'About Me'}/>
           <ImageSection/>
           <Title title={'My Skills'}  span={'My Skills'}/>
           <div className="skills-set">
           <SkillsSection skill={'JavaScript'} progress={'70%'} width={'70%'} />
           <SkillsSection skill={'React'} progress={'70%'} width={'70%'} />
           <SkillsSection skill={'Node.Js'} progress={'60%'} width={'60%'} />
           <SkillsSection skill={'React Router'} progress={'90%'} width={'90%'} />
           <SkillsSection skill={'MongoDb'} progress={'85%'} width={'85%'} />
           <SkillsSection skill={'Material Ui'} progress={'55%'} width={'55%'} />
           <SkillsSection skill={'Bootstrap'} progress={'80%'} width={'80%'} />
           <SkillsSection skill={'HTML'} progress={'95%'} width={'95%'} />
           <SkillsSection skill={'SCSS'} progress={'70%'} width={'70%'} />
           <SkillsSection skill={'CSS'} progress={'75%'} width={'75%'} />
           </div>
        </div>
    )
}

export default About
