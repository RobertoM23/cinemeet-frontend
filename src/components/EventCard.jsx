export function EventCard({ event, onOpen }) {
  return (
    <div className="border p-4 rounded">
      <h2>{event.movieTitle} — {event.date} {event.time} @ {event.cinema}</h2>
      <button className="mt-2 px-2 py-1 bg-gray-800 text-white rounded" onClick={() => onOpen(event)}>Dettagli</button>
    </div>
  );
}
