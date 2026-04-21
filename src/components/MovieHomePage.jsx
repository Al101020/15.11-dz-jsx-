import { useDispatch } from 'react-redux';
import { addFavorite, removeFavorite } from '../features/resultSearchSlice';
import handleDetailsMovie from './handleDetailsMovie';
// import fetchDetailsMovie from '../api/fetchDetailsMovie';

import { useNavigate } from 'react-router-dom';// ---


function MovieHomePage(props) {  // const favorites = Array.from(props.favorites);
  const favorites = props.favorites;
  
  const objMovie = props.movie;
  console.log(objMovie);

  const dispatch = useDispatch();
  const navigate = useNavigate();// --- 

  const addToFavorites = () => {
    dispatch(addFavorite(objMovie));
  };

  const deleteFromFavorites = () => {
    dispatch(removeFavorite(objMovie));    // console.log('Удалить из избранного');
  };

  if (favorites.some(favorite => favorite.imdbID === objMovie.imdbID)) {
    return (
      <>
        <li className='liMovie'>
          <div className='divImgMovie' onClick={(e) => handleDetailsMovie(e, navigate)}>
            <img className='imgMovie' src={props.movie.Poster} alt='Плаката нет' />
          </div>
          <div className='divTitleMovie'>
            <strong>{props.movie.Title}</strong> ({props.movie.Year})<br />
            <button onClick={() => deleteFromFavorites()}>Удалить из избранного</button>
          </div>
          <strong className='displayNone'>{props.movie.imdbID}</strong>
        </li>
      </>
    );
  };

  return (
    <>
      <li className='liMovie'>
        <div className='divImgMovie' onClick={(e) => handleDetailsMovie(e, navigate)}>
          <img className='imgMovie' src={props.movie.Poster} alt='Плаката нет' />
        </div>
        <div className='divTitleMovie'>
          <strong>{props.movie.Title}</strong> ({props.movie.Year})<br />
          <button onClick={() => addToFavorites()}>Добавить в избранные</button>
        </div>
        <strong className='displayNone'>{props.movie.imdbID}</strong>
      </li>
    </>
  );
}

export default MovieHomePage;
