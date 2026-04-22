import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addFavorite, removeFavorite } from '../features/resultSearchSlice';
import { selectDetailsObj } from '../features/detailsSlice';
import { selectDetails } from '../features/detailsSlice';
import { upgradeDetails } from '../features/detailsSlice';
import { selectUpgradeDetails } from '../features/detailsSlice';

import fetchDetailsMovie from '../api/fetchDetailsMovie';
import LoaderDetails from './LoaderDetails';

import { createAsyncThunk } from '@reduxjs/toolkit';
import { selectFavorites } from '../features/resultSearchSlice';
import { selectMovies } from '../features/resultSearchSlice';

const DetalistPage = () => {
  const varObj = {};
  const favorites = useSelector(selectFavorites);
  // console.log(favorites); // ---
  const movies = useSelector(selectMovies);

  const dispatch = useDispatch();
  const url = window.location.href;
  const imdbID = url.split('/:')[1];

  const detailsObj = useSelector(selectDetailsObj);
  const details = useSelector(selectDetails);
  // console.log(details); // ---

  const objMovie = movies.find(item => item.imdbID === imdbID);
  // const objFavorites = favorites.find(item => item.imdbID === imdbID);

  const addToFavorites = () => {
    const objFavorites = favorites.find(item => item.imdbID === imdbID); // ---
    console.log(favorites);

    if (!objMovie === undefined) {
      console.log(objMovie);
      dispatch(addFavorite(objMovie));
    } else if (!objFavorites === undefined) {
      console.log(objFavorites);
      dispatch(addFavorite(objFavorites));
    } else {
      // console.log(varObj.delObjFavorites);
      
      const obj = {}
      obj.Poster = details.Poster;
      obj.Title = details.Title;
      obj.Type = details.Type;
      obj.Year = details.Year;
      obj.imdbID = details.imdbID;
      console.log(obj);
      dispatch(addFavorite(obj));
    };
  };

  const deleteFromFavorites = () => {
    const objFavorites = favorites.find(item => item.imdbID === imdbID); // ---
    console.log(objFavorites);
    varObj.delObjFavorites = objFavorites;
    dispatch(removeFavorite(objFavorites));
  };


  //     Эффект для загрузки пользователей при монтировании компонента  
  const ob = {
    apiKey: '64405bd2',
    id: imdbID,
  }

  useEffect(() => {
    dispatch(fetchDetailsMovie(ob));
  }, [dispatch]);

  if (detailsObj.isLoadingDetails) {
    return (
      <>
        <h1>Страница деталей фильма</h1>
        <LoaderDetails />
      </>
    );
  }

  if (detailsObj.isErrorDetails) {
    return (
      <>
        <h1>Страница деталей фильма</h1>
        <div className="error">
          <p>Ошибка при загрузке: {detailsObj.errorDetails}</p>
        </div>
      </>
    );
  };

  if (detailsObj.details.Title) {
    console.log(favorites);
    if (favorites.some(favorite => favorite.imdbID === imdbID)) {
      return (
        <>
          <h1>Страница деталей фильма</h1>
          <p>Title: <strong>{detailsObj.details.Title}</strong>({detailsObj.details.Year})</p>
          <p>Released: <strong>{detailsObj.details.Released}</strong></p>
          <p>Runtime: <strong>{detailsObj.details.Runtime}</strong></p>
          <p>Type: <strong>{detailsObj.details.Type}</strong></p>
          <p>Actors: <strong>{detailsObj.details.Actors}</strong></p>
          <p>BoxOffice: <strong>{detailsObj.details.BoxOffice}</strong></p>
          <p>Country: <strong>{detailsObj.details.Country}</strong></p>
          <p>Director: <strong>{detailsObj.details.Director}</strong></p>
          <p>Genre: <strong>{detailsObj.details.Genre}</strong></p>
          <p>Language: <strong>{detailsObj.details.Language}</strong></p>
          <p>Plot: <strong>{detailsObj.details.Plot}</strong></p>
          <p>Writer: <strong>{detailsObj.details.Writer}</strong></p>
          <button onClick={() => deleteFromFavorites()}>Удалить из избранного</button>
          <p><img src={detailsObj.details.Poster} alt='Плаката нет' /></p>
        </>
      );
    } else {
      return (
      <>
        <h1>Страница деталей фильма</h1>
          <p>Title: <strong>{detailsObj.details.Title}</strong>({detailsObj.details.Year})</p>
          <p>Released: <strong>{detailsObj.details.Released}</strong></p>
          <p>Runtime: <strong>{detailsObj.details.Runtime}</strong></p>
          <p>Type: <strong>{detailsObj.details.Type}</strong></p>
          <p>Actors: <strong>{detailsObj.details.Actors}</strong></p>
          <p>BoxOffice: <strong>{detailsObj.details.BoxOffice}</strong></p>
          <p>Country: <strong>{detailsObj.details.Country}</strong></p>
          <p>Director: <strong>{detailsObj.details.Director}</strong></p>
          <p>Genre: <strong>{detailsObj.details.Genre}</strong></p>
          <p>Language: <strong>{detailsObj.details.Language}</strong></p>
          <p>Plot: <strong>{detailsObj.details.Plot}</strong></p>
          <p>Writer: <strong>{detailsObj.details.Writer}</strong></p>
          <button onClick={() => addToFavorites()}>Добавить в избранные</button>
          <p><img src={detailsObj.details.Poster} alt='Плаката нет' /></p>
        </>
      );
    };
  };
};

export default DetalistPage;
