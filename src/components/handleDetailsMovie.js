// import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const handleDetailsMovie = (e, dispatch, fetchDetailsMovie, details) => {
  e.preventDefault();
  

  const li = e.target.closest('.liMovie');
  const id = li.children[2].textContent;
  console.log(li);
  console.log(id);

  dispatch(fetchDetailsMovie(id));
  // dispatch(details(fetchDetailsMovie(id)));

  // const navigate = useNavigate();
  // navigate('/contacts');
};

export default handleDetailsMovie;