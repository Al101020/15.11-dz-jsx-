import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
// import handleDetailsMovie from './handleDetailsMovie';
// import fetchMovies from '../api/fetchMovies';
import fetchDetailsMovie from '../api/fetchDetailsMovie';

import { details } from '../features/detailsSlice';//

import { useNavigate } from 'react-router-dom';

function MovieFavorite(favorite) {//
  const dispatch = useDispatch();//
  const navigate = useNavigate();



  const handleDetailsMovie = (e) => {
    const li = e.target.closest('.liMovie');
    const imdbID = li.children[2].textContent;

    // console.log(li);
    // console.log(imdbID);
    // console.log(window.location.href);
    navigate(`/movie/:${imdbID}`);
  };



      // Эффект для загрузки пользователей при монтировании компонента
  useEffect(() => {
    dispatch(fetchDetailsMovie());
  }, [dispatch]);
  return (
    <>
      <li className='liMovie'>
        <div className='divImgMovie' onClick={(e) => handleDetailsMovie(e)}>
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
