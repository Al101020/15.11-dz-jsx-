import { Route, Routes } from 'react-router-dom';

import './App.css';
import HomePage from './pages/HomePage';
import FavoritesPage from './pages/FavoritesPage';
import Navbar from './components/Navbar';

import Result from './components/Result';

export const App = () => {
  return (
  <div className="App">
    <h1>Домашнее задание к занятию «Redux Toolkit»</h1>
    <h3>Задание: Поиск фильмов по каталогу IMDb и добавление найденных фильмов в "Избранное"</h3>
    <div className="wrapper">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
      <Result />
    </div>
  </div>
)};




  // const appStore = useStore(AppStore);
  // return <div>{appStore.user}</div>;
  // console.log(store);


{/* <ResultSearchSlice /> */}


// import ResultSearchSlice from './ResultSearchSlice';

// export interface interfaceProps {
//   id?: number,
//   inputSearch?: string
// };
