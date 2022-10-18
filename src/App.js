
import './App.css';
import Frontpage from './components/frontpage';
import Background from './components/background';
import BackgroundDitails from './components/backgroundDitails';
import Skills from './components/skills';
import Aboutme from './components/aboutme';
import Contact from './components/contact';
import Navbar from './components/navbar';


function App() {
  return (
    <div>
      <Navbar/>
      <Frontpage/>
      <Skills/>
      <BackgroundDitails/>
      <Aboutme/>
      <Contact/>
      
    </div>
   
  );
}

export default App;
