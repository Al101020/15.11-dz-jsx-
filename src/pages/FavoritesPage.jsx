import { useSelector } from 'react-redux';
import MovieFavorite from '../components/MovieFavorite';

const FavoritesPage = () => {        // Выбираем favorites из стора
  const { favorites: favorites } = useSelector((state) => state.moviesObj);
  return (
    <>
      <h1>Страница избранного</h1>
      <ul>
        {favorites.map((favorite) => (
          <MovieFavorite key={favorite.imdbID} favorite={favorite} favorites={favorites} />
        ))}
      </ul>
    </>
  );
};

export default FavoritesPage;
