// features/users/usersSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Создаем асинхронный thunk
export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (_, thunkAPI) => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      
      // fetch не выбрасывает ошибку для HTTP статусов 4xx/5xx, поэтому проверяем вручную
      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }
      
      const data = await response.json();
      return data; // Это станет action.payload в fulfilled
    } catch (error) {
      // Можно использовать thunkAPI.rejectWithValue для передачи структурированных данных об ошибке
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    items: [],
    isLoading: false,
    isError: false,
    error: '',
  },
  reducers: {
    // Можно добавить синхронные редьюсеры, например, для очистки ошибки
    clearError: (state) => {
      state.isError = false;
      state.error = '';
    }
  },
  extraReducers: (builder) => {
    builder
      // Обработка начала загрузки (pending)
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
        state.isError = false; // Сбрасываем флаг ошибки при новом запросе
        state.error = '';
      })
      // Обработка успешной загрузки (fulfilled)
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        // Записываем массив пользователей, пришедший с сервера, в state.items
        state.items = action.payload;
      })
      // Обработка ошибки (rejected)
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        // Сохраняем сообщение об ошибке. Используем action.payload, т.к. использовали rejectWithValue
        state.error = action.payload || 'Something went wrong';
      });
  },
});

// Экспортируем сгенерированный редьюсер (для стора) и синхронные экшены
export const { clearError } = usersSlice.actions;
export default usersSlice.reducer;