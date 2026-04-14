import { useSelector, useDispatch } from 'react-redux';
import { addFavorite, removeFavorite } from '../features/resultSearchSlice';
import handleDetailsMovie from './handleDetailsMovie';
import fetchDetailsMovie from '../api/fetchDetailsMovie';

function MovieHomePage(props) {
  const dispatch = useDispatch();

  const handleToFavorites = () => {
    const objMovie = props.props;
    dispatch(addFavorite(objMovie));
  };

  return (
    <>
      <li className='liMovie'>
        <div className='divImgMovie' onClick={(e) => handleDetailsMovie(e, dispatch,
           fetchDetailsMovie)}>
          {/* <img className='imgMovie' src={props.props.Poster} alt={props.props.Poster} /> */}
          <img className='imgMovie' src={props.props.Poster} alt='Картинки нет' />
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
