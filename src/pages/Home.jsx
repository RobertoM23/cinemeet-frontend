import { useEffect, useState } from "react";
import { MovieCard } from "../components/MovieCard";
import { useNavigate } from "react-router-dom";

function Home() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

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
              style={{ cursor: "pointer" }}
              onClick={() =>
                navigate("/events/create", {
                  state: {
                    movieTitle: movie.title,
                    poster: movie.poster_path
                  },
                })
              }
            />
            <div className="card-body">
              <h5 className="card-title">{movie.title}</h5>
              <p className="card-text">{movie.overview}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;


