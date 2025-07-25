import { useEffect, useState } from "react";
import { MovieCard } from "../components/MovieCard";
import { useNavigate } from "react-router-dom";

function Home() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/api/movies")
      .then((res) => res.json())
      .then(setMovies);
  }, []);

  function handleCreate(movie) {
    navigate("/events/create?title=" + encodeURIComponent(movie.title));
  }

  return (
    <div className="p-4 grid gap-4">
      <h1 className="text-xl">Film in programma</h1>
      {movies.map((m) => (
        <MovieCard key={m.id} movie={m} onCreate={handleCreate} />
      ))}
    </div>
  );
}

export default Home;

