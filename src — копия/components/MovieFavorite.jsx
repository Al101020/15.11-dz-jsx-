import handleDetailsMovie from '../features/handleDetailsMovie';

function MovieFavorite(favorite) {
  // console.log(favorite.props);
  return (
    <>
      <li className='liMovie'>
        <div className='divImgMovie' onClick={(e) => handleDetailsMovie(e)}>
          <img className='imgMovie' src={favorite.props.Poster} alt={favorite.props.Poster} />
        </div>
        <div className='divTitleMovie'>
          <strong>{favorite.props.Title}</strong> ({favorite.props.Year})<br />
          {/* <button onClick={(e) => handleToFavorites(e)}>в избранное</button> */}
        </div>
        <strong className='displayNone'>{favorite.props.imdbID}</strong>
      </li>
    </>
  );
}
export default MovieFavorite;



// function Favorite(favorite) { //   console.log(favorite.props);
//   return (
//     <>
//       <p className='blue'>ID избранного фильма - {favorite.props}</p>
//     </>
//   );
// }
// export default Favorite;

// return (
//     <>
//       <li className='liMovie'>
//         <div className='divImgMovie'>
//           <img className='imgMovie' src={props.props.Poster} alt={props.props.Poster} />
//         </div>
//         <div className='divTitleMovie'>
//           <strong>{props.props.Title}</strong> ({props.props.Year})<br />
//           <button onClick={(e) => handleToFavorites(e)}>в избранное</button>
//         </div>
//         <strong className='displayNone'>{props.props.imdbID}</strong>
//       </li>
//     </>
//   );