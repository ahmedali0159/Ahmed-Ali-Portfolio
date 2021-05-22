import React from "react";
import styled from "styled-components";
import GitHubIcon from "@material-ui/icons/GitHub";
import VisibilityIcon from "@material-ui/icons/Visibility";

function Menu({ menuItem }) {
  return (
    <MenuStyled>
      {menuItem.map((item) => {
        return (
          <div className="grid-item" key={item.id}>
            <div className="portfolio-content">
              <div className="portfolio-image">
                <img src={item.image} alt="" />
                <ul>
                  <li>
                    <a href={item.link1}>
                      <GitHubIcon style={{color: "white"}} />
                    </a>
                  </li>
                  <li>
                    <a href={item.link2}>
                      <VisibilityIcon style={{color: "white"}} />
                    </a>
                  </li>
                </ul>
              </div>
              <h6>{item.title}</h6>
            </div>
          </div>
        );
      })}
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    @media screen and (max-width:990px){
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width:768px){
      grid-template-columns: repeat(1, 1fr);
    }
    .grid-item{
        .portfolio-content{
            display: block;
            position: relative;
            h6{
              font-size: 25px;
            }
            img{
                width: 100%;
                height: 30vh;
                object-fit: cover;
            }
            ul{
                display: none;
            }
            .portfolio-image{
             &::before{
               content: "";
              position: absolute;
              left: 2%;
              top: 4%;
              height: 0;
              width: 0;
             }
            }
            .portfolio-image:hover{
              ul{
                display: block;
                position: absolute;
                left: 50%;
                top: 40%;
                transform: translate(-50%, -50%);
                display: flex;
                align-items: center;
                justify-content: center;
                li{
                  background-color: var(--secondary-color);
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  border-radius: 50%;
                  padding: 0.8rem;
                  margin: 0 0.5rem;
                  width: 2.5rem;
                  height: 2.5rem;
                  &:hover{
                    background-color: var(--primary-color);
                  }
                  a{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  }
                }
                svg{
                  font-size: 2rem;
                }
              }
              &::before{
                content: "";
                height: calc(100% - 30%);
                width: calc(100% - 4%);
                background-color: white;
                opacity: 0.8;
                transform-origin: right;
                transform: scale(1);
                transition: all .4s ease-in-out;
              }
            }
        }
    }
`;

export default Menu;
