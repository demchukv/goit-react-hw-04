import PropTypes from 'prop-types'

const ImageCard = ({ image }) => {
  return (
    <div>
      <img src={image.urls.small} alt="" />
    </div>
  )
}

ImageCard.propTypes = {
  image: PropTypes.object.isRequired,
}

export default ImageCard