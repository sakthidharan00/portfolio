import './App.css';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';
import NavBar from './Components/NavBar/NavBar';
import Project from './Components/Projects/Project';
import Skills from './Components/Skills/Skills';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
 
  return (
    <div className="App" >
      <NavBar/>
      <Home/>
      <Skills/>
      <Project/>
      <Contact/>
      
    </div>
  );
}

export default App;
