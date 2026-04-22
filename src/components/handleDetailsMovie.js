import { useNavigate } from 'react-router-dom';
import fetchDetailsMovie from "../api/fetchDetailsMovie";

import { upgradeDetails } from '../features/detailsSlice';

const handleDetailsMovie = (e, navigate, dispatch, objMovie) => {
  e.preventDefault();
  dispatch(upgradeDetails(objMovie));
  const li = e.target.closest('.liMovie');
  const imdbID = li.children[2].textContent;
  navigate(`/movie/:${imdbID}`);
};

export default handleDetailsMovie;
