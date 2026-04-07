import { useSelector, useDispatch } from 'react-redux';

import {
  selectMovies,
} from '../features/resultSearchSlice';


const Result = () => {
  const movies = useSelector(selectMovies); 
  console.log(movies);

  return (
    <>
      <div className='result'>Результат</div>      {/* <span>{count}</span> */}
    </>
  )
}

export default Result;
