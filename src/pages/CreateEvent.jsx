import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

function CreateEvent({ setMessage }) {
  const [params] = useSearchParams();
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [cinema, setCinema] = useState("");
  const movieTitle = params.get("title") || "";
  const navigate = useNavigate();

  function submit(e) {
    e.preventDefault();
    fetch("/api/events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ movieTitle, date, time, cinema })
    })
      .then((res) => {
        if (res.ok) {
          setMessage("Evento creato con successo");
          navigate("/events");
        }
      });
  }

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-xl mb-4">Crea evento per "{movieTitle}"</h1>
      <form className="grid gap-2" onSubmit={submit}>
        <input type="date" value={date} onChange={e => setDate(e.target.value)} className="border p-2 rounded" required />
        <input type="time" value={time} onChange={e => setTime(e.target.value)} className="border p-2 rounded" required />
        <input type="text" value={cinema} onChange={e => setCinema(e.target.value)} placeholder="Cinema" className="border p-2 rounded" required />
        <button className="bg-blue-600 text-white py-2 px-4 rounded" type="submit">Crea evento</button>
      </form>
    </div>
  );
}

export default CreateEvent;
