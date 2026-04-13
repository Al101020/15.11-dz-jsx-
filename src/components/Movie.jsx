import { useSelector, useDispatch } from 'react-redux';

import { addFavorite, removeFavorite } from '../features/resultSearchSlice';



function Movie(props) { //   console.log(props);

      // Выбираем favorites из стора - moviesArr
  const { favorites: favorites } = useSelector((state) => state.moviesObj);
//   console.log(favorites);

  const dispatch = useDispatch();

  
  const handleToFavorites = (e) => {
    console.log('Кнопка - в избранное'); 
    // console.log(e.target.parentElement.parentElement.children[2].textContent);
    const movieId = e.target.parentElement.parentElement.children[2].textContent;
    
    dispatch(addFavorite(movieId));
  };

  return (
    <>
      <li className='liMovie'>
        <div className='divImgMovie'>
          <img className='imgMovie' src={props.props.Poster} alt={props.props.Poster} />
        </div>
        <div className='divTitleMovie'>
          <strong>{props.props.Title}</strong> ({props.props.Year})<br />
          <button onClick={(e) => handleToFavorites(e)}>в избранное</button>
        </div>
        <strong className='displayNone'>{props.props.imdbID}</strong>
      </li>
    </>
  );
}

export default Movie;
