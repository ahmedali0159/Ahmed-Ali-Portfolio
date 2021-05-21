import React from 'react'
import styled from 'styled-components';
import {MainLayout, InnerLayout} from '../Styles/Layout';
import Title from '../components/Title';
import ProgressBar from './ProgressBar';

function SkillsSection() {
    return (
      <SkiilsSectionStyled>
        <MainLayout>
          <Title title={'My Skills'} span={'My skills'} />
          <InnerLayout>
            <div className="skills">
              <ProgressBar 
                title={'JavaScript'} 
                width={'70%'}
                text={'70%'}             
              />
              <ProgressBar 
                title={'Node.JS'} 
                width={'70%'}
                text={'70%'}             
              />
              <ProgressBar 
                title={'React.JS'} 
                width={'75%'}
                text={'75%'}             
              />
              <ProgressBar 
                title={'HTML5'} 
                width={'95%'}
                text={'95%'}             
              />
              <ProgressBar 
                title={'CSS3'} 
                width={'85%'}
                text={'85%'}             
              />
              <ProgressBar 
                title={'ES6'} 
                width={'70%'}
                text={'70%'}             
              />
            </div>
          </InnerLayout>
          </MainLayout>
      </SkiilsSectionStyled>
    )
}

const SkiilsSectionStyled = styled.div `
  .skills{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 3rem;
    grid-row-gap: 2rem;
  }

`;

export default SkillsSection
