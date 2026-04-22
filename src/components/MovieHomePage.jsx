import { useDispatch } from 'react-redux';
import { addFavorite, removeFavorite } from '../features/resultSearchSlice';
import { upgradeDetails } from '../features/detailsSlice';
import handleDetailsMovie from './handleDetailsMovie';

import { useNavigate } from 'react-router-dom';


function MovieHomePage(props) {
  // console.log(props);
  
  const favorites = props.favorites;
  
  const objMovie = props.movie;  
  // console.log(objMovie);// --- 

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addToFavorites = () => {
    dispatch(addFavorite(objMovie));
  };

  const deleteFromFavorites = () => {
    console.log('Удалить из избранного');
    console.log(objMovie);
    dispatch(removeFavorite(objMovie));
  };

  if (favorites.some(favorite => favorite.imdbID === objMovie.imdbID)) {
    return (
      <>
        <li className='liMovie'>
          {/* <div className='divImgMovie' onClick={(e) => {
              e.preventDefault();
              // console.log('--- handleDetailsMovie ---');
              // console.log(dispatch);  // undefined
            
              dispatch(upgradeDetails(objMovie));
            
            // const handleDetailsMovie = (e, navigate) => {
              // e.preventDefault();
              // console.log('--- handleDetailsMovie ---');
              const li = e.target.closest('.liMovie');
              const imdbID = li.children[2].textContent;
              navigate(`/movie/:${imdbID}`);
            }
          }> */}
          <div className='divImgMovie' onClick={(e) => handleDetailsMovie(e, navigate, dispatch, objMovie)}>
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
        <div className='divImgMovie' onClick={(e) => handleDetailsMovie(e, navigate, dispatch, objMovie)}>
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
