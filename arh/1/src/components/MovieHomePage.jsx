import { useDispatch } from 'react-redux';
import { addFavorite, removeFavorite } from '../features/resultSearchSlice';
import handleDetailsMovie from './handleDetailsMovie';
import fetchDetailsMovie from '../api/fetchDetailsMovie';

import { useNavigate } from 'react-router-dom';// ---

function MovieHomePage(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();// --- 

  const handleToFavorites = () => {
    const objMovie = props.props;
    dispatch(addFavorite(objMovie));
  };

  return (
    <>
      <li className='liMovie'>
        {/* <div className='divImgMovie' onClick={(e) => handleDetailsMovie(e, dispatch,
           fetchDetailsMovie)}> */}
        {/* <div className='divImgMovie' onClick={(e) => {
          e.preventDefault();
          console.log('--- handleDetailsMovie ---');
          const li = e.target.closest('.liMovie');
          const imdbID = li.children[2].textContent;
          navigate(`/movie/:${imdbID}`);
        }}> */}
        <div className='divImgMovie' onClick={(e) => handleDetailsMovie(e, navigate)}>
          <img className='imgMovie' src={props.props.Poster} alt='Плаката нет' />
        </div>
        <div className='divTitleMovie'>
          <strong>{props.props.Title}</strong> ({props.props.Year})<br />
          <button onClick={() => handleToFavorites()}>в избранное</button>
        </div>
        <strong className='displayNone'>{props.props.imdbID}</strong>
      </li>
    </>
  );
}

export default MovieHomePage;
