import { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css'
import SearchBar from './components/SearchBar/SearchBar'
import { ImageGallery } from './components/ImageGallery/ImageGallery';
import ErrorMessage from './components/ErrorMessage/ErrorMessage'


const App = () => {

  const [searchTerm, setSearchTerm] = useState(null);
  const [imgArr, setImgArr] = useState(null);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInfo = async () => {
      if (!searchTerm) return;
      try {
        const { data } = await axios.get(`https://api.unsplash.com/search/potos?client_id=4lKKdkfWCfDLZYT9-8NaB0SDVimhhTVfwjX3NlnOhYs&page=${page}&query=${searchTerm}&orientation=landscape`)
      
        setImgArr(data.results);
      } catch (error) {
        setError(error.message);
      } finally {

      }}
    fetchInfo();
  }, [searchTerm])
    

  const onSubmit = searchWord => {
    setSearchTerm(searchWord);
  }

  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      <ImageGallery imgArr={imgArr} />
      <ErrorMessage error={error} />
    </>
  )
}

export default App
