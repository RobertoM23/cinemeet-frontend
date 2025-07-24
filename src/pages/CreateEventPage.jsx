import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

const CreateEventPage = () => {
  const [form, setForm] = useState({ movieTitle: "", cinema: "", date: "" });

  const handleSubmit = e => {
    e.preventDefault();
    fetch("http://localhost:8080/api/events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    }).then(() => {
      alert("Evento creato!");
      setForm({ movieTitle: "", cinema: "", date: "" });
    });
  };

  return (
    <Container className="py-4">
      <h2>Crea un evento</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Film</Form.Label>
          <Form.Control
            type="text"
            name="movieTitle"
            value={form.movieTitle}
            onChange={e => setForm({ ...form, movieTitle: e.target.value })}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Cinema</Form.Label>
          <Form.Control
            type="text"
            name="cinema"
            value={form.cinema}
            onChange={e => setForm({ ...form, cinema: e.target.value })}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Data</Form.Label>
          <Form.Control
            type="date"
            name="date"
            value={form.date}
            onChange={e => setForm({ ...form, date: e.target.value })}
            required
          />
        </Form.Group>

        <Button type="submit">Crea</Button>
      </Form>
    </Container>
  );
};

export default CreateEventPage;