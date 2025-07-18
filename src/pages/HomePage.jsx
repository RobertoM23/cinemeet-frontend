import { useEffect, useState } from 'react';

function HomePage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/events')
      .then(res => res.json())
      .then(data => setEvents(data))
      .catch(err => console.error('Errore nel fetch:', err));
  }, []);

  return (
    <div>
      <h1>Eventi in programma</h1>
      {events.length === 0 ? (
        <p>Nessun evento trovato.</p>
      ) : (
        <ul>
          {events.map(event => (
            <li key={event.id}>
              <strong>{event.movieTitle}</strong> - {event.date} @ {event.cinema}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default HomePage;