export function ReviewList({ reviews }) {
  return (
    <div className="space-y-1">
      {reviews.map((r, i) => (
        <div key={i}><b>{r.reviewer}</b>: {r.comment} ({r.rating}/5)</div>
      ))}
    </div>
  );
}