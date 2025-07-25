import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import EventList from "./components/EventList";
import CreateEvent from "./pages/CreateEvent";
import Profile from "./pages/Profile";
import Footer from "./components/Footer";



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
    <div className="bg-light d-flex flex-column min-vh-100">
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm mb-4 px-3">
       <Link className="navbar-brand" to="/">
  <img src="/logo.png"
    alt="logo"
    style={{ width: '100px', height: 'auto' }}
  />
</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/events">Eventi</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/events/create">Crea evento</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/profile">Profilo</Link>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            {user ? (
              <>
                <li className="nav-item">
                  <span className="navbar-text me-2">{user}</span>
                </li>
                <li className="nav-item">
                  <button onClick={logout} className="btn btn-outline-danger btn-sm">Logout</button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">Registrati</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>

      <div className="container flex-grow-1">
        {message && <div className="alert alert-success text-center w-100 mx-auto">{message}</div>}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/events" element={<EventList />} />
          <Route path="/events/create" element={<CreateEvent setMessage={setMessage} />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;


