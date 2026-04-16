import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import handleDetailsMovie from './handleDetailsMovie';// import fetchMovies from '../api/fetchMovies';
import fetchDetailsMovie from '../api/fetchDetailsMovie';

import { upgradeDetails } from '../features/detailsSlice';//// console.log(upgradeDetails);

import { useNavigate } from 'react-router-dom';

function MovieFavorite(favorite) {//
  const dispatch = useDispatch();//  // const navigate = useNavigate();
  const navigate = useNavigate();

      // Эффект для загрузки пользователей при монтировании компонента
  // useEffect(() => {
  //   dispatch(fetchDetailsMovie());
  // }, [dispatch]);
  return (
    <>
      <li className='liMovie'>
        <div className='divImgMovie' onClick={(e) => handleDetailsMovie(e, navigate)}>
          <img className='imgMovie' src={favorite.props.Poster} alt={favorite.props.Poster} />
        </div>
        <div className='divTitleMovie'>
          <strong>{favorite.props.Title}</strong> ({favorite.props.Year})<br />
        </div>
        <strong className='displayNone'>{favorite.props.imdbID}</strong>
      </li>
    </>
  );
}
export default MovieFavorite;
