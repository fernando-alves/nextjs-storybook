import styles from './button.module.css'

const Button = ({title}) => <button type="button" className={styles.button}>{title}</button>

export default Button