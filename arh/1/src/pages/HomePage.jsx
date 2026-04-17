import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// import { selectMovies } from '../features/resultSearchSlice'; // ---
import { selectAddMovie } from '../features/resultSearchSlice'; // ---

import fetchMovies from '../api/fetchMovies';

// import { clearError } from '../features/resultSearchSlice';

import Result from '../components/Result';

const varObj = {};

const apiKey = '64405bd2'; // API-ключ

const HomePage = () => {
  const [textInput, setTextInput] = useState('');
  const [search, setSearch] = useState('');
  // const [foundMovies, setFoundMovies] = useState([]);
  const addMovies = useSelector(selectAddMovie);

  const dispatch = useDispatch();

    // Выбираем нужные части состояния из стора - moviesArr
  const { movies: movies, favorites: favorites, isLoading, isError,
    error } = useSelector((state) => state.moviesObj);   // console.log(favorites);

    // Эффект для загрузки пользователей при монтировании компонента
  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);
  
  const handleChangeSearch = (e) => {     // e.preventDefault();
    
    const valueInput = e.target.value;
    setTextInput(valueInput);    // console.log(textInput);

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
          dispatch: dispatch,
          addMovies: addMovies
        };        // console.log(ob);

        if (ob.textInput) {
          dispatch(fetchMovies(ob));
        };
      };
    });
  };

  const handleSearch = () => {    // console.log(textInput);
    
    setSearch(textInput);
    const ob = {apiKey: apiKey, textInput: textInput, dispatch: dispatch, addMovies: addMovies};
    setTextInput('');    // console.log(search);    // console.log('Перед запуском fetchMovies');
    // console.log(ob);     // fetchMovies(ob);
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
