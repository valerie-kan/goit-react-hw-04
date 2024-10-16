import { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css'
import Modal from 'react-modal';

import SearchBar from './components/SearchBar/SearchBar'
import { ImageGallery } from './components/ImageGallery/ImageGallery';
import ErrorMessage from './components/ErrorMessage/ErrorMessage'
import Loader from './components/Loader/Loader';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';

Modal.setAppElement('#root');

const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const App = () => {

  const [searchTerm, setSearchTerm] = useState(null);
  const [imgArr, setImgArr] = useState(null);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [isLoading, setisLoading] = useState(false);
  const [totalPages, setTotalPages] = useState();
  const [modalIsOpen, setIsOpen] = useState(false);


  useEffect(() => {
    const fetchInfo = async () => {
      if (!searchTerm) return;
      try {
        setisLoading(true);

        const { data } = await axios.get(`https://api.unsplash.com/search/photos?client_id=4lKKdkfWCfDLZYT9-8NaB0SDVimhhTVfwjX3NlnOhYs&page=${page}&query=${searchTerm}&orientation=landscape`)
      
        setTotalPages(data.total_pages);

        setImgArr((prev) => {
          if (prev) {
            return [...prev, ...data.results]
          } else {
            return [...data.results]
          }
        });
      } catch (error) {
        setError(error.message);
      } finally {
        setisLoading(false);
      }}
    fetchInfo();
  }, [searchTerm, page])
    

  const onSubmit = searchWord => {
    setSearchTerm(searchWord);
    setImgArr(null);
    setPage(1);
  }

  const onLoadMore = () => {
    setPage(page + 1);
  }

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      <ImageGallery imgArr={imgArr} openModal={openModal} />
      {isLoading && <Loader/>}
      <ErrorMessage error={error} />
      {page < totalPages && <LoadMoreBtn onLoadMore={onLoadMore} imgArr={imgArr} />}
      <ImageModal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onClose={closeModal}
        style={modalStyles}/>
    </>
  )
}

export default App
