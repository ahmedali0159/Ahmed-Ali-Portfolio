import Sidebar from "./components/Sidebar";
import styled from 'styled-components';
import Home from "./Pages/Home";
import { Route, Switch as Switching } from "react-router";
import About from "./Pages/About";
import Resume from "./Pages/Resume";
import Portfolio from "./Pages/Portfolio";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton } from "@material-ui/core";
import { useState } from "react";
import Brightness6Icon from '@material-ui/icons/Brightness6';
import Switch from '@material-ui/core/Switch';
import { useEffect } from "react";



function App() {
  const [theme, setTheme] = useState('dark-theme');
  const [checked, setChecked] = useState(false);
   const [navToggle, setNavToggle] = useState(false);

   useEffect(()=> {
    document.documentElement.className=theme;
   }, [theme]);

   const themeToggler = () =>{
     if(theme === "light-theme"){
       setTheme('dark-theme');
       setChecked(false);
     }else{
      setTheme('light-theme');
      setChecked(true);
     }
   }

  // const navClick = () => {
  //   setNavToggle(!navToggle)
  // }
  return (
 <div className="App">
   <Sidebar navToggle={navToggle}/>
   <div className="theme">
   <div className="light-dark-mode">
      <div className="left-content">
        <Brightness6Icon />
      </div>
      <div className="right-content">
      <Switch
                  value=""
                  checked={checked}
                  inputProps={{ 'aria-label': '' }}
                  size="medium"
                  onClick={themeToggler}
                  
                  
       />
      </div>
    </div>
   </div>
   <MainContentStyled >
    <div className="lines">
      <div className="line1"></div>
      <div className="line2"></div>
      <div className="line3"></div>
      <div className="line4"></div>
    </div>
    
  
    <div className="humbergur-menu">
      <IconButton onClick={() => setNavToggle(!navToggle)}>
        <MenuIcon />
      </IconButton>
    </div>
    <Switching>
     <Route  path="/" exact>
       <Home />
     </Route>
     <Route  path="/about" exact>
       <About />
     </Route>
     <Route  path="/skills" exact>
       <Resume />
     </Route>
     <Route  path="/portfolios" exact>
       <Portfolio />
     </Route>
     <Route  path="/blog" exact>
       <Blog />
     </Route>
     <Route  path="/contact" exact>
       <Contact />
     </Route>
    </Switching>
   </MainContentStyled>
   
 </div>
  );
}

const MainContentStyled = styled.main `
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;

  @media screen and (max-width:1200px){
    margin-left: 0;
}
  .lines{
    position: absolute;
    min-height: 100vh;
    width: 100%;
    display:flex;
    justify-content: space-evenly;
    .line1, .line2, .line3, .line4{
      width: 1px;
      min-height: 100vh;
      background-color: var( --dark-color);
    }
  }
 
 
 
`;

export default App;
