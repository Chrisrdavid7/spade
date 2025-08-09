// api/subscribe.js
export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  
    try {
      const { email = '' } = req.body || {};
      if (!email) return res.status(400).json({ error: 'Email required' });
  
      const r = await fetch('https://connect.mailerlite.com/api/subscribers', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.MAILERLITE_API_KEY}`,
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          email,
          groups: process.env.MAILERLITE_GROUP_ID ? [process.env.MAILERLITE_GROUP_ID] : []
        })
      });
  
      if (r.status === 409) return res.status(200).json({ ok: true, already: true }); // already subscribed
      if (!r.ok) {
        const err = await r.json().catch(() => ({}));
        return res.status(400).json({ error: err?.message || 'Subscription failed' });
      }
  
      return res.status(200).json({ ok: true });
    } catch (e) {
      return res.status(500).json({ error: 'Server error' });
    }
  }
  