import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import handleDetailsMovie from './handleDetailsMovie';
import fetchDetailsMovie from '../api/fetchDetailsMovie';

import { upgradeDetails } from '../features/detailsSlice';

import { useNavigate } from 'react-router-dom';

import { addFavorite, removeFavorite } from '../features/resultSearchSlice';

function MovieFavorite(props) {
  console.log(props);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const objMovie = props.favorite;
  const deleteFromFavorites = () => {
    dispatch(removeFavorite(objMovie));    // console.log('Удалить из избранного');
  };

      // Эффект для загрузки пользователей при монтировании компонента
  // useEffect(() => {
  //   dispatch(fetchDetailsMovie());
  // }, [dispatch]);
  return (
    <>
      <li className='liMovie'>
        <div className='divImgMovie' onClick={(e) => handleDetailsMovie(e, navigate)}>
          <img className='imgMovie' src={props.favorite.Poster} alt={props.favorite.Poster} />
        </div>
        <div className='divTitleMovie'>
          <strong>{props.favorite.Title}</strong> ({props.favorite.Year})<br />
          <button onClick={() => deleteFromFavorites()}>Удалить из избранного</button>
        </div>
        <strong className='displayNone'>{props.favorite.imdbID}</strong>
      </li>
    </>
  );
}
export default MovieFavorite;
