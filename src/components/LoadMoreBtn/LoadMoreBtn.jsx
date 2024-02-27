import PropTypes from 'prop-types'
import css from './LoadMoreBtn.module.css'

const LoadMoreBtn = ({ onLoadMore, query }) => {
  return (
    <button className={css.loadMoreBtn} type="button" onClick={() => onLoadMore(query)}>Load more</button>
  )
}

LoadMoreBtn.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
}
export default LoadMoreBtn