

https://reactdev.ru/libs/redux-toolkit/#redux

# Блог Максима Габова
 - Урок 9: Асинхронные операции с `createAsyncThunk` в Redux Toolkit
https://max-gabov.ru/urok-9-asinxronnye-operacii-s-createasyncthunk-v-redux-toolkit/

https://max-gabov.ru/category/dlya-nachinayushhix/javascript-dlya-nachinayushhix/uroki-po-redux/

https://redux-toolkit.js.org/tutorials/quick-start






# Redux Toolkit - Поиск фильмов
===

## Задача
Создать приложение для поиска фильмов через OMDb API с возможностью добавления фильмов в избранное, используя Redux Toolkit.

## Настройка проекта

Создайте новый проект:
```bash
npx degit reduxjs/redux-templates/packages/vite-template-redux movie-search
cd movie-search
npm install
npm run dev
```

## Описание API

**OMDb API**: http://www.omdbapi.com/

**Ключи для API:**
- `64405bd2`
- `9713c5e7` 

Или зарегистрируйте свой ключ на сайте.

**Основные эндпоинты:**
- Поиск: `https://www.omdbapi.com?apikey=YOUR_KEY&s=SEARCH_TERM`
- Детали: `https://www.omdbapi.com?apikey=YOUR_KEY&i=MOVIE_ID`

## Функциональные требования

### Обязательная функциональность

**Роутинг и навигация:**
- [ ] Главная страница с поиском (`/`)
- [ ] Страница деталей фильма (`/movie/:id`)
- [ ] Страница избранного (`/favorites`)
- [ ] Навигация между страницами

**Поиск фильмов:**
- [ ] Поле ввода для поиска
- [ ] Кнопка поиска или поиск при нажатии Enter
- [ ] Отображение результатов поиска в виде карточек
- [ ] Состояния: загрузка, успех, ошибка, "ничего не найдено"
- [ ] Показать прелоадер во время запроса

**Детали фильма:**
- [ ] Переход к деталям при клике на карточку
- [ ] Полная информация о фильме
- [ ] Кнопка добавления/удаления из избранного

**Избранные фильмы:**
- [ ] Добавление фильма в избранное из результатов поиска
- [ ] Добавление фильма в избранное со страницы деталей
- [ ] Удаление фильма из избранного
- [ ] Отображение всех избранных фильмов
- [ ] Сохранение избранного в localStorage

### Структура данных

```typescript
// Фильм из поиска (краткая информация)
interface MovieSearchResult {
  imdbID: string;
  Title: string;
  Year: string;
  Type: string;
  Poster: string;
}

// Детальная информация о фильме
interface MovieDetails {
  imdbID: string;
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: { Source: string; Value: string }[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}

// Ответ API при поиске
interface SearchResponse {
  Search: MovieSearchResult[];
  totalResults: string;
  Response: string;
  Error?: string;
}
```

### Отображаемые поля

**В карточке поиска:**
- Постер фильма
- Название
- Год выпуска
- Тип (movie/series/episode)

**На странице деталей:**
- Постер фильма (Poster)
- Название фильма (Title)
- Год выпуска (Year)
- Жанр (Genre)
- Продолжительность (Runtime)
- Режиссер (Director)
- Актеры (Actors)
- Рейтинг IMDb (imdbRating)
- Сюжет (Plot)
- Награды (Awards)

## UI/UX требования

### Состояния загрузки
- [ ] Спиннер во время поиска
- [ ] Скелетон для карточек фильмов
- [ ] Прелоадер на странице деталей

### Обработка ошибок
- [ ] Сообщение "Фильмы не найдены"
- [ ] Ошибка API (неверный ключ, лимит запросов)
- [ ] Ошибка сети

### Адаптивность (опционально)
- [ ] Корректное отображение на мобильных устройствах
- [ ] Сетка карточек адаптируется к размеру экрана

## Критерии оценки

### Зачет ставится при выполнении:
- [x] Использован Redux Toolkit (createSlice, createAsyncThunk)
- [x] Настроен store с правильной типизацией
- [x] Поиск фильмов работает с отображением результатов
- [x] Добавление/удаление фильмов в избранное
- [x] Базовый роутинг между страницами
- [x] Обработка состояний loading/error
- [x] TypeScript используется корректно
- [x] Нет критических ошибок ESLint

### Отлично ставится при выполнении:
- [x] Всех требований на "зачет"
- [x] Полноценная страница деталей фильма
- [x] Сохранение избранного в localStorage
- [x] Хорошая обработка ошибок с понятными сообщениями
- [x] Качественный UI/UX (прелоадеры, адаптивность)
- [x] Использование селекторов для производных данных
- [x] Дебаунс для поиска (опционально)

## Подсказки по реализации

1. **API ключ**: вынесите в переменную окружения или константу
2. **Дебаунс**: используйте `setTimeout`/`clearTimeout` для оптимизации поиска
3. **localStorage**: синхронизируйте с Redux через middleware. Напишите свою или используйте [готовое решение](https://www.npmjs.com/package/redux-persist)
4. **Обработка ошибок**: создайте универсальный компонент Error
5. **Типизация**: используйте интерфейсы для API ответов

## Дополнительные задачи (необязательно)
- [ ] Пагинация результатов поиска
- [ ] Фильтрация по типу (movie/series/episode)
- [ ] Сортировка результатов
- [ ] История поисковых запросов
- [ ] Шеринг ссылок на фильмы
- [ ] Темная/светлая тема
- [ ] Анимации и переходы
- [ ] Оффлайн режим с кешированием
  









# СТАРОЕ - Домашнее задание к занятию «Redux Toolkit»
===

### Задание: Поиск фильмов по каталогу IMDb и добавление найденных фильмов в "Избранное"

### Цель задания

1. Научиться работать с пакетом Redux Toolkit.

Ключи для API:

- 64405bd2
- 9713c5e7

Либо вы можете зарегистрировать свой ключ для API.

Оформление на Ваш вкус. Допускает использование UI фреймворков, например React-Bootstrap, Ant Design, Prime

### Инструкция к заданию

1. Изучить стороннее [API](https://www.omdbapi.com/).
2. Создать роуты для поиска фильма (главный роут), просмотра карточки фильма, избранного.
3. Реализовать компоненты для поиска, отображения найденных фильмов, карточку одного фильма с его описанием.
4. При вводе фильма в строку поиска отправить запрос к API. Во время запроса показать прелодер.
   После успешного получения ответа убрать прелодер, показать фильмы, если таковы были найдены. Если результат
   отрицательный, показать плашку, что фильмы не найдены.
5. Любой из найденный фильмов можно добавить в "Избранное". При переключении на вкладку "Избранное" показывать фильмы,
   которые были туда добавлены. Любой фильм можно удалить из "Избранного".

Пример ответа при поиске фильма:

```json
{
  "Search": [
    {
      "Title": "Terminator 2: Judgment Day",
      "Year": "1991",
      "imdbID": "tt0103064",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMGU2NzRmZjUtOGUxYS00ZjdjLWEwZWItY2NlM2JhNjkxNTFmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
    },
    {
      "Title": "The Terminator",
      "Year": "1984",
      "imdbID": "tt0088247",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BYTViNzMxZjEtZGEwNy00MDNiLWIzNGQtZDY2MjQ1OWViZjFmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
    },
    {
      "Title": "Lady Terminator",
      "Year": "1989",
      "imdbID": "tt0095483",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTg5NTA1NzEtNWNiNy00ZTc4LWJhZTgtYmJkODZhYWI3NmQ4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
    }
  ],
  "totalResults": "124",
  "Response": "True"
}
```

Пример ответа при запросе фильма по идентификатору:

```json
{
  "Title": "Terminator 2: Judgment Day",
  "Year": "1991",
  "Rated": "R",
  "Released": "03 Jul 1991",
  "Runtime": "137 min",
  "Genre": "Action, Sci-Fi",
  "Director": "James Cameron",
  "Writer": "James Cameron, William Wisher",
  "Actors": "Arnold Schwarzenegger, Linda Hamilton, Edward Furlong",
  "Plot": "A cyborg, identical to the one who failed to kill Sarah Connor, must now protect her 10-year old son John from an even more advanced and powerful cyborg.",
  "Language": "English, Spanish",
  "Country": "United States",
  "Awards": "Won 4 Oscars. 37 wins & 33 nominations total",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMGU2NzRmZjUtOGUxYS00ZjdjLWEwZWItY2NlM2JhNjkxNTFmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  "Ratings": [
    {
      "Source": "Internet Movie Database",
      "Value": "8.6/10"
    },
    {
      "Source": "Rotten Tomatoes",
      "Value": "92%"
    },
    {
      "Source": "Metacritic",
      "Value": "75/100"
    }
  ],
  "Metascore": "75",
  "imdbRating": "8.6",
  "imdbVotes": "1,114,693",
  "imdbID": "tt0103064",
  "Type": "movie",
  "DVD": "13 Feb 2007",
  "BoxOffice": "$205,881,154",
  "Production": "N/A",
  "Website": "N/A",
  "Response": "True"
}
```

6. Поля которые необходимо вывести в карточке товара:

+ постер фильма(Poster)
+ название фильма(Title)
+ год выпуска(Year)
+ жанр(Genre)
+ продолжительность(Runtime)
+ режиссер(Director)
+ актеры(Actors)
+ рейтинг фильма(imdbRating)

### Повышенный уровень сложности (не обязательно)

Реализовать задачу на TypeScript.

### Подсказки (спойлеры)

<details>
<summary>Примеры запросов</summary>

1. `https://www.omdbapi.com?apikey=64405bd2&s=terminator` - запрос на поиск фильма
2. `https://www.omdbapi.com?apikey=64405bd2&i=tt0103064` - поиск фильма по id

</details>

### Критерии оценки

1. Можно использовать любой пакетный менеджер.
2. Авто-тесты писать не требуется, но можно.
3. Использован Redux Toolkit.
4. (*необязательный пункт*) Асинхронные запросы к API должны быть реализованы через Redux Thunk. Чтобы ознакомиться с Redux Thunk, посмотрите [документацию](https://redux.js.org/usage/writing-logic-thunks), [Redux на github](https://github.com/reduxjs/redux-thunk).
5. Должна быть реализована настройка хранилища.
6. Нет ошибок ESLint.

#### Альтернативный способ создания приложения React с использованием тулинга Vite

Приложение также можно создать используя инструмент Vite.
Документация по созданию приложения [React](https://vitejs.dev/guide/).

1. Откройте терминал и пропишите следующую команду: `yarn create vite my-app --template react`,
   либо `yarn create vite my-app --template react-ts`, если
   нужен шаблон с TypeScript. Эта команда создаст настроенный
   шаблонный проект.
2. Откройте созданный проект в своей IDE.
3. Установите зависимости.
4. Готово. Чтобы запустить приложение, введите команду: `yarn dev`(либо `npm run dev`).
  






_______________________________________________________________________________________
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
