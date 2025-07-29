import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

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
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm mb-4 px-4 py-2">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
      <span className="navbar-toggler-icon"></span>
    </button>

    {/* Logo centrato mobile */}
    <Link className="navbar-brand mx-auto d-lg-none" to="/">
      <img src="/logo.png" alt="logo" className="img-fluid" style={{ width: '100px', height: 'auto' }} />
    </Link>

    <div className="collapse navbar-collapse justify-content-between" id="navbarNavAltMarkup">
      {/* Sinistra */}
      <ul className="navbar-nav d-flex flex-row flex-lg-row">
        <li className="nav-item mx-2">
          <Link className="nav-link fw-semibold text-white d-flex align-items-center gap-1" to="/events">
            <i className="bi bi-calendar-event-fill"></i> Eventi
          </Link>
        </li>
        <li className="nav-item mx-2">
          <Link className="nav-link fw-semibold text-white d-flex align-items-center gap-1" to="/events/create">
            <i className="bi bi-plus-square-fill"></i> Crea evento
          </Link>
        </li>
      </ul>

      {/* Logo desktop */}
      <Link className="navbar-brand d-none d-lg-block mx-auto" to="/">
        <img src="/logo.png" alt="logo" className="img-fluid d-none d-lg-block" style={{ width: '160px', height: 'auto' }} />
      </Link>

      {/* Destra */}
      <ul className="navbar-nav d-flex flex-row flex-lg-row">
        <li className="nav-item mx-2">
          <Link className="nav-link fw-semibold text-white d-flex align-items-center gap-1" to="/profile">
            <i className="bi bi-person-fill"></i> Profilo
          </Link>
        </li>
        {user ? (
          <>
            <li className="nav-item mx-2 d-flex align-items-center">
              <span className="navbar-text text-secondary me-2">{user}</span>
            </li>
            <li className="nav-item mx-2">
              <button onClick={logout} className="btn btn-outline-danger btn-sm">Logout</button>
            </li>
          </>
        ) : (
          <>
            <li className="nav-item mx-2">
              <Link className="nav-link fw-semibold text-white d-flex align-items-center gap-1" to="/login">
                <i className="bi bi-box-arrow-in-right"></i> Login
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link fw-semibold text-white d-flex align-items-center gap-1" to="/register">
                <i className="bi bi-pencil-square"></i> Registrati
              </Link>
            </li>
          </>
        )}
      </ul>
    </div>
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


