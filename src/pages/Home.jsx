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
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Film disponibili</h2>
      <div className="row g-4">
        {movies.map((movie) => (
          <div key={movie.id} className="col-sm-6 col-md-4 col-lg-3">
            <div className="card h-100 shadow-sm border-0">
              <img
                src={movie.poster_path}
                className="card-img-top"
                alt={movie.title}
                style={{ cursor: "pointer", height: "350px", objectFit: "cover" }}
                onClick={() =>
                  navigate("/events/create", {
                    state: {
                      movieTitle: movie.title,
                      poster: movie.poster_path,
                    },
                  })
                }
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-bold text-primary title-effect bg-light p-2 rounded">{movie.title}</h5>
                <p className="card-text small text-muted">{movie.overview}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;


