
export const Character = (props) => {
  const { name, status, species, gender, image } = props

  return(
    <section>
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <p>{status}</p>
      <p>{species}</p>
      <p>{gender}</p>
    </section>
  )
}