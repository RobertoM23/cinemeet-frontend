import React from "react";
import { Card, Button } from "react-bootstrap";
import { Calendar, GeoAlt } from "react-bootstrap-icons";

const EventCard = ({ event, onJoin, onLeave, isJoined }) => {
  return (
    <Card className="h-100 shadow-sm border-0">
      <Card.Body>
        <Card.Title className="fw-bold">{event.title}</Card.Title>

        <Card.Text className="text-muted mb-1">
          <Calendar className="me-2" />
          {event.date}
        </Card.Text>

        <Card.Text className="text-muted">
          <GeoAlt className="me-2" />
          {event.cinema}
        </Card.Text>

        {isJoined ? (
          <>
            <div className="text-success fw-semibold">Hai già aderito</div>
            <Button
              variant="outline-danger"
              className="mt-2"
              onClick={() => onLeave(event.id)}
            >
              Abbandona
            </Button>
          </>
        ) : (
          <Button variant="primary" onClick={() => onJoin(event.id)}>
            Partecipa
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default EventCard;