import React from 'react';

const EventCard = ({ event, onJoin, onDelete, showDelete }) => {
  return (
    <div className="border p-4 rounded mb-3 shadow-sm">
      <h3 className="text-xl font-bold">{event.movieTitle}</h3>
      <p><strong>Data:</strong> {event.date}</p>
      <p><strong>Cinema:</strong> {event.cinema}</p>
      {showDelete ? (
        <button
          className="mt-2 bg-red-500 text-white px-3 py-1 rounded"
          onClick={() => onDelete(event.id)}
        >
          Delete
        </button>
      ) : (
        <button
          className="mt-2 bg-blue-500 text-white px-3 py-1 rounded"
          onClick={() => onJoin(event.id)}
        >
          Join
        </button>
      )}
    </div>
  );
};

export default EventCard;
