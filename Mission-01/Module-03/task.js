// sorting rating in descending order

let movies = [
  { title: 'Inception', year: 2010, rating: 8.8 , genre: 'Sci-Fi' },
  { title: 'The Dark Knight', year: 2008, rating: 9.0 , genre: 'Action' },
  { title: 'Interstellar', year: 2014, rating: 8.6 , genre: 'Sci-Fi' },
  { title: 'The Matrix', year: 1999, rating: 8.7 , genre: 'Action' }
];

let topRatedMovies = movies?.filter(movie => movie.rating >= 8.5)
?.sort((a, b) => b.rating - a.rating)
?.map(movie => ({ title: movie.title, rating: movie.rating }))
?.forEach(movie => console.log(`Title: ${movie.title}, Rating: ${movie.rating}`));

console.log(topRatedMovies);