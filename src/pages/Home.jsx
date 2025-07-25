import { useEffect, useState } from "react";
import { MovieCard } from "../components/MovieCard";
import { useNavigate } from "react-router-dom";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("/movies.json")
      .then((res) => res.json())
      .then(setMovies);
  }, []);

  return (
    <div className="row">
      {movies.map((movie) => (
        <div key={movie.id} className="col-md-4 mb-4">
          <div className="card h-100">
            <img
              src={movie.poster_path}
              className="card-img-top"
              alt={movie.title}
            />
            <div className="card-body">
              <h5 className="card-title">{movie.title}</h5>
              <p className="card-text">{movie.overview}</p>
              <button className="btn btn-primary">Crea evento</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;


