import { useState } from "react";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleRegister(e) {
    e.preventDefault();
    fetch("/api/users/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    }).then(res => {
      if (res.ok) alert("Registrazione completata");
      else alert("Errore nella registrazione");
    });
  }

  return (
    <form onSubmit={handleRegister} className="p-4 max-w-md mx-auto grid gap-2">
      <h1 className="text-xl">Registrati</h1>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required className="border p-2 rounded" />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" required className="border p-2 rounded" />
      <button type="submit" className="bg-green-600 text-white py-2 px-4 rounded">Registrati</button>
    </form>
  );
}

export default Register;
