import { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  useEffect(() => { document.body.style.backgroundColor = 'rgb(194, 202, 208, 0.5)' }, [])

  return (
    <BrowserRouter>
      <Header/>
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
