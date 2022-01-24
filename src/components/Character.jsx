import { info } from "../info";

export const Character = () => {
  const { name, status, gender, species, image } = info

  return(
    <section>
      <h2>{name}</h2>
      <p>{status === 'Alive' ? 'Vivo' : 'Muerto'}</p>
      <p>{gender === 'Male' ? 'Masculino' : 'Femenino'}</p>
      <p>{species}</p>
      <img src={image} alt="" />

    </section>
  )
}