import { Home } from './pages/Home';
import { Workshop } from './components/sections/Workshop';
import "./index.css";
import { Section } from './components/sections/Section';
import { Sectionew } from './components/sections/Sectionew';
import { Hey } from './components/sections/Hey'
import { AnimatePresence } from 'framer-motion';
import Animatepages from './components/Animate/Animatepages';
import Animatedloader from './components/Animate/Animatedloader';

const App = () => {
 return (
  
<div>
<AnimatePresence initial={true}>  
 <Animatedloader  />
  <Animatepages />  
   <Home />
   <Section />
   <Sectionew />
   <Hey />
   <Workshop />
   </AnimatePresence>
</div>
  );
}
export default App;