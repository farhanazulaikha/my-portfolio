import './App.css';
import Header from './components/header/Header';
import AboutMe from './components/about-me/AboutMe';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
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
