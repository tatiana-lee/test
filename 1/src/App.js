import './App.css';
import { Input } from 'antd';
import search from './utils/search.svg';
import ModifiedCard from './components/Card/ModifiedCard';
import { useState, useEffect } from 'react';
import ModalCard from './components/Modal/ModalCard';
import axios from 'axios';

function App() {
  const [searchText, setSearchText] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentModalId, setCurrentModalId] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async (str) => {
      try {
        const result = await axios
          .get('http://localhost:3000', {
            params: {
              term: str,
            },
          })
          .then((data) => data.data);
        setData(result);
      } catch (error) {
        console.log('Error getting data', error);
      }
    };
    getData(searchText);
  }, [searchText]);

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  const showModal = (e) => {
    setCurrentModalId(e.target.id);
    console.log(currentModalId);
    if (currentModalId) {
      setIsModalOpen(true);
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='App'>
      <div className='main'>
        <div className='head-search'>
          <div className='search-input'>
            <Input
              id='search'
              size='large'
              variant='borderless'
              className='search-input'
              onChange={handleChange}
            ></Input>
            <img className='search' src={search} alt='search'></img>
          </div>
        </div>
        <div className='board'>
          <ModifiedCard search={searchText} onClick={showModal} data={data} />
        </div>
        <ModalCard
          isModalOpen={isModalOpen}
          handleCancel={handleCancel}
          currentModalId={currentModalId}
          data={data[currentModalId]}
        />
      </div>
    </div>
  );
}

export default App;
