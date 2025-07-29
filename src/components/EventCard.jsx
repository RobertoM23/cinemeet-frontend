export function EventCard({ event, onOpen }) {
  return (
    <div className="card shadow-sm border-0 mb-4">
      <div className="card-body">
        <h5 className="card-title text-primary mb-2">
          🎬 {event.movieTitle}
        </h5>
        <p className="card-text text-muted mb-1">
          📅 {event.date} 🕒 {event.time}
        </p>
        <p className="card-text text-muted">
          📍 {event.cinema}
        </p>
        <button
          className="btn btn-outline-primary btn-sm mt-2"
          onClick={() => onOpen(event)}
        >
          Dettagli
        </button>
      </div>
    </div>
  );
}