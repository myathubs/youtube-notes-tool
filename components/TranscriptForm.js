
export default function TranscriptForm({ url, setUrl, lang, setLang, handleSubmit, loading }) {
  return (
    <>
      <div style={{ margin: '1rem 0', display: 'flex', gap: '1rem' }}>
        <button
          onClick={() => setLang('en')}
          style={{
            fontSize: '1.2rem',
            backgroundColor: lang === 'en' ? '#444' : '#222',
            color: '#fff',
            padding: '0.5rem 1rem',
            border: '1px solid #555',
            borderRadius: '6px',
            cursor: 'pointer',
          }}
        >
          🇬🇧 English
        </button>

        <button
          onClick={() => setLang('mm')}
          style={{
            fontSize: '1.2rem',
            backgroundColor: lang === 'mm' ? '#444' : '#222',
            color: '#fff',
            padding: '0.5rem 1rem',
            border: '1px solid #555',
            borderRadius: '6px',
            cursor: 'pointer',
          }}
        >
          🇲🇲 မြန်မာ
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter YouTube URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          style={{ padding: '0.5rem', width: '80%' }}
        />
        <button type="submit" style={{ padding: '0.5rem 1rem', marginLeft: '1rem' }}>
          {loading ? '⏳ Summarizing...' : 'Summarize'}
        </button>
      </form>
    </>
  );
}
