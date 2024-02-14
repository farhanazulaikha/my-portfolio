import './App.css';
import Header from './components/Header';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Element } from 'react-scroll';

function App() {

  return (
    <>
      <Header/>
      <Element name="about-me">
        <AboutMe/>
      </Element>
      <Element name="projects">
        <Projects/>
      </Element>
      <Element name="contact">
        <Contact/>
      </Element>
      <Footer />
    </>
  )
}

export default App
