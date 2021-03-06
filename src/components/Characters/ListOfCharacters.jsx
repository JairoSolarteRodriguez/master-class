import { useState, useEffect } from 'react'
import { getAPI } from "../../services/getApi"
import { Character } from './Character'
import Button from '../Button/Button'

// Styles
import style from './Character.module.css'

const ListOfCharacters = () => {

  const [ characters, setCharacters ] = useState([])

  const currentPage = isNaN(parseInt(localStorage.getItem('page'))) ? 1 : parseInt(localStorage.getItem('page'))

  const [ page, setPage ] = useState(currentPage)
  
  useEffect(() =>{
    getAPI(page).then( async (character) => setCharacters(character))
  }, [ page ])

  const next = () =>{
    setCharacters([])
    setPage(parseInt(page) + 1)
    localStorage.setItem('page', parseInt(page) + 1)
  }

  const prev = () =>{
    setCharacters([])
    setPage(parseInt(page) - 1)
    localStorage.setItem('page', parseInt(page) - 1)
  }

  console.log(page)

  if(characters.length < 1) return <h1>Cargando...</h1>

  return(
    <section>
      <div className={style.containerButton}>
        {page === 1 ? null : <Button value='Prev' action={prev}/> }
        {page === 42 ? null : <Button value='Next' action={next}/> }
      </div>
      <div className={style.flexContainer}>
        {
          characters.map(({ id, name, image }) => (
            <Character id={id} name={name} image={image} key={id}/>
          ))
        }
      </div>
    </section>
  )
}

export default ListOfCharacters