import css from './LoadMoreBtn.module.css'

const LoadMoreBtn = ({ onLoadMore, query }) => {
  return (
    <button className={css.loadMoreBtn} type="button" onClick={() => onLoadMore(query)}>Load more</button>
  )
}

export default LoadMoreBtn