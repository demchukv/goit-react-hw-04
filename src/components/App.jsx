import { useEffect, useState } from 'react';
import axios from "axios";
import { getFetchUrl } from "./api/unsplash-api.js";
import ImageGallery from './ImageGallery/ImageGallery'
import SearchBar from './SearchBar/SearchBar'
import Loader from './Loader/Loader.jsx'
import ErrorMessage from './ErrorMessage/ErrorMessage.jsx'
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn.jsx';
import ImageModal from './ImageModal/ImageModal.jsx';
import './App.css'

function App() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorState, setErrorState] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [moreBtn, setMoreBtn] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [imageModalData, setImageModalData] = useState({
    imgSrc: "",
    imgDescription: "",
    imgAltDescription: "",
    imgAuthor: "",
    imgLikes: 0,
  });
  const per_page = 10;

  const openModal = () => {
    setModalIsOpen(true);
  }

  const closeModal = () => {
    setModalIsOpen(false);
  }

  const handleNewSearch = (query) => {
    if(query !== ""){
      setQuery(prevQuery => prevQuery !== query && query);
      setPage(1);
      setImages([]);
    }
  }

  useEffect(
    () => {
      if(query === ""){
        return;
      }
      const fetchPhotos = async () => {
        setMoreBtn(false);
        setErrorState(false);
        setLoading(true);
        await axios.get(getFetchUrl( page, per_page, query ))
          .then((response) => {
            const res = response.data;
            if(res.total === 0){
              setImages([]);
              setErrorMsg('Nothing found! Try a different search phrase!');
              setErrorState(true);
            }else{
              setImages(prevImages => prevImages.concat(res.results));
              if(page >= res.total_pages){
                setMoreBtn(false);
              }else{
                setMoreBtn(true);
              }
            }
          })
          .catch((error) => {
            setErrorMsg(!error.response.data.errors ? error.message : error.response.data.errors);
            setErrorState(true);
          })
          .finally(() => {
            setLoading(false);
            if(page > 1){
              window.scrollBy({top: window.innerHeight-200, left: 0, behavior: 'smooth'});
            }
          });
        };
        fetchPhotos();
  }, [query, page]
  )

  const handleImageClick = (image) => {
    setImageModalData(image);
    openModal();
  }

  const handleNextPage = () => {
    setPage(prevPage => prevPage + 1);
  }

  return (
    <>
      <SearchBar onSearch={handleNewSearch} />
      {images.length > 0 && <ImageGallery images={images} handleImageClick={handleImageClick} />}
      {moreBtn && <LoadMoreBtn onLoadMore={handleNextPage} />}
      {loading && <Loader />}
      <ImageModal closeModal={closeModal} modalIsOpen={modalIsOpen} {...imageModalData} />
      {errorState && <ErrorMessage message={errorMsg} />}
    </>
  )
}

export default App
