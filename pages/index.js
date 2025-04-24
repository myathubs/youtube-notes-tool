
import { useState } from 'react';
import TranscriptForm from '../components/TranscriptForm';
import OutputBox from '../components/OutputBox';

export default function Home() {
  const [url, setUrl] = useState('');
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);
  const [lang, setLang] = useState('en');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch('/api/summarize', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url, lang }),
    });
    const data = await res.json();
    setSummary(data.summary || 'No summary returned.');
    setLoading(false);
  };

  return (
    <div style={{ backgroundColor: '#111', color: '#fff', minHeight: '100vh', padding: '2rem' }}>
      <h1>YouTube to Blog Note Generator</h1>
      <TranscriptForm
        url={url}
        setUrl={setUrl}
        lang={lang}
        setLang={setLang}
        handleSubmit={handleSubmit}
        loading={loading}
      />
      <OutputBox summary={summary} loading={loading} />
    </div>
  );
}
