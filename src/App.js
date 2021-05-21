import Sidebar from "./components/Sidebar";
import styled from 'styled-components';
import Home from "./Pages/Home";
import { Route, Switch } from "react-router";
import About from "./Pages/About";
import Resume from "./Pages/Resume";
import Portfolio from "./Pages/Portfolio";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";



function App() {
  // const [navToggle, setNavToggle] = useState(false);

  // const navClick = () => {
  //   setNavToggle(!navToggle)
  // }
  return (
 <div className="App">
   <Sidebar />
   <MainContentStyled >
    <div className="lines">
      <div className="line1"></div>
      <div className="line2"></div>
      <div className="line3"></div>
      <div className="line4"></div>
    </div>
    <Switch>
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
    </Switch>
   </MainContentStyled>
   
 </div>
  );
}

const MainContentStyled = styled.main `
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;

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
