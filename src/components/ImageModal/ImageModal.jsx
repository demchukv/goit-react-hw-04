import PropTypes from 'prop-types'
import Modal from 'react-modal';
import css from './ImageModal.module.css'

Modal.setAppElement('#root');

const ImageModal = ({ 
  closeModal, 
  modalIsOpen, 
  imgSrc = "https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg", 
  imgAltDescription = "Regular gallery image", 
  imgDescription = "Big image", 
  imgAuthor = "Unknow", 
  imgLikes = 0 
}) => {

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Image Modal"
      className={css.Modal}
      overlayClassName={css.Overlay}
    >
      <div className={css.modalContainer}>
        <div className={css.imageContainer}><img className={css.image} src={imgSrc} alt={imgAltDescription} /></div>
        <div className={css.imageDescription}>{imgDescription}</div>
        <ul className={css.addImageInfo}>
          <li>Author: {imgAuthor}</li>
          <li>Likes: {imgLikes}</li>
        </ul>
      </div>
    </Modal>
  )
}

ImageModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  modalIsOpen: PropTypes.bool.isRequired,
  imgSrc: PropTypes.string.isRequired,
  imgAltDescription: PropTypes.string.isRequired,
  imgDescription: PropTypes.string,
  imgAuthor: PropTypes.string,
  imgLikes: PropTypes.number,
  
}

export default ImageModal