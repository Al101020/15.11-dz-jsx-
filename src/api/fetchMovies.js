import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchMovies = createAsyncThunk(
  'moviesSearch/fetchMovies',
  async (ob, thunkAPI) => {
    
    try {
      if (ob === undefined) {
        return;
      }
      const response = 
      await fetch(`https://www.omdbapi.com?apikey=${ob.apiKey}&s=${ob.textInput}`);
      if (!response.ok) {
        throw new Error('Failed to fetch Movies');
      } else {
        const data = await response.json();
        return data;
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export default fetchMovies;





// Создаем асинхронный thunk
            // Поиск: https://www.omdbapi.com?apikey=YOUR_KEY&s=SEARCH_TERM
        // console.log(data);//
 // Это станет action.payload в fulfilled
      // Можно использовать thunkAPI.rejectWithValue для передачи структурированных данных об ошибке
// // Создаем асинхронный thunk
// const fetchMovies = createAsyncThunk(
//   'moviesSearch/fetchMovies',
//   async (ob, thunkAPI) => {
    
//     try {
//       if (ob === undefined) {
//         return;
//       }      //   console.log('Перед запуском: fetchMovies');
//     //   console.log(ob);
//       const response = 
//       await fetch(`https://www.omdbapi.com/?apikey=${ob.apiKey}&t=${ob.textInput}`);
//       if (!response.ok) {
//         console.log(',jkvkv');
//         throw new Error('Failed to fetch Movies');
//       } else {
//         const data = await response.json();
//         console.log(data);//
//         return data; // Это станет action.payload в fulfilled
//       }
//     } catch (error) {      // Можно использовать thunkAPI.rejectWithValue для передачи структурированных данных об ошибке
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export default fetchMovies;