import { Link } from "react-router-dom"

const Navbar = () => {
  return(
    <header>
      <h1>My Logo</h1>
      <nav>
        <Link to='/'>Inicio</Link>
        <Link to='/characters'>Personajes</Link>
      </nav>
    </header>
  )
}

export default Navbar