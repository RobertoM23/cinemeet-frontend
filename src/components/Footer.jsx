export default function Footer() {
  return (
    <footer className="bg-dark text-white py-4 mt-auto">
      <div className="container text-center">
        <div className="mb-2">
          <a href="https://facebook.com" target="_blank" className="text-white mx-2">
            <i className="bi bi-facebook fs-4"></i>
          </a>
          <a href="https://instagram.com" target="_blank" className="text-white mx-2">
            <i className="bi bi-instagram fs-4"></i>
          </a>
          <a href="https://twitter.com" target="_blank" className="text-white mx-2">
            <i className="bi bi-twitter-x fs-4"></i>
          </a>
        </div>
        <small>&copy; {new Date().getFullYear()} CineMeet — Tutti i diritti riservati</small>
      </div>
    </footer>
  );
}