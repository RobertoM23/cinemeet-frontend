import { useEffect, useState } from 'react';

function FilterPage() {
  const [allEvents, setAllEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [filters, setFilters] = useState({
    movieTitle: '',
    cinema: '',
    date: ''
  });

  useEffect(() => {
    fetch('http://localhost:8080/api/events')
      .then(res => res.json())
      .then(data => {
        setAllEvents(data);
        setFilteredEvents(data);
      })
      .catch(err => console.error('Errore fetch eventi:', err));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const applyFilters = () => {
    const filtered = allEvents.filter(event =>
      event.movieTitle.toLowerCase().includes(filters.movieTitle.toLowerCase()) &&
      event.cinema.toLowerCase().includes(filters.cinema.toLowerCase()) &&
      (filters.date === '' || event.date === filters.date)
    );
    setFilteredEvents(filtered);
    setFilters({ movieTitle: '', cinema: '', date: '' });
  };

  return (
    <div>
      <h2>Filtra Eventi</h2>

      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          name="movieTitle"
          placeholder="Titolo film"
          value={filters.movieTitle}
          onChange={handleChange}
        />
        <input
          type="text"
          name="cinema"
          placeholder="Cinema"
          value={filters.cinema}
          onChange={handleChange}
        />
        <input
          type="date"
          name="date"
          value={filters.date}
          onChange={handleChange}
        />
        <button onClick={applyFilters}>Applica</button>
      </div>

      {filteredEvents.length === 0 ? (
        <p>Nessun evento trovato.</p>
      ) : (
        <ul>
          {filteredEvents.map(event => (
            <li key={event.id}>
              {event.movieTitle} – {event.date} @ {event.cinema}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FilterPage;