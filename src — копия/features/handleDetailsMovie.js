const handleDetailsMovie = (e) => {
  console.log('Детали фильма');
  const li = e.target.closest('.liMovie');
  console.log(li);
};

export default handleDetailsMovie;