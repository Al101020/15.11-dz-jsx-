import { useNavigate } from 'react-router-dom';
import fetchDetailsMovie from "../api/fetchDetailsMovie";

const handleDetailsMovie = (e, navigate) => {
  e.preventDefault();
  console.log('--- handleDetailsMovie ---');
  const li = e.target.closest('.liMovie');
  const imdbID = li.children[2].textContent;
  navigate(`/movie/:${imdbID}`);
};

export default handleDetailsMovie;

// ---
// import fetchDetailsMovie from "../api/fetchDetailsMovie";

// const handleDetailsMovie = (e, dispatch) => {
//   e.preventDefault();
//   console.log('--- handleDetailsMovie ---');
//   const li = e.target.closest('.liMovie');
//     const imdbID = li.children[2].textContent;
//   dispatch(fetchDetailsMovie(imdbID));
//   navigate(`/movie/:${imdbID}`);
// };

// export default handleDetailsMovie;