//PAGE
import { Home } from './Pages/Home';
//COMPONENTS
import Nav from "./components/Nav"
import Footer from "./components/webcomp/Footer"
import { LoaderAnimations } from './components/sections/LoaderAnimations';
import { ObjectOne } from './components/sections/ObjectOne';
import { ObjectTwo } from './components/sections/ObjectTwo';
import { Card } from './components/sections/Card'
import { AnimatePresence } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
//ANIMATE
import Animatedpages from './components/Animate/Animatedpages'
import AnimatedLoader from './components/Animate/AnimatedLoader';
//CSS
import "./index.css";

function App() {

  return (

    <>
      <AnimatePresence initial={false}>
        <AnimatedLoader />
        <Animatedpages />
          <Nav />
            <Home/> 
            <ObjectOne />
            <ObjectTwo />
            <Card  />
            <LoaderAnimations />
          <Footer />
      </AnimatePresence>
    </>
  );
}
export default App;