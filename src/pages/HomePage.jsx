import { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { selectMovies } from '../features/resultSearchSlice'; // ---
import { selectAddMovie } from '../features/resultSearchSlice'; // ---

import fetchData from '../api/fetchData';

import { fetchAddMovies } from '../api/fetchData';


const HomePage = () => {
  const [textInput, setTextInput] = useState('');
  const [search, setSearch] = useState('');
  const [foundMovies, setFoundMovies] = useState([]);

  const addMovies = useSelector(selectAddMovie);

  const dispatch = useDispatch();

  const handleChangeSearch = (e) => {
    e.preventDefault();
    const valueTarget = e.target.value;
    setTextInput(valueTarget);
  };

  const apiKey = '64405bd2'; // API-ключ

  const handleSearch = () => {
    setSearch(textInput);
    setTextInput('');    // console.log(search);

    console.log('Перед запуском fetchAddMovies');
    fetchAddMovies(apiKey, textInput, dispatch, addMovies); // ----- запрос НЕ проходит
    console.log('Перед запуском fetchData');
    fetchData(apiKey, textInput, dispatch, addMovies); // --- запрос проходит
  };

  useEffect(() => { // - под вопросом.
    if (search === '') {
      return;
    }
  }, [search]);

  return (
    <>
      <h1>Главная страница с поиском</h1>
      <div className='search'>
        <input 
          type='text' 
          name='inputSearch' 
          id='inputSearch'
          value={textInput}
          onChange={handleChangeSearch}
          placeholder='Название'
          autoComplete='off'
        />
        <button onClick={handleSearch}>Искать фильм</button>
      </div>
    </>
  );
};

export default HomePage;
