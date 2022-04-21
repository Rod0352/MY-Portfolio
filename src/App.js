import React,{useState} from "react";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects"
import Sidebar from './components/sidebar';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import './index.css';


function App() {
  const [navItems] = useState([
    {
      name: "About",
    },
    {
      name: "Projects",
    },
    {
      name: "Contact",
    },
    // {
    //   name: "Resume",
    // },
    
  ]);
  const [currentNavItem, setCurrentNavItem] = useState(navItems[0]);

  return (
    <>

    <Header></Header>
    <main>
      <Sidebar 
       currentNavItem={currentNavItem}
       setCurrentNavItem={setCurrentNavItem}
       navItems={navItems}
      />
    {currentNavItem.name === "About" && <About></About>}
    {currentNavItem.name === "Projects" && <Projects></Projects>}
    {currentNavItem.name === "Contact" && <Contact></Contact>}
    {/* {currentNavItem.name === "Resume" && <Resume></Resume>} */}
    </main>
    {/* <Footer></Footer> */}
    </>
  );
}

export default App;
