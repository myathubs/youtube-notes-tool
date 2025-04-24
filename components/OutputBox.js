
export default function OutputBox({ summary, loading }) {
  return (
    <div style={{ marginTop: '2rem', whiteSpace: 'pre-wrap' }}>
      {loading ? '⏳ Generating summary...' : summary}
    </div>
  );
}
