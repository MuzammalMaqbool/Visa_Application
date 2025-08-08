import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
})

export async function sendStatusMail({
  to,
  applicantName,
  status,
  notes,
  trackingId,
}: {
  to: string
  applicantName: string
  status: string
  notes?: string
  trackingId: string
}) {
  const subject = `Your Visa Application Status Update [${trackingId}]`
  const statusText =
    status === 'approved'
      ? 'Approved'
      : status === 'rejected'
      ? 'Rejected'
      : status === 'under_review'
      ? 'Under Review'
      : status
  const html = `
    <p>Dear <b>${applicantName}</b>,</p>
    <p>Your visa application (Tracking ID: <b>${trackingId}</b>) status has been updated to: <b>${statusText}</b>.</p>
    ${notes ? `<p><b>Notes:</b> ${notes}</p>` : ''}
    <p>If you have any questions, please reply to this email.</p>
    <br/>
    <p>Best regards,<br/>TrustedVisaHelp Team</p>
  `
  await transporter.sendMail({
    from: process.env.GMAIL_USER,
    to,
    subject,
    html,
  })
} 