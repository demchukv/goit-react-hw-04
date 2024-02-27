import { useState } from 'react';
import toast from 'react-hot-toast';
import { fetchPhotos } from "./api/unsplash-api.js";
import ImageGallery from './ImageGallery/ImageGallery'
import SearchBar from './SearchBar/SearchBar'
import Loader from './Loader/Loader.jsx'
import ErrorMessage from './ErrorMessage/ErrorMessage.jsx'
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn.jsx';
import ImageModal from './ImageModal/ImageModal.jsx';
import './App.css'

const searchParams = {
  page: 1,
  per_page: 10,
  query: "",
};

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [moreBtn, setMoreBtn] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [imageModalData, setImageModalData] = useState({});

  const openModal = () => {
    setModalIsOpen(true);
  }

  const closeModal = () => {
    setModalIsOpen(false);
  }

  const handleSearch = async (query) => {
    try{
      if(searchParams.query !== query){
        searchParams.query = query;
        searchParams.page = 1;
        setImages([]);
      }
      setMoreBtn(false);
      setLoading(true);
      const response = await fetchPhotos(searchParams);
      const res = response.data;
      if(res.total === 0){
        setImages([]);
        toast.error('Nothing found! Try a different search phrase!', {duration:2500,position: 'top-center',});
      }else{
        if(searchParams.page === 1){
          setImages(res.results);
        }else{
          setImages(images.concat(res.results));
        }
        if(searchParams.page >= res.total_pages){
          setMoreBtn(false);
          searchParams.page = 1;
        }else{
          setMoreBtn(true);
          searchParams.page = searchParams.page + 1;
        }
      }
    }catch{
      toast.error('Error occured! Tray again later!');
    }finally{
      setLoading(false);
      if(searchParams.page > 1){
        window.scrollBy({top: window.innerHeight-200, left: 0, behavior: 'smooth'});
      }
    }
  };

  const handleImageClick = (image) => {
    setImageModalData(image);
    openModal();
  }

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {images.length > 0 && <ImageGallery images={images} handleImageClick={handleImageClick} />}
      {moreBtn && <LoadMoreBtn onLoadMore={handleSearch} query={searchParams.query} />}
      {loading && <Loader />}
      <ImageModal closeModal={closeModal} modalIsOpen={modalIsOpen} data={imageModalData} />
      <ErrorMessage />
    </>
  )
}

export default App
