import React from 'react'
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import avatar from '../images/ahmed profile2.jpg';
import HomeIcon from '@material-ui/icons/Home';

function Navbar() {
    const home = <HomeIcon />
    return (
        < NavbarStyled >
            <div className="avatar">
                <img src={avatar} alt="" />
            </div>
            <ul className="nav-items">
                <li className="nav-item">
                <NavLink to="/" exact activeClassName="active-class">{home} Home</NavLink>
                </li>
                <li className="nav-item">
                <NavLink to="/about" exact activeClassName="active-class">About</NavLink>
                </li>
                <li className="nav-item">
                <NavLink to="/skills" exact activeClassName="active-class">Skills</NavLink>
                </li>
                <li className="nav-item">
                <NavLink to="/portfolios" exact activeClassName="active-class">Portfolios</NavLink>
                </li>
                <li className="nav-item">
                <NavLink to="/blog" exact activeClassName="active-class">Blogs</NavLink>
                </li>
                <li className="nav-item">
                <NavLink to="/contact" exact activeClassName="active-class">Contact</NavLink>
                </li>
            </ul>
            <footer>
            <p>Copyright {(new Date()).getFullYear()} Ahmed Ali</p>
            </footer>
        </ NavbarStyled>
    )
}

const NavbarStyled = styled.nav `
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    border-right: 8px solid var(--border-color);
.avatar{
    width: 100%;
    border-bottom: 1px solid var(--border-color);
    text-align: center;
    padding: 1rem 0;
    img{
        width: 70%;
        border-radius: 50%;
        border: 8px solid var(--border-color);
    }
}
.nav-items{
    width: 100%;
    text-align: center;
    .active-class{
        background-color: var(--primary-color);
    }
    li{
        display: block;
        a{
            display:block;
            padding: .45rem 0;
            position: relative;
            z-index: 10;
            text-transform:upperCase;
            transition: All .4s ease-in-out;
            font-weight: 600;
            letter-spacing: 1px;
            &:hover{
                cursor: pointer;
            }
            &::before{
                content: "";
                position: absolute;
                bottom: 0;
                left: 0;
                width: 0;
                height: 50%%;
                background-color: var( --primary-color);
                transition: All 0.4s cubic-bezier(.94,-0.03,.28,.88);
                z-index: 3;
                opacity: 0.21;
                transform-origin: right;
            }
        }
        a:hover::before{
            width: 100%;
            height: 100%;
        }
    }
}
footer{
    border-top: 1px solid var(--border-color);
    width: 100%;
    p{
        padding: 2rem 0;
        font-size: 1.1rem;
        display:block;
        text-align: center;
    }
}
`;

export default Navbar;
