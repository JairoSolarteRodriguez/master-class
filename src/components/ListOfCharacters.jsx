import { useState, useEffect } from 'react'
import { getAPI } from "../services/getApi"
import { Character } from './Character';
import Button from './Button/Button';

const ListOfCharacters = () => {
  const [ characters, setCharacters ] = useState([]);
  const [ page, setPage ] = useState(1);

  useEffect(() =>{
    getAPI(page).then( async (character) => setCharacters(character))
  }, [ page ])

  const next = () =>{
    setCharacters([]);
    setPage(page + 1)
  }

  const prev = () =>{
    setCharacters([]);
    setPage(page - 1)
  }
  
  if(characters.length < 1) return <h1>Cargando...</h1>

  return(
    <>
      {page === 1 ? '' : <Button value='Prev' action={prev}/> }
      {page === 42 ? '' : <Button value='Next' action={next}/> }
      {
        characters.map(({ id, name, image, gender, species, status }) => (
          <Character name={name} image={image} gender={gender} species={species} status={status} key={id}/>
        ))
      }

    </>
  )
}

export default ListOfCharacters