// api/subscribe.js
export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  
    const { email } = req.body || {};
    if (!email) return res.status(400).json({ error: 'Email required' });
  
    if (!process.env.MAILERLITE_API_KEY) return res.status(500).json({ error: 'Missing MAILERLITE_API_KEY' });
    if (!process.env.MAILERLITE_GROUP_ID) return res.status(500).json({ error: 'Missing MAILERLITE_GROUP_ID' });
  
    try {
      const payload = {
        email,
        // ensure ID is a string and in an array (exactly what MailerLite expects)
        groups: [String(process.env.MAILERLITE_GROUP_ID)]
      };
  
      const r = await fetch('https://connect.mailerlite.com/api/subscribers', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.MAILERLITE_API_KEY}`,
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(payload)
      });
  
      // 409 means already on the list
      if (r.status === 409) return res.status(200).json({ ok: true, already: true });
  
      const text = await r.text();
      let data; try { data = JSON.parse(text || '{}'); } catch { data = { raw: text }; }
  
      if (!r.ok) {
        console.error('MailerLite error', r.status, data);
        return res.status(r.status).json({ error: data?.message || data || 'Subscription failed' });
      }
  
      return res.status(200).json({ ok: true });
    } catch (e) {
      console.error('Server error', e);
      return res.status(500).json({ error: 'Server error' });
    }
  }
  