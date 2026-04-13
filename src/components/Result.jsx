import './Result.css';
import { useSelector, useDispatch } from 'react-redux';

import { selectMovies } from '../features/resultSearchSlice';
import { selectMoviesObj } from '../features/resultSearchSlice';

import Loader from './Loader';
import NothingWasFound from './NothingWasFound';
import Movie from './Movie';

const Result = () => {
  const movies = useSelector(selectMovies);
  const moviesObj = useSelector(selectMoviesObj);

  if (moviesObj.isLoading) {
    return <Loader />;
  } else if (movies === undefined) {
    return <NothingWasFound />;
  } else if (movies[0]) {
    
    return (
      <>
        <h2>Список фильмов</h2>
        <ul>
          {movies.map((movie) => (
            <Movie key={movie.imdbID} props={movie} />
          ))}
        </ul>
      </>
    );
  };
}

export default Result;









          // <li key={movie.imdbID}>
          //   <strong>{movie.Title}</strong> ({movie.Year})
          //   <button onClick={(e) => handleToFavorites(e)}>в избранное</button>
          //   <strong className='displayNone'>{movie.imdbID}</strong>
          // </li>
// console.log(movies);
  // const moviesArr = movies;  // console.log(moviesArr.lenght);
   // console.log(moviesObj);
    // console.log(moviesObj.movies);

  // return (
  //   <>
  //     <div className='result'>Результат</div>
  //   </>
  // )