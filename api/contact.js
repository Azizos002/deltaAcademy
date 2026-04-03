const rateLimitStore = global.rateLimitStore || new Map();
global.rateLimitStore = rateLimitStore;

const WINDOW_MS = 60 * 1000;
const MAX_REQUESTS = 5;

const sanitize = (value = "") =>
  String(value).replace(/[<>]/g, "").replace(/\s+/g, " ").trim().slice(0, 2000);

const validateEmail = (email) => /[^\s@]+@[^\s@]+\.[^\s@]+/.test(email);

const getClientIp = (req) => {
  const forwarded = req.headers["x-forwarded-for"];
  return (
    forwarded ? forwarded.split(",")[0] : req.socket?.remoteAddress || "unknown"
  ).trim();
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
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ from: fromEmail, to: [toEmail], subject, html }),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Email provider error: ${text}`);
  }
};

module.exports = async (req, res) => {
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST")
    return res.status(405).json({ error: "Method not allowed" });

  const ip = getClientIp(req);
  if (isRateLimited(ip)) {
    return res
      .status(429)
      .json({ error: "Too many requests, please try again later." });
  }

  const {
    formType,
    language,
    honeypot,
    name,
    email,
    phone = "",
    category = "",
    domain = "",
    message = "",
  } = req.body || {};

  if (honeypot) return res.status(400).json({ error: "Spam detected." });

  const cleanName = sanitize(name);
  const cleanEmail = sanitize(email);
  const cleanPhone = sanitize(phone);
  const cleanCategory = sanitize(category);
  const cleanDomain = sanitize(domain);
  const cleanMessage = sanitize(message);
  const cleanLanguage = sanitize(language || "fr");
  const cleanFormType = sanitize(formType || "unknown");

  if (!cleanName || !cleanEmail || !validateEmail(cleanEmail)) {
    return res.status(400).json({ error: "Invalid name or email." });
  }

  const toEmail = process.env.TO_EMAIL || "deltacademy2026@gmail.com";
  const fromEmail = process.env.FROM_EMAIL || "onboarding@resend.dev";

  if (!process.env.RESEND_API_KEY) {
    return res
      .status(500)
      .json({ error: "Missing email configuration (RESEND_API_KEY)." });
  }

  const submittedAt = new Date().toLocaleString("fr-FR", {
    dateStyle: "full",
    timeStyle: "short",
  });

  const html = `
    <!DOCTYPE html>
    <html lang="fr">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Nouvelle soumission - Delta Formation</title>
      </head>
      <body style="margin:0; padding:0; background-color:#f4f7fb; font-family: Arial, Helvetica, sans-serif; color:#1f2937;">
        <div style="width:100%; background-color:#f4f7fb; padding:32px 16px;">
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width:680px; margin:0 auto; background:#ffffff; border-radius:20px; overflow:hidden; box-shadow:0 10px 30px rgba(15,23,42,0.08);">
            
            <!-- Header -->
            <tr>
              <td style="background:linear-gradient(135deg, #0f172a 0%, #1d4ed8 100%); padding:32px 36px; text-align:left;">
                <div style="font-size:12px; letter-spacing:1.2px; text-transform:uppercase; color:#bfdbfe; font-weight:700; margin-bottom:10px;">
                  Delta Formation
                </div>
                <h1 style="margin:0; font-size:28px; line-height:1.2; color:#ffffff; font-weight:800;">
                  Nouvelle demande reçue
                </h1>
                <p style="margin:12px 0 0; font-size:15px; line-height:1.6; color:#dbeafe;">
                  Un nouveau formulaire a été soumis depuis le site web de votre centre de formation.
                </p>
              </td>
            </tr>

            <!-- Info strip -->
            <tr>
              <td style="padding:20px 36px; background:#eff6ff; border-bottom:1px solid #dbeafe;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td style="padding:0 0 8px 0; font-size:14px; color:#1e3a8a;">
                      <strong>Type de formulaire :</strong> ${cleanFormType}
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:0 0 8px 0; font-size:14px; color:#1e3a8a;">
                      <strong>Langue :</strong> ${cleanLanguage}
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:0; font-size:14px; color:#1e3a8a;">
                      <strong>Date :</strong> ${submittedAt}
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Main content -->
            <tr>
              <td style="padding:32px 36px 20px;">
                <h2 style="margin:0 0 20px; font-size:20px; color:#111827;">
                  Informations du contact
                </h2>

                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
                  <tr>
                    <td style="padding:14px 16px; width:180px; background:#f9fafb; border:1px solid #e5e7eb; font-size:14px; font-weight:700; color:#374151;">
                      Nom complet
                    </td>
                    <td style="padding:14px 16px; border:1px solid #e5e7eb; font-size:14px; color:#111827;">
                      ${cleanName}
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:14px 16px; width:180px; background:#f9fafb; border:1px solid #e5e7eb; font-size:14px; font-weight:700; color:#374151;">
                      Email
                    </td>
                    <td style="padding:14px 16px; border:1px solid #e5e7eb; font-size:14px; color:#111827;">
                      <a href="mailto:${cleanEmail}" style="color:#2563eb; text-decoration:none;">${cleanEmail}</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:14px 16px; width:180px; background:#f9fafb; border:1px solid #e5e7eb; font-size:14px; font-weight:700; color:#374151;">
                      Téléphone
                    </td>
                    <td style="padding:14px 16px; border:1px solid #e5e7eb; font-size:14px; color:#111827;">
                      ${cleanPhone || "Non renseigné"}
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:14px 16px; width:180px; background:#f9fafb; border:1px solid #e5e7eb; font-size:14px; font-weight:700; color:#374151;">
                      Catégorie
                    </td>
                    <td style="padding:14px 16px; border:1px solid #e5e7eb; font-size:14px; color:#111827;">
                      ${cleanCategory || "Non renseignée"}
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:14px 16px; width:180px; background:#f9fafb; border:1px solid #e5e7eb; font-size:14px; font-weight:700; color:#374151;">
                      Formation / Domaine
                    </td>
                    <td style="padding:14px 16px; border:1px solid #e5e7eb; font-size:14px; color:#111827;">
                      ${cleanDomain || "Non renseigné"}
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Message block -->
            <tr>
              <td style="padding:8px 36px 32px;">
                <h2 style="margin:0 0 16px; font-size:20px; color:#111827;">
                  Message
                </h2>
                <div style="background:#f9fafb; border:1px solid #e5e7eb; border-left:4px solid #2563eb; border-radius:12px; padding:18px 20px; font-size:14px; line-height:1.7; color:#374151; white-space:pre-wrap;">
                  ${cleanMessage || "Aucun message ajouté."}
                </div>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="padding:24px 36px; background:#111827; text-align:center;">
                <p style="margin:0; font-size:13px; line-height:1.6; color:#d1d5db;">
                  Cet email a été généré automatiquement depuis le formulaire du site
                  <strong style="color:#ffffff;">Delta Formation</strong>.
                </p>
                <p style="margin:8px 0 0; font-size:12px; color:#9ca3af;">
                  Merci de traiter cette demande dans les meilleurs délais.
                </p>
              </td>
            </tr>
          </table>
        </div>
      </body>
    </html>
  `;

  try {
    await sendWithResend({
      fromEmail,
      toEmail,
      subject: `Delta Formation • Nouvelle demande (${cleanFormType})`,
      html,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    return res
      .status(500)
      .json({ error: error.message || "Unable to send email." });
  }
};
