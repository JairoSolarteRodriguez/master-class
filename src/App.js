import ListOfCharacters from "./components/Characters/ListOfCharacters"
import OneCharacter from "./components/Characters/OneCharacter"
import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Home/Home"

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'

export const App = () => {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/characters' element={<ListOfCharacters />} />
          <Route path='/characters/:charId' element={<OneCharacter />} />
        </Routes>
      </Router>
    </>
  )
}