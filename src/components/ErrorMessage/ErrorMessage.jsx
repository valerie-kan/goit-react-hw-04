import css from './ErrorMessage.module.css'

const ErrorMessage = ({error}) => {
    return (
        <p className={css.errMes}>{error}</p>
    )
}

export default ErrorMessage