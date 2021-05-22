import React from 'react'
import styled from 'styled-components';
import ImageSection from '../components/ImageSection';
import Title from '../components/Title';
import {MainLayout} from '../Styles/Layout';

function About() {
    return (
       <MainLayout>
            <AboutStyled>
              <Title title={'About'}span={'About Me'} ></Title>
              <ImageSection />
        </AboutStyled>
       </MainLayout>
    )
}

const AboutStyled = styled.section `
 
`;

export default About
