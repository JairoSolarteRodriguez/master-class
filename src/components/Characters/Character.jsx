import { Link } from 'react-router-dom'
import style from './Character.module.css'

export const Character = (props) => {
  const { id, name, status, species, gender, image } = props

  return(
    <Link to={`/characters/${id}`} className={style.link}>
      <section className={style.card}>
        <h4 className={style.card_header}>{name}</h4>
        <img src={image} alt={name} />
        <div className={style.info}>
          <p className={style.text}><span className={style.bold}>Estado:</span> {status}</p>
          <p className={style.text}><span className={style.bold}>Especie:</span> {species}</p>
          <p className={style.text}><span className={style.bold}>Genero:</span> {gender}</p>
        </div>
      </section>
    </Link>
  )
}