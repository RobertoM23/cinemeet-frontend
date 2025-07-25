export function SuggestedEvents({ list }) {
  return (
    <div className="grid gap-2">
      {list.map((e) => (
        <div key={e.id} className="border p-3 rounded">
          {e.movieTitle} — {e.date}
        </div>
      ))}
    </div>
  );
}
