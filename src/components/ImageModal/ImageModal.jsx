import PropTypes from 'prop-types'
import Modal from 'react-modal';
import css from './ImageModal.module.css'

Modal.setAppElement('#root');

const ImageModal = ({ closeModal, modalIsOpen, data }) => {

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Image Modal"
      className={css.Modal}
      overlayClassName={css.Overlay}
    >
      {Object.keys(data).length > 0 && 
      (<div className={css.modalContainer}>
        <div className={css.imageContainer}><img className={css.image} src={data.urls.regular} alt={data.alt_description} /></div>
        <div className={css.imageDescription}>{data.description}</div>
        <ul className={css.addImageInfo}>
          <li>Author: {data.user.name}</li>
          <li>Likes: {data.likes}</li>
        </ul>
      </div>)
      }
    </Modal>
  )
}

ImageModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  modalIsOpen: PropTypes.bool.isRequired,
  data: PropTypes.object,
}

export default ImageModal