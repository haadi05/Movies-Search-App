function MovieCard({ movie }) {
  let url = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "./src/assets/fallback.png";

  return (
    <div className="flex flex-col text-white justify-center items-center bg-[#404040] m-6 w-66 h-110 rounded-[8px] overflow-hidden">
      <div className="overflow-hidden">
        <img src={url} />
      </div>
      <div className="flex flex-col self-start py-2 px-4 position">
        <p className="text-xl font-medium py-1 truncate">
          {movie.original_title}
        </p>
        <p>{new Date(movie.release_date).getFullYear()}</p>
      </div>
    </div>
  );
}

export default MovieCard;
