import './Result.css';
import { useSelector, useDispatch } from 'react-redux';// import { v4 as uuidv4 } from 'uuid';

import { selectMovies } from '../features/resultSearchSlice';
import { selectMoviesObj } from '../features/resultSearchSlice';

const Result = () => {
  const movies = useSelector(selectMovies);// console.log(movies);
  const moviesArr = movies;  // console.log(moviesArr.lenght);

  const moviesObj = useSelector(selectMoviesObj);   // console.log(moviesObj);

  const handleToFavorites = (e) => {
    console.log('Кнопка - в избранное');
    console.log(e.target.parentElement);
  };

    // isLoading
  if (moviesObj.isLoading) {
    return (
      <div className="isLoading">
        <p>загрузка...</p>
      </div>
    );
  } else if (movies[0]) {    // console.log(moviesObj.movies);
    return (
      <>
        <h2>Список фильмов</h2>
      <ul>
        {movies.map((movie) => (          // <li key={uuidv4()}>
          <li key={movie.imdbID}>
            <strong>{movie.Title}</strong> ({movie.Year})
            <button onClick={(e) => handleToFavorites(e)}>в избранное</button>{/*  */}
            <strong className='displayNone'>{movie.imdbID}</strong>{/*  // imdbID // displayNone */}
          </li>
        ))}
      </ul>
      </>
    );
  };

  return (
    <>
      <div className='result'>Результат</div>
    </>
  )
}

export default Result;
