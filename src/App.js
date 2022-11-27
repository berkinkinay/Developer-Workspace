//PAGES
import { Home } from './Pages/Home';
//COMPONENTS
import { Object } from './components/Sections/Object';
import { ObjectOne } from './components/Sections/ObjectOne';
import { ObjectTwo } from './components/Sections/ObjectTwo';
import { Card } from './components/Sections/Card'
import { AnimatePresence } from 'framer-motion';
//ANIMATE
import Animatedpages from './components/Animate/Animatedpages'
import AnimatedLoader from './components/Animate/AnimatedLoader';
//CSS
import "./index.css";

const App = () => {
  return (

    <div>
      <AnimatePresence initial={true}>
        <AnimatedLoader />
        <Animatedpages />
        <Home />
        <ObjectOne />
        <ObjectTwo />
        <Card />
        <Object />
      </AnimatePresence>
    </div>
  );
}
export default App;