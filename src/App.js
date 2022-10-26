import { Home } from './pages/Home';
import { Workshop } from './pages/Workshop';
import "./index.css";
import { Section } from './components/sections/Section';
import { Routes } from 'react-router-dom'

const App = () => {
  
 return (
  
<div>
    <Home />
    <Section />
    <Workshop />
</div>
  );
}
export default App;