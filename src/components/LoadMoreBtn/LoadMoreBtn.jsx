import PropTypes from 'prop-types'
import css from './LoadMoreBtn.module.css'

const LoadMoreBtn = ({ onLoadMore }) => {
  return (
    <button className={css.loadMoreBtn} type="button" onClick={onLoadMore}>Load more</button>
  )
}

LoadMoreBtn.propTypes = {
  onLoadMore: PropTypes.func.isRequired
}
export default LoadMoreBtn