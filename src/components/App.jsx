import { useState } from 'react';
import { fetchPhotos } from "./api/unsplash-api.js";
import ImageGallery from './ImageGallery/ImageGallery'
import SearchBar from './SearchBar/SearchBar'
import Loader from './Loader/Loader.jsx'
import ErrorMessage from './ErrorMessage/ErrorMessage.jsx'
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn.jsx';
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
  const [error, setError] = useState(false);

  const handleSearch = async (query) => {
    try{
      if(searchParams.query !== query){
        searchParams.query = query;
        searchParams.page = 1;
        setImages([]);
      }
      setError(false);
      setMoreBtn(false);
      setLoading(true);
      console.log(searchParams);
      const res = await fetchPhotos(searchParams);
      if(res.total === 0){
        setError(true);
      }else{
        if(searchParams.page === 1){
          setImages(res.results);
        }else{
          setImages(images.concat(res.results));
        }
      }
      if(searchParams.page >= res.total_pages){
        setMoreBtn(false);
        searchParams.page = 1;
      }else{
        setMoreBtn(true);
        searchParams.page = searchParams.page + 1;
      }
    }catch{
      setError(true);
    }finally{
      setLoading(false);
    }
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      <ImageGallery images={images} />
      {moreBtn && <LoadMoreBtn onLoadMore={handleSearch} query={searchParams.query} />}
    </>
  )
}

export default App
