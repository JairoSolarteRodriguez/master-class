import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getOne } from "../../services/getApi"
import style from "./Character.module.css"

const OneCharacter = () => {

  const [character, setCharacter] = useState();
  const { charId } = useParams()

  useEffect(() =>{
    getOne(charId).then( async (char) => setCharacter(char))
  }, [ charId ])

  return(
    <div className={style.oneCard}>
      <h1>Personaje numero {charId}</h1>
      {
        character === undefined ? <p>Cargando...</p> :
        <div className={style.card}>
          <h1 className={style.card_header}>{character.name}</h1>
          <img src={character.image} alt="" />
          <p><span className={style.bold}>Estado:</span> {character.status}</p>
          <p><span className={style.bold}>Especie:</span> {character.species}</p>
          <p><span className={style.bold}>Genero:</span> {character.gender}</p>
          <p><span className={style.bold}>Origen:</span> {character.origin.name}</p>
        </div>
      }
    </div>
  )
}

export default OneCharacter