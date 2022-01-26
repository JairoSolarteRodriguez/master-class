import ListOfCharacters from "./components/ListOfCharacters"
import OneCharacter from "./components/OneCharacter"
import Navbar from "./components/Navbar"
import Home from "./components/Home"

import {
  BrowserRouter as Router,
  Routes,
  Route 
} from 'react-router-dom'

export const App = () => {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='characters' element={<ListOfCharacters />} />
        <Route path='/characters/:charId' element={<OneCharacter />} />
      </Routes>
    </Router>
  )
}