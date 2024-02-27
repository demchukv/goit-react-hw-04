import PropTypes from 'prop-types'
import css from './ImageCard.module.css'

const ImageCard = ({ image, handleImageClick }) => {
  return (
    <div className={css.imageBlock} onClick={() => handleImageClick(image)}>
      <img src={image.urls.small} alt={image.alt_description} width="400" />
    </div>
  )
}

ImageCard.propTypes = {
  image: PropTypes.object.isRequired,
  handleImageClick: PropTypes.func.isRequired,
}

export default ImageCard
