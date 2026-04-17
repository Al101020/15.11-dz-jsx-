import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectDetailsObj } from '../features/detailsSlice';
import { selectDetails } from '../features/detailsSlice';
import { upgradeDetails } from '../features/detailsSlice';

import fetchDetailsMovie from '../api/fetchDetailsMovie';

import LoaderDetails from './LoaderDetails';

const apiKey = '64405bd2'; // API-ключ

const DetalistPage = () => {
  const dispatch = useDispatch();
  const url = window.location.href;
  const imdbID = url.split('/:')[1];

  // dispatch(fetchMovies(ob));// пример 
  // // apiKey: apiKey, textInput: textInput, dispatch: dispatch, addMovies: addMovies
  // const ob = { apiKey: apiKey, imdbID: imdbID, };
  // console.log(ob);
  

  const detailsObj = useSelector(selectDetailsObj);
  console.log(detailsObj);
  
  const details = useSelector(selectDetails);
  console.log(details);

  // useEffect();
  useEffect(() => {
    // dispatch(fetchDetailsMovie(ob));
    dispatch(upgradeDetails(imdbID));
  }, [dispatch]);
  
  useEffect(() => {
    dispatch(fetchDetailsMovie(imdbID));
  }, [details]);

  if (detailsObj.isLoadingDetails) {
    return <LoaderDetails />;
  }

  if (detailsObj.isErrorDetails) {
    return (
      <div className="error">
        <p>Ошибка при загрузке: {detailsObj.errorDetails}</p>
      </div>
    );
  };

  return (
    <>
      <h1>Страница деталей фильма</h1>
    </>
  );
};

export default DetalistPage;



// import { createAsyncThunk } from '@reduxjs/toolkit';


// const apiKey = '64405bd2';

// const fetchDetailsMovie = createAsyncThunk(
//   'details/fetchDetailsMovie',// ob // dispatch(fetchMovies(ob)); - пример
//   async (ob, thunkAPI ) => {
//     try {
//       if (ob.id === '' || ob.id === undefined) {
//         return;
//       };
//       console.log(ob);

//       const response = await fetch(`https://www.omdbapi.com?apikey=${ob.apiKey}&i=${ob.id}`);
//       if (!response.ok) {
//         throw new Error('Failed to fetch Movies');
//       } else {
//         const data = await response.json();
//         console.log(data);//
//         dispatch(upgradeDetails(data));
//         return data;
//       }
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );


  // const ob = {
  //   apiKey: apiKey,
  //   id: imdbID,
  //   dispatch: dispatch,
  //   upgradeDetails: upgradeDetails,
  //   details: details,
  // }

  // // dispatch(fetchDetailsMovie(ob));
  // fetchDetailsMovie(ob);

      // Эффект для загрузки пользователей при монтировании компонента
  // useEffect(() => {    // console.log('useEffect'); // --- ????????
  //   dispatch(fetchDetailsMovie());
  // }, [dispatch]);

        {/* <p>Ошибка при загрузке: </p> */}