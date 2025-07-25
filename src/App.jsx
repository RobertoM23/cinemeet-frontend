import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import EventList from "./components/EventList";
import CreateEvent from "./pages/CreateEvent";
import Profile from "./pages/Profile";

function App() {
  const [message, setMessage] = useState("");
  const [user, setUser] = useState(localStorage.getItem("userEmail"));
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("userEmail");
    setUser(null);
    navigate("/");
  }

  return (
    <div className="p-2">
      <nav className="mb-4 flex gap-4 border-b pb-2">
        <Link to="/" className="text-blue-700">Home</Link>
        <Link to="/events" className="text-blue-700">Eventi</Link>
        <Link to="/events/create" className="text-blue-700">Crea evento</Link>
        <Link to="/profile" className="text-blue-700">Profilo</Link>
        <div className="ml-auto flex gap-4">
          {user ? (
            <>
              <span className="text-sm">{user}</span>
              <button onClick={logout} className="text-red-600">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-blue-700">Login</Link>
              <Link to="/register" className="text-blue-700">Registrati</Link>
            </>
          )}
        </div>
      </nav>

      {message && <div className="bg-green-100 text-green-700 p-2 rounded mb-2">{message}</div>}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/events" element={<EventList />} />
        <Route path="/events/create" element={<CreateEvent setMessage={setMessage} />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;

