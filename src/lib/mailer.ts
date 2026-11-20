import nodemailer from 'nodemailer';
import type SMTPTransport from 'nodemailer/lib/smtp-transport';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  family: 4,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
} as SMTPTransport.Options);

const RECIPIENTS = [
  process.env.EMAIL_SALES  || 'sales@asiagolfspecialists.com',
  process.env.EMAIL_ADMIN  || 'marcus.giles@asiagolfspecialists.com',
];

export async function sendDualNotification(subject: string, htmlBody: string): Promise<void> {
  await transporter.sendMail({
    from:    process.env.EMAIL_FROM || '"Asia Golf Specialists" <noreply@asiagolfspecialists.com>',
    to:      RECIPIENTS.join(', '),
    subject,
    html:    htmlBody,
  });
}

// ── Shared HTML email wrapper ──────────────────────────────────
export function emailTemplate(title: string, rows: Record<string, string>): string {
  const rowsHtml = Object.entries(rows)
    .map(([k, v]) => `
      <tr>
        <td style="padding:10px 16px;background:#f5f1e8;font-weight:600;color:#8B6914;width:160px;font-size:13px;text-transform:uppercase;letter-spacing:.05em">${k}</td>
        <td style="padding:10px 16px;color:#333;font-size:14px">${v || '—'}</td>
      </tr>`)
    .join('');

  return `
    <!DOCTYPE html>
    <html>
    <head><meta charset="utf-8" /></head>
    <body style="margin:0;padding:0;background:#020617;font-family:Georgia,serif">
      <table width="100%" cellpadding="0" cellspacing="0">
        <tr>
          <td align="center" style="padding:40px 20px">
            <table width="600" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,.4)">
              <tr>
                <td style="background:#020617;padding:28px 32px;border-bottom:3px solid #B8860B">
                  <p style="margin:0;color:#B8860B;font-size:11px;letter-spacing:.3em;text-transform:uppercase">Asia Golf Specialists</p>
                  <h1 style="margin:8px 0 0;color:#F5F1E8;font-size:20px;font-weight:400;font-style:italic">${title}</h1>
                </td>
              </tr>
              <tr>
                <td style="padding:0">
                  <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse">
                    ${rowsHtml}
                  </table>
                </td>
              </tr>
              <tr>
                <td style="padding:20px 32px;background:#020617;text-align:center">
                  <p style="margin:0;color:rgba(245,241,230,.4);font-size:11px;letter-spacing:.1em">
                    © ${new Date().getFullYear()} Asia Golf Specialists — Confidential Internal Notification
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>`;
}
