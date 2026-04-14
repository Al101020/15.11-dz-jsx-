import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import handleDetailsMovie from './handleDetailsMovie';
// import fetchMovies from '../api/fetchMovies';
import fetchDetailsMovie from '../api/fetchDetailsMovie';

function MovieFavorite(favorite) {
  const dispatch = useDispatch();
      // Эффект для загрузки пользователей при монтировании компонента
  useEffect(() => {
    dispatch(fetchDetailsMovie());
  }, [dispatch]);
  return (
    <>
      <li className='liMovie'>
        <div className='divImgMovie' onClick={(e) => handleDetailsMovie(e, dispatch,
           fetchDetailsMovie)}>
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
