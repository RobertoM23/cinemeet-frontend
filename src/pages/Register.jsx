import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [form, setForm] = useState({
    nome: "",
    cognome: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        alert("Registrazione riuscita");
        navigate("/login");
      } else {
        alert("Errore nella registrazione");
      }
    } catch (err) {
      alert("Errore di rete");
    }
  };

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow-sm col-md-6 mx-auto">
        <h2 className="mb-4 text-center">Registrati</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Nome</label>
            <input
              name="nome"
              className="form-control"
              value={form.nome}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label>Cognome</label>
            <input
              name="cognome"
              className="form-control"
              value={form.cognome}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label>Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Registrati
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
