import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectMovies } from '../features/resultSearchSlice'; // ---
import { selectAddMovie } from '../features/resultSearchSlice'; // ---

import fetchMovies from '../api/fetchMovies';

import { clearError } from '../features/resultSearchSlice';

import Result from '../components/Result';

const HomePage = () => {
  const [textInput, setTextInput] = useState('');
  const [search, setSearch] = useState('');
  const [foundMovies, setFoundMovies] = useState([]);  // const movies = useSelector(selectMovies);
  const addMovies = useSelector(selectAddMovie);

  const dispatch = useDispatch();
    // Выбираем нужные части состояния из стора - moviesArr
    const { movies: movies, isLoading, isError, error } = useSelector((state) => state.moviesObj);

    // Эффект для загрузки пользователей при монтировании компонента
  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);
  
  const handleRetry = () => { // для кнопки обновить
    dispatch(clearError());
    dispatch(fetchMovies());
  };

  const handleChangeSearch = (e) => {
    e.preventDefault();
    const valueTarget = e.target.value;
    setTextInput(valueTarget);
  };

  const apiKey = '64405bd2'; // API-ключ

  const handleSearch = () => {
    setSearch(textInput);
    setTextInput('');    // console.log(search);    // console.log('Перед запуском fetchMovies');
    const ob = {apiKey: apiKey, textInput: textInput, dispatch: dispatch, addMovies: addMovies};
    // fetchMovies(ob);
    dispatch(fetchMovies(ob));
  };

  useEffect(() => { // - под вопросом.
    if (search === '') {
      return;
    }
  }, [search]);

  // Рендерим состояние ошибки
  if (isError) {
    return (
      <div className="error">
        <p>Ошибка при загрузке: {error}</p>
        {/* <button onClick={handleRetry}>Попробовать снова</button> */}
      </div>
    );
  };

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
      <Result />
    </>
  );
};

export default HomePage;
