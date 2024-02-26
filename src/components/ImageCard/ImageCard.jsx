import PropTypes from 'prop-types'
import css from './ImageCard.module.css'

const ImageCard = ({ image }) => {
  return (
    <div className={css.imageBlock}>
      <img src={image.urls.small} alt={image.alt_description} width="400" />
    </div>
  )
}

ImageCard.propTypes = {
  image: PropTypes.object.isRequired,
}

export default ImageCard
