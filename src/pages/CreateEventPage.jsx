import { useState } from 'react';

function CreateEventPage() {
  const [eventData, setEventData] = useState({
    movieTitle: '',
    date: '',
    cinema: '',
    creator: { id: 1 } // id utente temporaneo
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:8080/api/events', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(eventData)
    })
      .then(res => res.json())
      .then(data => {
        alert('Evento creato con successo!');
        window.location.href = '/';
        console.log(data);
      })
      .catch(err => {
        console.error('Errore:', err);
        alert('Errore nella creazione evento');
      });
  };

  return (
    <div>
      <h2>Crea un nuovo evento</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Titolo Film:</label>
          <input
            type="text"
            name="movieTitle"
            value={eventData.movieTitle}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Data:</label>
          <input
            type="date"
            name="date"
            value={eventData.date}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Cinema:</label>
          <input
            type="text"
            name="cinema"
            value={eventData.cinema}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Crea evento</button>
      </form>
    </div>
  );
}

export default CreateEventPage;