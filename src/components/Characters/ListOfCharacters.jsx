import { useState, useEffect } from 'react'
import { getAPI } from "../../services/getApi"
import { Character } from './Character';
import Button from '../Button/Button';

// Styles
import style from './Character.module.css'

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
    <section>
      <div className={style.containerButton}>
        {page === 1 ? null : <Button value='Prev' action={prev}/> }
        {page === 42 ? null : <Button value='Next' action={next}/> }
      </div>
      <div className={style.flexContainer}>
        {
          characters.map(({ id, name, image, gender, species, status }) => (
            <Character id={id} name={name} image={image} gender={gender} species={species} status={status} key={id}/>
          ))
        }

      </div>
    </section>
  )
}

export default ListOfCharacters