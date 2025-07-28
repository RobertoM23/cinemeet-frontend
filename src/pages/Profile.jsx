import { useEffect, useState } from "react";

function Profile() {
  const [user, setUser] = useState({
    id: '',
    email: '',
    nome: '',
    cognome: '',
    registiPreferiti: '',
    eventiPassati: ''
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/users/${user.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        const updatedUser = await response.json();
        localStorage.setItem('user', JSON.stringify(updatedUser));
        setUser(updatedUser);
        setSuccess(true);
        setError(false);
      } else {
        setError(true);
        setSuccess(false);
      }
    } catch (err) {
      console.error('Errore durante l\'aggiornamento:', err);
      setError(true);
      setSuccess(false);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Profilo</h2>
      <div className="mb-3">
        <label>Email</label>
        <input name="email" className="form-control" value={user.email} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label>Nome</label>
        <input name="nome" className="form-control" value={user.nome} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label>Cognome</label>
        <input name="cognome" className="form-control" value={user.cognome} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label>Registi Preferiti</label>
        <input name="registiPreferiti" className="form-control" value={user.registiPreferiti} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label>Eventi Passati</label>
        <input name="eventiPassati" className="form-control" value={user.eventiPassati} onChange={handleChange} />
      </div>
      <button className="btn btn-primary" onClick={handleSave}>Salva</button>
      {success && <div className="alert alert-success mt-3">Profilo aggiornato</div>}
      {error && <div className="alert alert-danger mt-3">Errore durante l'aggiornamento</div>}
    </div>
  );
}

export default Profile;