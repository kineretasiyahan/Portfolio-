import './App.css';
import Navbar from './components/features/navbar/Navbar';
import About from './components/pages/About/About';
import Contact from './components/pages/contact/Contact';
import Profile from './components/pages/profile/Profile';
import ProjectList from './components/pages/Projects/ProjectList';
import { BackTop } from "antd";
import Skills from './components/pages/Skills/Skills';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Profile/>
      <About/>
      <Skills/>
      <ProjectList/>
      <Contact/>
      {/* <BackTop>
          <div style={{backGroundColor:"#7e297e"}}>UP</div>
        </BackTop> */}
    </div>
  );
}

export default App;
