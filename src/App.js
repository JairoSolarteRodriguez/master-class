import ListOfCharacters from "./components/ListOfCharacters"
import OneCharacter from "./components/OneCharacter"

import {
  BrowserRouter as Router,
  Routes,
  Route 
} from 'react-router-dom'

export const App = () => {

  return (
    <Router>
      <Routes>
        <Route path='characters' element={<ListOfCharacters />} />
        <Route path='/characters/:charId' element={<OneCharacter />} />
      </Routes>
    </Router>
  )
}