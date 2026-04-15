import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectDetailsObj } from '../features/detailsSlice';
import { selectDetails } from '../features/detailsSlice';
// import fetchDetailsMovie from '../api/fetchDetailsMovie';

import LoaderDetails from './LoaderDetails';


// function 
import { createAsyncThunk } from '@reduxjs/toolkit';

const apiKey = '64405bd2';

const fetchDetailsMovie = createAsyncThunk(
  'details/fetchDetailsMovie',// ob
  async (id, thunkAPI ) => {
    try {
      if (id === '' || id === undefined) {
        return;
      };
      console.log(id);

      const response = await fetch(`https://www.omdbapi.com?apikey=${apiKey}&i=${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch Movies');
      } else {
        const data = await response.json();
        console.log(data);//
        return data;
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


const DetalistPage = () => {
  const dispatch = useDispatch();
  const url = window.location.href;
  const imdbID = url.split('/:')[1];


  const detailsObj = useSelector(selectDetailsObj);
  console.log(detailsObj);
  
  const details = useSelector(selectDetails);
  console.log(details);


  fetchDetailsMovie(imdbID);

      // Эффект для загрузки пользователей при монтировании компонента
  // useEffect(() => {    // console.log('useEffect'); // --- ????????
  //   dispatch(fetchDetailsMovie());
  // }, [dispatch]);

  if (detailsObj.isLoadingDetails) {
    return <LoaderDetails />;
  }

  if (detailsObj.isErrorDetails) {
    return (
      <div className="error">
        <p>Ошибка при загрузке: {error}</p>
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
