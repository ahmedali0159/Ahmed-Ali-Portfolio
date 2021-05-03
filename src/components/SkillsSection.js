import React from 'react'

function SkillsSection({skill, progress, width}) {
    return (
        <div className="skill-section">
            <div className="skills-container">
                <h5 className="skills-title">{skill}</h5>
                    <div className="skills-bar">
                        <p className="skills-text">{progress}</p>
                        <div className="skills-progress">
                            <div className="progress-bar">
                                <div className="inner-progress" style={{width:width}}></div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default SkillsSection;
