import { useNavigate } from 'react-router-dom';
import fetchDetailsMovie from "../api/fetchDetailsMovie";

import { upgradeDetails } from '../features/detailsSlice';
// import { useDispatch } from 'react-redux';

// import { useSelector, useDispatch } from 'react-redux';

const handleDetailsMovie = (e, navigate, dispatch, objMovie) => {
  e.preventDefault();
  console.log('--- handleDetailsMovie ---');
  // console.log(dispatch);  // undefined

  dispatch(upgradeDetails(objMovie));

// const handleDetailsMovie = (e, navigate) => {
  // e.preventDefault();
  // console.log('--- handleDetailsMovie ---');
  const li = e.target.closest('.liMovie');
  const imdbID = li.children[2].textContent;
  navigate(`/movie/:${imdbID}`);
};

export default handleDetailsMovie;
