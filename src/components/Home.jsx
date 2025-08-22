import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import fetchMovies from "../api";

function Home() {
  const [movies, setMovies] = useState([]);
  const [catagory, setCatagory] = useState("popular");

  useEffect(() => {
    async function getMovies() {
      const data = await fetchMovies(catagory);
      setMovies(data);
    }
    getMovies();
  }, [catagory]);
  return (
    <div className="text-white">
      <div className="child-style">
        <button onClick={() => setCatagory("popular")}>Popular</button>
        <button onClick={() => setCatagory("top_rated")}>Top Rated</button>
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
        {movies.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
}

export default Home;
