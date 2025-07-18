import { useEffect, useState } from 'react';

function SuggestedPage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/events/suggested/1')
      .then(res => res.json())
      .then(data => setEvents(data))
      .catch(err => console.error('Errore nel fetch suggeriti:', err));
  }, []);

  return (
    <div>
      <h2>Eventi suggeriti per te</h2>
      {events.length === 0 ? (
        <p>Nessun evento suggerito.</p>
      ) : (
        <ul>
          {events.map(event => (
            <li key={event.id}>
              {event.movieTitle} – {event.date} @ {event.cinema}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SuggestedPage;