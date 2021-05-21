import React from 'react'
import styled from 'styled-components';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Home() {
    return (
        <HomePageStyled>
            <div className="typhography">
                <h1>Hi, I am<span> Ahmed Ali</span></h1>
                <p>I am a frontend web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.</p>
                <div className="icons">
                    <a href="https://twitter.com/AhmedAl71975127" target="blank" className="icon twitter">
                        <TwitterIcon />
                    </a>
                    <a href="https://github.com/ahmedali0159" target='blank' className="icon github">
                        <GitHubIcon />
                    </a>
                    <a href="https://www.linkedin.com/in/ahmed-ali26/" target="blank" className="icon linkedin">
                        <LinkedInIcon />
                    </a>
                </div>
            </div>
           
        </HomePageStyled>
    )
}

const HomePageStyled = styled.header `
    width: 100%;
    height: 100vh;
    position: relative;
    .typhography{
        position: absolute;
        top:50%;
        left:50%;
        transform:translate(-50%, -50%);
        text-align: center;
        width:80%;
        .icons{
            display: flex;
            justify-content: center;
            margin-top:1rem;
            .icon{
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: All .4s ease-in-out;
                cursor:pointer;
                &:hover{
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                }
                &:not(:last-child){
                    margin-right:1rem;
                }
                svg{
                    margin:.5rem;
                }
            }
        }
    }
`;

export default Home;
