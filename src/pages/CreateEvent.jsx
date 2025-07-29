import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useLocation } from 'react-router-dom';


function CreateEvent({ setMessage }) {
  const location = useLocation();
  const defaultTitle = location.state?.movieTitle || "";
  const defaultPoster = location.state?.poster || "";

  const [movieTitle, setMovieTitle] = useState(defaultTitle);
  const [poster, setPoster] = useState(defaultPoster);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [cinema, setCinema] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = localStorage.getItem("userEmail");
    const body = JSON.stringify({
      movieTitle,
      date,
      time,
      cinema,
      user,
      poster,
    });

    fetch("/api/events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
    })
      .then((res) => {
        if (res.ok) {
          setMessage("Evento creato con successo");
          navigate("/events");
        } else {
          setMessage("Errore nella creazione dell'evento");
        }
      })
      .catch((err) => {
        console.error("Errore evento:", err);
        setMessage("Errore di rete");
      });
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4">
        <h3 className="mb-4 text-center">Crea un evento</h3>

        {poster && (
          <div className="text-center mb-4">
            <img
              src={poster}
              alt={movieTitle}
              className="img-fluid rounded"
              style={{ maxHeight: "400px" }}
            />
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Titolo film</label>
            <input
              className="form-control"
              value={movieTitle}
              onChange={(e) => setMovieTitle(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Data</label>
            <input
              type="date"
              className="form-control"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Orario</label>
            <input
              type="time"
              className="form-control"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Cinema</label>
            <input
              className="form-control"
              value={cinema}
              onChange={(e) => setCinema(e.target.value)}
              required
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary btn-lg">
              Crea evento
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateEvent;
