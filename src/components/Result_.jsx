import { useSelector, useDispatch } from 'react-redux';

import { moviesAction, movies } from '../features/resultSearchSlice';


const Result = () => {
  const moviesAction_ = useSelector(moviesAction); // const count = useSelector(selectCount);
  const movies_ = useSelector(movies);
  console.log(moviesAction_);
  console.log(movies_);
  // if (!movies.length) {
  //   console.log("Массив пуст");
  // } else {
  //   console.log("Массив НЕ пуст");
  // }
  //

  // const count = useSelector(selectCount);
  
  // const store = useContext(appStore); // const store = useContext(appStore: React.FC); // нет
  // console.log(store);

  return (
    <>
      <div className='result'>Результат</div>      {/* <span>{count}</span> */}
    </>
    

  )
}

export default Result;
