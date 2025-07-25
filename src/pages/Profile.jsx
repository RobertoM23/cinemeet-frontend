import { useEffect, useState } from "react";

export default function Profile() {
  const [user, setUser] = useState({
    nome: "",
    cognome: "",
    email: "",
    registiPreferiti: "",
    eventiPassati: ""
  });

  const userId = 1; // aggiorna con valore dinamico se serve

  useEffect(() => {
    fetch(`/api/users/profile/${userId}`)
      .then(res => res.json())
      .then(data => setUser(data))
      .catch(err => console.error("Errore profilo:", err));
  }, []);

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`/api/users/profile/${userId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user)
    })
      .then(res => {
        if (!res.ok) throw new Error();
        alert("Profilo aggiornato");
      })
      .catch(() => alert("Errore aggiornamento"));
  }

  return (
    <div className="container d-flex justify-content-center mt-5">
      <div className="card shadow p-4" style={{ maxWidth: "600px", width: "100%" }}>
        <h3 className="mb-4 text-center">Il tuo profilo</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Nome</label>
            <input className="form-control" name="nome" value={user.nome} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label className="form-label">Cognome</label>
            <input className="form-control" name="cognome" value={user.cognome} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input className="form-control" name="email" value={user.email} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label className="form-label">Registi preferiti</label>
            <input className="form-control" name="registiPreferiti" value={user.registiPreferiti} onChange={handleChange} />
          </div>
          <div className="mb-4">
            <label className="form-label">Eventi passati</label>
            <textarea className="form-control" name="eventiPassati" rows="3" value={user.eventiPassati} onChange={handleChange} />
          </div>
          <div className="d-grid">
            <button className="btn btn-primary">Salva modifiche</button>
          </div>
        </form>
      </div>
    </div>
  );
}