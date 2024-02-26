import { useState } from 'react';
import { fetchPhotos } from "./api/unsplash-api.js";
import ImageGallery from './ImageGallery/ImageGallery'
import SearchBar from './SearchBar/SearchBar'
import Loader from './Loader/Loader.jsx'
import ErrorMessage from './ErrorMessage/ErrorMessage.jsx'
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn.jsx';
import './App.css'

function App() {
  const per_page = 10;
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [moreBtn, setMoreBtn] = useState(false);
  const [error, setError] = useState(false);
  const [queryVal, setQueryVal] = useState("");
  const [searchParams, setSearchParams] = useState({
    page: 1,
    per_page,
    query: "",
  });

  const handleSearch = async (query) => {
    console.log(query);
    try{
      setSearchParams({
        ...searchParams,
        query,
      });
      setQueryVal(query);
      setImages([]);
      setError(false);
      setLoading(true);
      console.log(searchParams);
      console.log("query: " + queryVal);
      const res = await fetchPhotos(searchParams);
      if(res.total === 0){
        setError(true);
      }else{
        setImages(res.results);
      }
      if(searchParams.page >= res.total_pages){
        setMoreBtn(false);
        setSearchParams({
          ...searchParams,
          page: 1,
        });
      }else{
        setMoreBtn(true);
        setSearchParams({
          ...searchParams,
          page: searchParams.page + 1,
        });
      }
    }catch{
      setError(true);
    }finally{
      setLoading(false);
    }
  };

  const handleMoreBtn = () => {
    handleSearch(searchParams.query);
  }

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      <ImageGallery images={images} />
      {moreBtn && <LoadMoreBtn onClick={handleMoreBtn} />}
    </>
  )
}

export default App
