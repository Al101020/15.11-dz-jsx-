import { useSelector } from 'react-redux';
// import { addFavorite, removeFavorite } from '../features/resultSearchSlice';
import MovieFavorite from '../components/MovieFavorite';

const FavoritesPage = () => {        // Выбираем favorites из стора
  const { favorites: favorites } = useSelector((state) => state.moviesObj);
  // console.log(favorites);
  return (
    <>
      <h1>Страница избранного</h1>
      <ul>
        {favorites.map((favorite) => (
          <MovieFavorite key={favorite.imdbID} props={favorite} />
        ))}
      </ul>
    </>
  );
};

export default FavoritesPage;
