import { Link } from "react-router-dom"
import style from './Navbar.module.css'

const Navbar = () => {
  return(
    <header className={style.header}>
      <Link to='/' className={style.text}>
        <h1>My Logo</h1>
      </Link>
      <nav className={style.nav}>
        <Link to='/' className={style.text}>Inicio</Link>
        <Link to='/characters' className={style.text}>Personajes</Link>
      </nav>
    </header>
  )
}

export default Navbar