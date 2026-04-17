import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectDetailsObj } from '../features/detailsSlice';
import { selectDetails } from '../features/detailsSlice';
import { upgradeDetailsImdbID } from '../features/detailsSlice';
import { upgradeDetailsMovie } from '../features/detailsSlice';

// import { selectDetailsMovie } from '../features/detailsSlice';
// import { selectDetailsObj } from '../features/detailsSlice'; // уже есть выше
import { selectDetailsMovie } from '../features/detailsSlice';

import fetchDetailsMovie from '../api/fetchDetailsMovie';

import LoaderDetails from './LoaderDetails';

const apiKey = '64405bd2'; // API-ключ

const DetalistPage = () => {
  const dispatch = useDispatch();
  const url = window.location.href;
  const imdbID = url.split('/:')[1];

  // const selectUpgradeDetailsMovie = useSelector(selectUpgradeDetailsMovie);
  // const selectDetailsMovie = useSelector(selectDetailsMovie); // (state) => state.counter.value
  // console.log(selectDetailsMovie);
  const detailsMovie = useSelector(selectDetailsMovie);
  // console.log(detailsMovie);



  const detailsObj = useSelector(selectDetailsObj);
  // console.log(detailsObj);
  
  const details = useSelector(selectDetails);
  // console.log(details);

  const toFavorites = () => {
    console.log('в Избранное');
  };
  // Delete from Favorites
  const deleteFromFavorites = () => {
    console.log('Удалить из Избранного');
  };
  // -------------------------------------------------------------------

  // useEffect();
  useEffect(() => {
    // dispatch(fetchDetailsMovie(ob));
    dispatch(upgradeDetailsImdbID(imdbID));
  }, [dispatch]);

  // useEffect(() => {
  //   console.log(selectUpgradeDetailsMovie);
  // }, [selectUpgradeDetailsMovie]);

  useEffect(() => {
    const obj = {imdbID: imdbID, dispatch: dispatch, upgradeDetailsMovie: upgradeDetailsMovie,}
    // console.log(obj);
    dispatch(fetchDetailsMovie(obj));
  }, [details]);

  if (detailsObj.isLoadingDetails) {
    return (
      <>
        <h1>Страница деталей фильма</h1>
        <LoaderDetails />
      </>
    );
  } else if (detailsObj.isErrorDetails) {
    return (
      <div className="error">
        <p>Ошибка при загрузке: {detailsObj.errorDetails}</p>
      </div>
    );
  } else if (detailsMovie.Title) {
    return (
    <>
      <h1>Страница деталей фильма</h1>
      <div>
        <button onClick={toFavorites}>В избранное</button>
        <button onClick={deleteFromFavorites}>Удалить из избранного</button>
        <p><strong>{detailsMovie.Title}</strong>({detailsMovie.Year}), Released: {detailsMovie.Released}</p>
        <p>Actors: {detailsMovie.Actors}</p>
        <p>Awards: {detailsMovie.Awards}</p>
        <p>BoxOffice: {detailsMovie.BoxOffice}</p>
        <p>Country: {detailsMovie.Country}</p>
        <p>DVD: {detailsMovie.DVD}</p>
        <p>Director: {detailsMovie.Director}</p>
        <p>Genre: {detailsMovie.Genre}</p>
        <p>... и т.д.</p>
        <p></p>
      </div>
    </>
  );
  }

  // return ( // было
  //   <>
  //     <h1>Страница деталей фильма</h1>
  //   </>
  // );

  // if (moviesObj.isLoading) {
  //   return <Loader />;
  // } else if (movies === undefined) {
  //   return <NothingWasFound />;
  // } else if (movies[0]) {
    
  //   return (
  //     <>
  //       <h2>Список фильмов</h2>
  //       <ul>
  //         {movies.map((movie) => (
  //           <MovieHomePage key={movie.imdbID} props={movie} />
  //         ))}
  //       </ul>
  //     </>
  //   );
  // };
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