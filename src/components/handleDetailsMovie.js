// import { useSelector, useDispatch } from 'react-redux';

const handleDetailsMovie = (e, dispatch, fetchDetailsMovie) => {
  e.preventDefault();
  const li = e.target.closest('.liMovie');
  const id = li.children[2].textContent;
  console.log(li);
  console.log(id);

  dispatch(fetchDetailsMovie(id));
};

export default handleDetailsMovie;