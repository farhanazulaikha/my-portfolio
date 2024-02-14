import './App.css';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Projects from './components/Projects';
import Home from './components/Home';
import AboutMe from './components/AboutMe';

function App() {

  return (
    <BrowserRouter>
      <Header/>
      <AboutMe/>
      <Projects/>
    </BrowserRouter>
  )
}

export default App
