import { useEffect, useState } from "react";
import { searchMovies } from "../api";
import MovieCard from "./MovieCard";
import { useParams } from "react-router-dom";

function SearchResult() {
  const { id } = useParams();

  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function getMovies() {
      if (!id) return;
      const fetchMovies = await searchMovies(id);
      setMovies(fetchMovies);
    }
    getMovies();
  }, [id]);
  return (
    <>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
}

export default SearchResult;
