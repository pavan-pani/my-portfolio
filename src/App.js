import logo from './logo.svg';
import './App.css';
import Frontpage from './components/frontpage';
import Background from './components/background';
import BackgroundDitails from './components/backgroundDitails';
import Skills from './components/skills';
import Aboutme from './components/aboutme';
import Contact from './components/contact';

function App() {
  return (
    <div>
      <Frontpage/>
      <Skills/>
      <BackgroundDitails/>
      <Aboutme/>
      <Contact/>
    </div>
   
  );
}

export default App;
