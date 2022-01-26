import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useState } from "react/cjs/react.development"
import { getOne } from "../services/getApi"

const OneCharacter = () => {

  const [character, setCharacter] = useState();
  const { charId, otroValor } = useParams()

  useEffect(() =>{
    getOne(charId).then( async (char) => setCharacter(char))
  }, [ charId ])

  console.log(otroValor)
  
  return(
    <div>
      <h1>Personaje numero: {charId}</h1>
      {
        character === undefined ? <p>Cargando...</p> :
        <div>
          <h1>{character.name}</h1>
          <img src={character.image} alt="" />
          <p>{character.status}</p>
          <p>{character.species}</p>
          <p>{character.gender}</p>
          <p>{character.origin.name}</p>
        </div>
      }
    </div>
  )
}

export default OneCharacter