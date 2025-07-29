import { useEffect, useState } from "react";

function Profile() {
  const [user, setUser] = useState({
    nome: "",
    cognome: "",
    email: "",
    registiPreferiti: "",
    eventiPassati: "",
  });

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) setUser(storedUser);
  }, []);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`/api/users/${user.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
      if (res.ok) alert("Profilo aggiornato");
      else alert("Errore aggiornamento");
    } catch (err) {
      alert("Errore rete");
    }
  };

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow-sm col-md-6 mx-auto">
        <h2 className="mb-4 text-center">Profilo</h2>
        <form onSubmit={handleUpdate}>
          <div className="mb-3">
            <label>Nome</label>
            <input
              className="form-control"
              name="nome"
              value={user.nome}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label>Cognome</label>
            <input
              className="form-control"
              name="cognome"
              value={user.cognome}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label>Email</label>
            <input
              className="form-control"
              name="email"
              value={user.email}
              disabled
            />
          </div>
          <div className="mb-3">
            <label>Registi preferiti</label>
            <input
              className="form-control"
              name="registiPreferiti"
              value={user.registiPreferiti}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label>Eventi passati</label>
            <input
              className="form-control"
              name="eventiPassati"
              value={user.eventiPassati}
              onChange={handleChange}
            />
          </div>
          <button className="btn btn-success w-100" type="submit">
            Salva modifiche
          </button>
        </form>
      </div>
    </div>
  );
}

export default Profile;