import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { selectMovies } from '../features/resultSearchSlice';
import { selectMoviesObj } from '../features/resultSearchSlice';

const Result = () => {
  const movies = useSelector(selectMovies); 
  console.log(movies);
  const moviesArr = movies;
  // console.log(Array.isArray(moviesArr));
  // console.log(moviesArr.lenght);

  const moviesObj = useSelector(selectMoviesObj); 
  console.log(moviesObj);  // console.log(movies.lenght);

    // isLoading
  if (moviesObj.isLoading) {
    return (
      <div className="isLoading">
        <p>загрузка...</p>
        {/* <button onClick={handleRetry}>Попробовать снова</button> */}
      </div>
    );
  } else if (movies[0]) {
    // console.log(moviesObj.movies);
    return (
      <>
        <div className='result'>Результат</div>
        <h2>Список фильмов</h2>
      <ul>
        {movies.map((movie) => (
          <li key={uuidv4()}>
            <strong>{movie.Title}</strong> ({movie.Year}, {movie.Writer}, {movie.Runtime})
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
