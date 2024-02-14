import './App.css';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {

  return (
    <BrowserRouter>
      <Header/>
      <AboutMe/>
      <Projects/>
      <Contact/>
      <Footer />
    </BrowserRouter>
  )
}

export default App
