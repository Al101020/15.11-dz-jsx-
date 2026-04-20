import { useSelector } from 'react-redux';

import { selectMovies } from '../features/resultSearchSlice';
import { selectMoviesObj } from '../features/resultSearchSlice';

import Loader from './Loader';
import NothingWasFound from './NothingWasFound';
import MovieHomePage from './MovieHomePage';

const Result = () => {
  const movies = useSelector(selectMovies);
  const moviesObj = useSelector(selectMoviesObj);

  // console.log(movies);

  if (moviesObj.isLoading) {
    return <Loader />;
  } else if (movies === undefined) {
    return <NothingWasFound />;
  }
  //  else if (movies[0]) {
    
    return (
      <>
        <h2>Список фильмов</h2>
        <ul>
          {movies.map((movie) => (
            <MovieHomePage key={movie.imdbID} props={movie} />
          ))}
        </ul>
      </>
    );
  // };
}

export default Result;
