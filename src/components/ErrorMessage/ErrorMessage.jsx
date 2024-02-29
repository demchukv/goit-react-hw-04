import css from './ErrosMessage.module.css'
import PropTypes from 'prop-types'

const ErrorMessage = ( {message = 'Error occured! Try later.'} ) => {
  return (
    <div className={css.errorMsg}>
    {message}
    </div>
  )
}

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
}

export default ErrorMessage