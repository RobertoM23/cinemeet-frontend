import { useEffect, useState } from "react";
import { EventCard } from "./EventCard";
import { ChatBox } from "./ChatBox";
import { ReviewList } from "./ReviewList";
import { SuggestedEvents } from "./SuggestedEvents";

function EventList() {
  const [events, setEvents] = useState([]);
  const [chat, setChat] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [suggested, setSuggested] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const email = "demo@example.com";

  useEffect(() => {
    fetch("/api/events").then(res => res.json()).then(setEvents);
    fetch(`/api/suggestions/${email}`).then(res => res.json()).then(setSuggested);
  }, []);

  function openEvent(event) {
    setSelectedEvent(event);
    fetch(`/api/chat/${event.id}`).then(res => res.json()).then(setChat);
    fetch(`/api/reviews/${event.id}`).then(res => res.json()).then(setReviews);
  }

  return (
    <div className="p-4 grid gap-4">
      <h1 className="text-xl">Eventi disponibili</h1>
      {events.map((e) => (
        <EventCard key={e.id} event={e} onOpen={openEvent} />
      ))}

      <h1 className="text-xl mt-6">Suggeriti per te</h1>
      <SuggestedEvents list={suggested} />

      {selectedEvent && (
        <div className="mt-6">
          <h2 className="text-lg">Chat evento</h2>
          <ChatBox messages={chat} />

          <h2 className="text-lg mt-4">Recensioni</h2>
          <ReviewList reviews={reviews} />
        </div>
      )}
    </div>
  );
}

export default EventList;


