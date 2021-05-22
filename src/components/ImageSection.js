import React from 'react'
import styled from 'styled-components';
import resume from '../images/Ahmed avatar.jpg';
import PrimaryButton from './PrimaryButton';

function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={resume} alt="" />
            </div>
            <div className="right-content">
                    <h4>I am <span>Ahmed Ali</span></h4>
                  <p className="paragraphy">
                I am a frontend web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Address</p>
                    </div>
                    <div className="info">
                        <p>: Ahmed Ali</p>
                        <p>: 22</p>
                        <p>: Banladesh</p>
                        <p>: Bangla, English</p>
                        <p>: Uttar badda, Dhaka-1212</p>
                    </div>
                </div>
               <a href="https://github.com/ahmedali0159" target="blank">
               <PrimaryButton title={'Download Cv'}></PrimaryButton>
               </a>
            </div>
        </ImageSectionStyled>
    )
}

const ImageSectionStyled =  styled.div `
    margin-top: 5rem;
    display: flex;
    @media screen and (max-width: 1000px){
        flex-direction: column;
   }
   @media screen and (max-width: 450px){
       .right-content .info-title{
           display: none;
       }
   }
  
    .left-content{
        width: 100%;
        img{
            width:95%;
            height: 100%;
            object-fit: cover;
        }
    }
    .right-content{
        width: 100%;
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
                color: var(--primary-color);
            }
        }
        .paragraphy{
            padding:1rem 0;
        }
        .about-info{
            display: flex;
            padding-bottom: 1.5rem;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
              p{
                padding: .3rem 0;
              }
            }
        }
      
    }
`;
export default ImageSection
