import './App.css';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutMe from './components/AboutMe';

function App() {

  return (
    <BrowserRouter>
      <Header/>
        <AboutMe/>
        {/* <Routes>
          <Route path=""></Route>
          <Route path=""></Route>
          <Route path=""></Route>
          <Route path=""></Route>
        </Routes> */}
    </BrowserRouter>
  )
}

export default App
