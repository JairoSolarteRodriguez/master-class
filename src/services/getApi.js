export const getAPI = async (page) => {
  const URLAPI = `https://rickandmortyapi.com/api/character?page=${page}`;

  const respuesta = await fetch(URLAPI)
  const resultado = await respuesta.json()

  const { results } = resultado

  const allResult = results.map( result => {

    const { id, name, species, status, gender, image } = result

    return { id, name, species, status, gender, image }
  })

  return allResult
}

