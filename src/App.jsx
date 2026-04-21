import { Route, Routes } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// import { addFavorite } from '../features/resultSearchSlice';
import { addFavorite } from './features/resultSearchSlice';
// import { useDispatch } from 'react-redux';

import './App.css';
import HomePage from './pages/HomePage';
import FavoritesPage from './pages/FavoritesPage';
import DetalistPage from './pages/DetalistPage';
import Navbar from './components/Navbar';

export const App = () => {
  const dispatch = useDispatch();
  // Выбираем favorites из стора
    const { favorites: favorites } = useSelector((state) => state.moviesObj);
    console.log(favorites);
  
  // Сохраняем в Local Storage
  window.addEventListener('beforeunload', () => {
    const movieFavorites = [];
    
    favorites.forEach((el) => {
      if (!el.imdbID) {
        return;
      }
      // movieFavorites[el.imdbID] = el.imdbID;
      movieFavorites.push(el);
    });
    localStorage.setItem('movieFavorites', JSON.stringify(movieFavorites));
  });

  // Извлекаем из Local Storage
  // document.addEventListener('DOMContentLoaded', () => {
    const json = localStorage.getItem('movieFavorites');
    console.log(json);

    let movieFavorites;

    try {
      movieFavorites = JSON.parse(json);
      console.log(movieFavorites);
    } catch (error) {
      console.log(error);
    }

    if (movieFavorites) {
      // dispatch(addFavorite(movieFavorites));
    }
  // });

  return (
  <div className="App">
    <h1>Домашнее задание к занятию «Redux Toolkit»</h1>
    <h3>Задание: Поиск фильмов по каталогу IMDb и добавление найденных фильмов в "Избранное"</h3>
    <div className="wrapper">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/movie/:id" element={<DetalistPage />} />
      </Routes>
    </div>
  </div>
)};
