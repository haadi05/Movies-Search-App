let baseUrl = "https://api.themoviedb.org/3";
let apiKey = "9a9f9f892464c5a2673f1b203d76c3bb";

export const fetchMovies = async (catagory) => {
  const res = await fetch(`${baseUrl}/movie/${catagory}?api_key=${apiKey}`);
  const data = await res.json();
  return data.results;
};

export const searchMovies = async (id) => {
  const res = await fetch(
    `${baseUrl}/search/movie?api_key=${apiKey}&query=${id}`
  );
  const data = await res.json();
  return data.results;
};

export default fetchMovies;
