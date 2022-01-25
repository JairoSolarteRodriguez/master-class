import { useState, useEffect } from 'react'
import { getAPI } from "../services/getApi"
import { Character } from './Character';

const ListOfCharacters = () => {
  const [ characters, setCharacters ] = useState([]);
  const [ page, setPage ] = useState(1);

  useEffect(() =>{
    setTimeout(() => {
      getAPI(page).then( (character) => setCharacters(character))
    }, 2000)
  }, [ page ])

  const next = () =>{
    setCharacters([]);
    setPage(page + 1)

    console.log(page)
  }
  
  if(characters.length < 1) return <h1>Cargando...</h1>

  return(
    <>
      <button onClick={next}>next</button>
      {
        characters.map(({ id, name, image, gender, species, status }) =>(
          <Character name={name} image={image} gender={gender} species={species} status={status} key={id}/>
        ))
      }
    </>
  )
}

export default ListOfCharacters