const rateLimitStore = global.rateLimitStore || new Map();
global.rateLimitStore = rateLimitStore;

const WINDOW_MS = 60 * 1000;
const MAX_REQUESTS = 5;

const sanitize = (value = '') =>
  String(value)
    .replace(/[<>]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 2000);

const validateEmail = (email) => /[^\s@]+@[^\s@]+\.[^\s@]+/.test(email);

const getClientIp = (req) => {
  const forwarded = req.headers['x-forwarded-for'];
  return (forwarded ? forwarded.split(',')[0] : req.socket?.remoteAddress || 'unknown').trim();
};

const isRateLimited = (ip) => {
  const now = Date.now();
  const entry = rateLimitStore.get(ip) || { count: 0, start: now };
  if (now - entry.start > WINDOW_MS) {
    rateLimitStore.set(ip, { count: 1, start: now });
    return false;
  }

  entry.count += 1;
  rateLimitStore.set(ip, entry);
  return entry.count > MAX_REQUESTS;
};

const sendWithResend = async ({ fromEmail, toEmail, subject, html }) => {
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ from: fromEmail, to: [toEmail], subject, html })
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Email provider error: ${text}`);
  }
};

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const ip = getClientIp(req);
  if (isRateLimited(ip)) {
    return res.status(429).json({ error: 'Too many requests, please try again later.' });
  }

  const {
    formType,
    language,
    honeypot,
    name,
    email,
    phone = '',
    category = '',
    domain = '',
    message = ''
  } = req.body || {};

  if (honeypot) return res.status(400).json({ error: 'Spam detected.' });

  const cleanName = sanitize(name);
  const cleanEmail = sanitize(email);
  const cleanPhone = sanitize(phone);
  const cleanCategory = sanitize(category);
  const cleanDomain = sanitize(domain);
  const cleanMessage = sanitize(message);
  const cleanLanguage = sanitize(language || 'fr');
  const cleanFormType = sanitize(formType || 'unknown');

  if (!cleanName || !cleanEmail || !validateEmail(cleanEmail)) {
    return res.status(400).json({ error: 'Invalid name or email.' });
  }

  const toEmail = process.env.TO_EMAIL || 'deltacademy2026@gmail.com';
  const fromEmail = process.env.FROM_EMAIL || 'onboarding@resend.dev';

  if (!process.env.RESEND_API_KEY) {
    return res.status(500).json({ error: 'Missing email configuration (RESEND_API_KEY).' });
  }

  const submittedAt = new Date().toISOString();

  const html = `
    <div style="font-family: Arial, sans-serif; line-height: 1.5;">
      <h2>Delta Academy - New Form Submission</h2>
      <p><strong>Form:</strong> ${cleanFormType}</p>
      <p><strong>Timestamp:</strong> ${submittedAt}</p>
      <p><strong>Language:</strong> ${cleanLanguage}</p>
      <hr />
      <p><strong>Name:</strong> ${cleanName}</p>
      <p><strong>Email:</strong> ${cleanEmail}</p>
      <p><strong>Phone:</strong> ${cleanPhone || 'N/A'}</p>
      <p><strong>Category:</strong> ${cleanCategory || 'N/A'}</p>
      <p><strong>Formation:</strong> ${cleanDomain || 'N/A'}</p>
      <p><strong>Message:</strong> ${cleanMessage || 'N/A'}</p>
    </div>
  `;

  try {
    await sendWithResend({
      fromEmail,
      toEmail,
      subject: `Delta Academy • ${cleanFormType} submission`,
      html
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: error.message || 'Unable to send email.' });
  }
};
