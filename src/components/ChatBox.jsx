export function ChatBox({ messages }) {
  return (
    <div className="space-y-1">
      {messages.map((m, i) => (
        <div key={i}><b>{m.sender}</b>: {m.message}</div>
      ))}
    </div>
  );
}