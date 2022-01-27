import { Link } from 'react-router-dom'
import style from './Character.module.css'

export const Character = (props) => {
  const { id, name, image } = props

  return(
    <Link to={`/characters/${id}`} className={style.link}>
      <section className={style.card}>
        <h4 className={style.card_header}>{name}</h4>
        <img src={image} alt={name} />
      </section>
    </Link>
  )
}