export default function ErrorBanner({ message }) {
  if (!message) return null;

  return (
    <div style={{ background: '#fee2e2', color: '#991b1b', padding: '10px 12px', borderRadius: 6, marginBottom: 12 }}>
      {message}
    </div>
  );
}
