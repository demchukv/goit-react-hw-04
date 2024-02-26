
const LoadMoreBtn = ({ onClick }) => {
  const handleClickMoreBtn = () => {
    onClick();
  }
  return (
    <button type="button" onClick={handleClickMoreBtn}>Load more</button>
  )
}

export default LoadMoreBtn