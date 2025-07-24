import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import EventCard from "../components/EventCard";

const HomePage = () => {
  const [events, setEvents] = useState([]);
  const [joinedEvents, setJoinedEvents] = useState(() => {
    const saved = localStorage.getItem("joinedEvents");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    fetch("http://localhost:8080/api/events")
      .then((res) => res.json())
      .then(setEvents)
      .catch((err) => console.error("Errore nel caricamento eventi", err));
  }, []);

  const handleJoin = async (id) => {
    if (joinedEvents.includes(id)) return;

    try {
      const res = await fetch(`http://localhost:8080/api/events/${id}/join`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: 1 }),
      });

      if (res.ok) {
        const updated = [...joinedEvents, id];
        setJoinedEvents(updated);
        localStorage.setItem("joinedEvents", JSON.stringify(updated));
      } else {
        console.error("Errore nella join:", await res.text());
      }
    } catch (error) {
      console.error("Errore nella richiesta di partecipazione", error);
    }
  };

  const handleLeave = async (id) => {
    try {
      const res = await fetch(`http://localhost:8080/api/events/${id}/leave`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: 1 }),
      });

      if (res.ok) {
        const updated = joinedEvents.filter((eventId) => eventId !== id);
        setJoinedEvents(updated);
        localStorage.setItem("joinedEvents", JSON.stringify(updated));
      } else {
        console.error("Errore nella leave:", await res.text());
      }
    } catch (error) {
      console.error("Errore nella richiesta di abbandono", error);
    }
  };

  return (
    <Container className="mt-5">
      <h2 className="mb-4 text-center">Eventi disponibili</h2>
      <Row>
        {events.map((event) => (
          <Col md={4} key={event.id} className="mb-4">
            <EventCard
              event={event}
              onJoin={handleJoin}
              onLeave={handleLeave}
              isJoined={joinedEvents.includes(event.id)}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomePage;