import { useState, useEffect } from 'react';
import EventCard from '../components/EventCard';

const HomePage = () => {
  const [events, setEvents] = useState([]);
  const [joinedEventIds, setJoinedEventIds] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/events')
      .then(res => res.json())
      .then(data => setEvents(data));
  }, []);

  const handleJoin = (id) => {
    // Simula join evento (es. POST su /api/events/{id}/join)
    setJoinedEventIds(prev => [...prev, id]);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>CineMeet</h1>
      <h3>Eventi disponibili</h3>

      <div style={{ marginTop: '20px' }}>
        {events.map(event => (
          <EventCard
            key={event.id}
            event={event}
            joined={joinedEventIds.includes(event.id)}
            onJoin={handleJoin}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;