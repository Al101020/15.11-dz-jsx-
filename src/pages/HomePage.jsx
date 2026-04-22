import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAddMovie } from '../features/resultSearchSlice';
import fetchMovies from '../api/fetchMovies';
import MovieSearchResult from '../components/MovieSearchResult';
import { selectMoviesObj } from '../features/resultSearchSlice';

const varObj = {};
const apiKey = '64405bd2'; // API-ключ

const HomePage = () => {
  const [textInput, setTextInput] = useState('');
  const [search, setSearch] = useState('');
  const addMovies = useSelector(selectAddMovie);

  const dispatch = useDispatch();

    // Выбираем нужные части состояния из стора - moviesArr
  const { movies: movies, favorites: favorites, isLoading, isError,
    error } = useSelector((state) => state.moviesObj);

     const handleChangeSearch = (e) => {     // e.preventDefault();
    
    const valueInput = e.target.value;
    setTextInput(valueInput);

    const input = e.target;// console.log(input);
    // Добавляем обработчик события keypress
    input.addEventListener("keypress", function(e) {
      if (e.key === 'Enter') {
        if (varObj.valueInput === input.value) {
          return;
        } 

        varObj.valueInput = input.value;

        setSearch(input.value);
        setTextInput('');
 
        const ob = {
          apiKey: apiKey,
          textInput: varObj.valueInput,
        };

        if (ob.textInput) {
          dispatch(fetchMovies(ob));
        };
      };
    });
  };

  const searchForMovie = () => {
    setSearch(textInput);
    const ob = {apiKey: apiKey, textInput: textInput, dispatch: dispatch, addMovies: addMovies};
    setTextInput('');
    dispatch(fetchMovies(ob));
  };

    // Эффект для загрузки пользователей при монтировании компонента
  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

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
        <button onClick={searchForMovie}>Искать фильм</button>
      </div>
      <MovieSearchResult />
    </>
  );
};

export default HomePage;
