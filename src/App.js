import React, { useState } from "react";
import './App.scss';
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import {Switch, Route} from 'react-router-dom';
import About from "./Pages/About";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";
import Blog from "./Pages/Blog";

function App() {
  const [navToggle, setNavToggle] = useState(false);

  const navClick = () => {
    setNavToggle(!navToggle)
  }
  return (
 <div className="App">
   <div className={`sidebar ${navToggle ? 'nav-toggle': '' }`}>
     <Navbar/>
   </div>
   <div className="nav-btn" onClick={navClick}>
     <div className="lines1"></div>
     <div className="lines2"></div>
     <div className="lines3"></div>
   </div>
   <div className="main-content">
     <div className="content">
     <Switch>
       <Route path="/" exact>
       <Home/>
       </Route>
       <Route path="/about" exact>
       <About/>
       </Route>
       <Route path="/portfolio" exact>
       <Portfolio/>
       </Route>
       <Route path="/contact" exact>
       <Contact/>
       </Route>
       <Route path="/blogs" exact>
       <Blog/>
       </Route>
     </Switch>
     </div>
   </div>
 </div>
  );
}

export default App;
