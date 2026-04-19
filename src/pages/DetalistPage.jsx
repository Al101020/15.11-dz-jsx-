import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectDetailsObj } from '../features/detailsSlice';
import { selectDetails } from '../features/detailsSlice';
import { upgradeDetails } from '../features/detailsSlice';

import fetchDetailsMovie from '../api/fetchDetailsMovie';

import LoaderDetails from './LoaderDetails';

import { createAsyncThunk } from '@reduxjs/toolkit';

// const apiKey = '64405bd2';

const DetalistPage = () => {
  const dispatch = useDispatch();
  const url = window.location.href;
  const imdbID = url.split('/:')[1];

  const detailsObj = useSelector(selectDetailsObj);
  console.log(detailsObj);
  
  const details = useSelector(selectDetails);
  console.log(details);

  
//
const ob = {
  apiKey: '64405bd2',
  id: imdbID,
  dispatch: dispatch,
  upgradeDetails: upgradeDetails,
  details: details,
}

// dispatch(fetchDetailsMovie(ob)); // fetchDetailsMovie(ob); --- почему в штопор уходит, повторяется.
//
  

  //     Эффект для загрузки пользователей при монтировании компонента
  useEffect(() => {    // console.log('useEffect'); // --- ????????
    dispatch(fetchDetailsMovie(ob));
  }, [dispatch]);

  if (detailsObj.isLoadingDetails) {
    return <LoaderDetails />;
  }

  if (detailsObj.isErrorDetails) {
    return (
      <div className="error">
        <p>Ошибка при загрузке: {detailsObj.errorDetails}</p>
        {/* <p>Ошибка при загрузке: </p> */}
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
