import { Home } from './pages/Home';
import { Workshop } from './components/sections/Workshop';
import "./index.css";
import { Section } from './components/sections/Section';
import { Sectionew } from './components/sections/Sectionew';
import { Hey } from './components/sections/Hey'

const App = () => {
  
 return (
  
<div>
  <Home />
  <Section />
  <Sectionew />
  <Hey />
  <Workshop />
</div>
  );
}
export default App;