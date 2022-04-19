import React,{useState} from "react";
import Header from "./components/Header";
import About from "./components/About";
// import Contact from "./components/Contact";
import Contact from "./components/Contact";
import Projects from "./components/Projects"
import Resume from "./components/Resume";
import Sidebar from './components/sidebar';
import { BrowserRouter as Router } from 'react-router-dom';
// import {setContext} from '@apollo/client/link/context'
// import {
//   ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
//   createHttpLink,
// } from '@apollo/client';

import './App.css';
import './index.css';

// const httpLink = createHttpLink({
//   uri: '/graphql',
// });

// const authLink = setContext((_, { headers }) => {
//   const token = localStorage.getItem('id_token');
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : '',
//     },
//   };
// });

// const client = new ApolloClient({
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache(),
// });

function App() {
  const [navItems] = useState([
    {
      name: "About",
    },
    {
      name: "Contact",
    },
    // {
    //   name: "Resume",
    // },
    {
      name: "Projects",
    },
    
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
    {currentNavItem.name === "Contact" && <Contact></Contact>}
    {/* {currentNavItem.name === "Resume" && <Resume></Resume>} */}
    {currentNavItem.name === "Projects" && <Projects></Projects>}
    </main>
    {/* <Footer></Footer> */}
    </>
  );
}

export default App;
