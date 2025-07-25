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
    <div>
      <h2>Eventi disponibili</h2>
      {events.map(event => (
        <div key={event.id} className="card p-3 my-2">
          <strong>{event.movieTitle}</strong> – {event.date} {event.time} @ {event.cinema}
          <div className="mt-2">
            <button className="btn btn-warning btn-sm me-2" onClick={() => handleEdit(event)}>
              Modifica
            </button>
            <button className="btn btn-danger btn-sm" onClick={() => handleDelete(event.id)}>
              Elimina
            </button>
          </div>
        </div>
      ))}

      {editingEvent && (
        <div className="card p-3 mt-4">
          <h5>Modifica evento</h5>
          <form onSubmit={handleUpdate}>
            <input
              className="form-control my-1"
              value={editingEvent.movieTitle}
              onChange={e => setEditingEvent({ ...editingEvent, movieTitle: e.target.value })}
              placeholder="Titolo film"
            />
            <input
              className="form-control my-1"
              value={editingEvent.date}
              onChange={e => setEditingEvent({ ...editingEvent, date: e.target.value })}
              placeholder="Data"
            />
            <input
              className="form-control my-1"
              value={editingEvent.time}
              onChange={e => setEditingEvent({ ...editingEvent, time: e.target.value })}
              placeholder="Orario"
            />
            <input
              className="form-control my-1"
              value={editingEvent.cinema}
              onChange={e => setEditingEvent({ ...editingEvent, cinema: e.target.value })}
              placeholder="Cinema"
            />
            <button className="btn btn-success btn-sm mt-2" type="submit">Salva</button>
            <button className="btn btn-secondary btn-sm mt-2 ms-2" onClick={() => setEditingEvent(null)}>Annulla</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default EventList;

