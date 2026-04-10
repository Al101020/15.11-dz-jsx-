import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { selectMovies } from '../features/resultSearchSlice';
import { selectMoviesObj } from '../features/resultSearchSlice';

const Result = () => {
  const movies = useSelector(selectMovies);   // console.log(movies);
  const moviesArr = movies;  // console.log(moviesArr.lenght);

  const moviesObj = useSelector(selectMoviesObj);   // console.log(moviesObj);

  const handleToFavorites = () => {
    console.log('Кнопка - в избранное');
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
        {movies.map((movie) => (
          <li key={uuidv4()}>
            <strong>{movie.Title}</strong> ({movie.Year}){/*  // imdbID */}
            <button onClick={(e) => handleToFavorites(e)}>в избранное</button>{/*  */}
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
