import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    fetch("/api/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    }).then(res => {
      if (res.ok) {
        localStorage.setItem("userEmail", email);
        setUser(email);
        navigate("/");
      } else {
        alert("Credenziali non valide");
      }
    });
  }

  return (
    <form onSubmit={handleLogin} className="p-4 max-w-md mx-auto grid gap-2">
      <h1 className="text-xl">Login</h1>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required className="border p-2 rounded" />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" required className="border p-2 rounded" />
      <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">Login</button>
    </form>
  );
}

export default Login;

