import { useSelector, useDispatch } from 'react-redux';

import { selectMovies } from '../features/resultSearchSlice';
import { selectMoviesObj } from '../features/resultSearchSlice';

const Result = () => {
  const movies = useSelector(selectMovies); 
  // console.log(movies);
  const moviesObj = useSelector(selectMoviesObj); 
  // console.log(moviesObj);

    // isLoading
  if (moviesObj.isLoading) {
    return (
      <div className="isLoading">
        <p>загрузка...</p>
        {/* <button onClick={handleRetry}>Попробовать снова</button> */}
      </div>
    );
  } else {
    console.log(moviesObj.movies)
  };

  return (
    <>
      <div className='result'>Результат</div>
    </>
  )
}

export default Result;
