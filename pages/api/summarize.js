
export default async function handler(req, res) {
  const { url, lang } = req.body;
  if (!url) return res.status(400).json({ error: 'No URL provided' });

  const transcript = `Transcript fetched from: ${url}`;

  const prompt = lang === 'mm'
    ? `အောက်ပါ YouTube transcript ကို မြန်မာလို blog ပုံစံဖြင့် အကျဉ်းချုပ်ရေးပေးပါ။\n\n${transcript}`
    : `Summarize the following YouTube transcript in blog style:\n\n${transcript}`;

  const openaiRes = await fetch('https://api.openai.com/v1/chat/completions', {
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

  const data = await openaiRes.json();
  const summary = data.choices?.[0]?.message?.content || 'Summary not found';

  res.status(200).json({ summary });
}
