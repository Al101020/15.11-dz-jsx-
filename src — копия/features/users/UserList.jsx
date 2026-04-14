// features/users/UserList.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, clearError } from './usersSlice';

const UserList = () => {
  const dispatch = useDispatch();
  // Выбираем нужные части состояния из стора
  const { items: users, isLoading, isError, error } = useSelector((state) => state.users);

  // Эффект для загрузки пользователей при монтировании компонента
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleRetry = () => {
    dispatch(clearError());
    dispatch(fetchUsers());
  };

  // Рендерим состояние загрузки
  if (isLoading) {
    return <div className="loading">Загрузка пользователей...</div>;
  }

  // Рендерим состояние ошибки
  if (isError) {
    return (
      <div className="error">
        <p>Ошибка при загрузке: {error}</p>
        <button onClick={handleRetry}>Попробовать снова</button>
      </div>
    );
  }

  // Рендерим список пользователей
  return (
    <div>
      <h2>Список пользователей(пример из интернета)</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;