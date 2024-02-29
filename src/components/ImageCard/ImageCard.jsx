import PropTypes from 'prop-types'
import css from './ImageCard.module.css'

const ImageCard = ({ image, handleImageClick }) => {
  const imgData = {
    imgSrc: image.urls.regular,
    imgDescription: image.description,
    imgAltDescription: image.alt_description,
    imgAuthor: image.user.name,
    imgLikes: image.likes,
  }
  return (
    <div className={css.imageBlock} onClick={() => handleImageClick(imgData)}>
      <img src={image.urls.small} alt={image.alt_description} width="400" />
    </div>
  )
}

ImageCard.propTypes = {
  image: PropTypes.object.isRequired,
  handleImageClick: PropTypes.func.isRequired,
}

export default ImageCard
