import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root{
    --primary-color: #007bff;
    --primary-color-light: #057FFF;
    --secondary-color: #6c757d;
    --background-dark-color: #10121A;
    --background-dark-grey: #191D2B;
    --border-color: #6B6B6B;
    --line-color: #191D2B;
    --background-light-color: #F1F1F1;
    --background-light-color-2: rgba(3,127,255,.3);
    --white-color: #FFF;
    --font-light-color: #a4acc4;
    --font-dark-color: #313131;
    --font-dark-color-2: #151515;
    --sidebar-dark-color: #191D2B;
    --scrollbar-bg-color: #383838;
    --scrollbar-thump-color: #6b6b6b;
    --scrollbar-track-color: #383838;
    --background-color: #000;
}
*{
    margin: 0;
    padding:0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: 'Nunito', sans-serif;
    font-size: 1.1rem;
}

body{
    background-color:var(--background-dark-color);
    color: var(--font-light-color);
}
body::-webkit-scrollbar{
    width: 9px;
    background-color: #383838;
}
body::-webkit-scrollbar-thumb{
    height: 5px;
    border-radius: 10px;
    background-color: var(--border-color);
}
body::-webkit-scrollbar-track{
    height: 5px;
    border-radius: 10px;
    background-color: #383838;
}
a{
    font-family: inherit;
    color: inherit;
    font-size: inherit;
    font-size: 1rem;
}
h1{
    font-size:3rem;
    color:var(--white-color);
    span{
        font-size:3rem;
    }
}
span{
    color: var(--primary-color);
}
.humburger-menu{
    position: absolute;
    right: 5%;
    top: 3%; 
    display: none;
    z-index: 15;
    svg{
        font-size: 3rem;
    }
  }
  .nav-toggle{
    transform: translateX(0);
    z-index: 20;
}
  @media screen and (max-width:1200px){
   .humburger-menu{
       display: block;
   }
}
`;

export default GlobalStyle;