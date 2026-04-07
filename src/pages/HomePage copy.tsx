import type { JSX } from 'react';// import { interfaceProps } from '../App';
import { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { selectMovies } from '../features/resultSearchSlice'; // ---
import { selectAddMovie } from '../features/resultSearchSlice'; // ---

const HomePage = (): JSX.Element => {
  const [textInput, setTextInput] = useState('');
  const [search, setSearch] = useState('');
  const [foundMovies, setFoundMovies] = useState([]);

  const movies = useSelector(selectMovies); // --- 
  console.log(movies);

  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const valueTarget = e.target.value;
    setTextInput(valueTarget);
  };

  const handleSearch = () => {
    setSearch(textInput);
    setTextInput('');    // console.log(search);
  };

  const apiKey = '64405bd2'; // замените на ваш API-ключ

  useEffect(() => {
    if (search === '') {
      return;
    }    // console.log(search); // setItems(prevItems => [...prevItems, `Элемент ${prevItems.length + 1}`]);

    async function fetchData() {
      fetch(`https://www.omdbapi.com/?apikey=${apiKey}&t=${search}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);        // console.log(foundMovies);
        // const arr = [...foundMovies];
        // arr.push(data: any);
        // console.log(arr);
        // setFoundMovies(arr);
        setFoundMovies(data);
      })
      .catch(error => console.error('Fetch error:', error));
    };
    fetchData();
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
