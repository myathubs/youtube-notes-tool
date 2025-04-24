
export default async function handler(req, res) {
  const { url } = req.body;
  if (!url) return res.status(400).json({ error: 'No URL provided' });

  const transcript = `Transcript fetched from: ${url} (simulated)`;

  const prompt = `Summarize the following YouTube transcript into a blog-style note:\n\n${transcript}`;
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
    }),
  });

  const data = await response.json();
  const summary = data.choices?.[0]?.message?.content || 'No summary found.';

  res.status(200).json({ summary });
}
