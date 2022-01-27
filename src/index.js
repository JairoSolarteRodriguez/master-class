import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Navbar from "./components/Navbar/Navbar"
import ListOfCharacters from "./components/Characters/ListOfCharacters"
import OneCharacter from "./components/Characters/OneCharacter"
import Home from "./components/Home/Home"

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='characters' element={<ListOfCharacters />} />
          <Route path='/characters/:charId' element={<OneCharacter />} />
        </Routes>
      </Router>
    </>
  </React.StrictMode>,
  document.getElementById('root')
);
