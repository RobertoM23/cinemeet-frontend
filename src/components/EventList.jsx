import { useEffect, useState } from "react";
import { EventCard } from "./EventCard";
import { ChatBox } from "./ChatBox";
import { ReviewList } from "./ReviewList";
import { SuggestedEvents } from "./SuggestedEvents";

function EventList() {
  const [events, setEvents] = useState([]);
  const [editingEvent, setEditingEvent] = useState(null);

  useEffect(() => {
    fetch("/api/events")
      .then(res => res.json())
      .then(setEvents);
  }, []);

  const handleDelete = async (id) => {
    await fetch(`/api/events/${id}`, { method: "DELETE" });
    setEvents(events.filter(e => e.id !== id));
  };

  const handleEdit = (event) => {
    setEditingEvent(event);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    await fetch(`/api/events/${editingEvent.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editingEvent),
    });

    const updatedList = events.map(ev =>
      ev.id === editingEvent.id ? editingEvent : ev
    );
    setEvents(updatedList);
    setEditingEvent(null);
  };

  return (
    <div className="container py-4">
      <h2 className="mb-4 text-center fw-bold">Eventi Disponibili</h2>

      <div className="row row-cols-1 row-cols-md-2 g-4">
        {events.map(event => (
          <div key={event.id} className="col">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title">{event.movieTitle}</h5>
                <p className="card-text">
                  <strong>Data:</strong> {event.date}<br />
                  <strong>Orario:</strong> {event.time}<br />
                  <strong>Cinema:</strong> {event.cinema}
                </p>
                <div className="d-flex justify-content-end gap-2">
                  <button className="btn btn-outline-warning btn-sm" onClick={() => handleEdit(event)}>
                    Modifica
                  </button>
                  <button className="btn btn-outline-danger btn-sm" onClick={() => handleDelete(event.id)}>
                    Elimina
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {editingEvent && (
        <div className="card mt-5 shadow">
          <div className="card-body">
            <h5 className="card-title">Modifica Evento</h5>
            <form onSubmit={handleUpdate}>
              <div className="mb-3">
                <label className="form-label">Titolo film</label>
                <input
                  className="form-control"
                  value={editingEvent.movieTitle}
                  onChange={e => setEditingEvent({ ...editingEvent, movieTitle: e.target.value })}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Data</label>
                <input
                  className="form-control"
                  type="date"
                  value={editingEvent.date}
                  onChange={e => setEditingEvent({ ...editingEvent, date: e.target.value })}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Orario</label>
                <input
                  className="form-control"
                  type="time"
                  value={editingEvent.time}
                  onChange={e => setEditingEvent({ ...editingEvent, time: e.target.value })}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Cinema</label>
                <input
                  className="form-control"
                  value={editingEvent.cinema}
                  onChange={e => setEditingEvent({ ...editingEvent, cinema: e.target.value })}
                />
              </div>
              <div className="d-flex justify-content-end gap-2">
                <button className="btn btn-success" type="submit">Salva</button>
                <button className="btn btn-secondary" onClick={() => setEditingEvent(null)}>Annulla</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default EventList;

