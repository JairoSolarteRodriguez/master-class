import style from './Button.module.css'

const Button = ( props ) => {
  const { value, action } = props

  return(
    <button onClick={action} className={style.button}>{value}</button>
  )
}

export default Button