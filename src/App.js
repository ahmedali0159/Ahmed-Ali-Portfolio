import React from "react";
import './App.scss';
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import {Switch, Route} from 'react-router-dom';
import About from "./Pages/About";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";
import Blog from "./Pages/Blog";

function App() {
  return (
 <div className="App">
   <div className="sidebar">
     <Navbar/>
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
