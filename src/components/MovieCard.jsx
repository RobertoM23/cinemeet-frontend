export function MovieCard({ movie, onCreate }) {
  return (
    <div className="border rounded-xl p-4 shadow">
      <h2 className="text-lg font-semibold">{movie.title}</h2>
      <p className="text-sm">{movie.overview}</p>
      <button className="mt-2 px-3 py-1 bg-blue-600 text-white rounded" onClick={() => onCreate(movie)}>
        Crea evento
      </button>
    </div>
  );
}