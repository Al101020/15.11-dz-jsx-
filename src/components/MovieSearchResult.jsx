import { useSelector } from 'react-redux';
import { selectMovies } from '../features/resultSearchSlice';
import { selectMoviesObj } from '../features/resultSearchSlice';

// import { useSelector } from 'react-redux';
import { selectFavorites } from '../features/resultSearchSlice';

import Loader from './Loader';
import NothingWasFound from './NothingWasFound';
import MovieHomePage from './MovieHomePage';

const MovieSearchResult = () => {
  const movies = useSelector(selectMovies);
  // console.log(movies);
  const moviesObj = useSelector(selectMoviesObj);

  const favorites = useSelector(selectFavorites);  // console.log(favorites);
  
  if (moviesObj.isLoading) {
    return <Loader />;
  } else if (movies === undefined) {
    return <NothingWasFound />;
  }
  
  // console.log(moviesObj.movies);
  // if (movies.length === 0) {
  //   console.log(movies);
  // }
    
  return (
    <>
      <h2>Список фильмов</h2>
      <ul>
        {movies.map((movie) => (
          <MovieHomePage key={movie.imdbID} movie={movie} favorites={favorites} />
        ))}
      </ul>
    </>
  );
}

export default MovieSearchResult;
