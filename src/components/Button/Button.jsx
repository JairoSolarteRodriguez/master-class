const Button = ( props ) => {
  const { value, action } = props

  return(
    <button onClick={action}>{value}</button>
  )
}

export default Button