import logo from './logo.svg';
import './App.css';
import Frontpage from './components/frontpage';
import Background from './components/background';
import BackgroundDitails from './components/backgroundDitails';
import Skills from './components/skills';
import Aboutme from './components/aboutme';

function App() {
  return (
    <div>
      <Frontpage/>
      <Skills/>
      <BackgroundDitails/>
      <Aboutme/>
    </div>
   
  );
}

export default App;
