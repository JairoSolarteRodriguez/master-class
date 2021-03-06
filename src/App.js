import ListOfCharacters from "./components/Characters/ListOfCharacters"
import OneCharacter from "./components/Characters/OneCharacter"
import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Home/Home"

import {
  HashRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'

export const App = () => {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route exact path='characters' element={<ListOfCharacters />} />
          <Route exact path='characters/:charId' element={<OneCharacter />} />
        </Routes>
      </Router>
    </>
  )
}