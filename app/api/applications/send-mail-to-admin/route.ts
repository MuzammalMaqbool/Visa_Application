import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Admin email
    const adminEmail = process.env.ADMIN_EMAIL;

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", // or SMTP
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: adminEmail,
      subject: `New Visa Application from ${body.firstName} ${body.lastName}`,
      html: `
        <h2>New Application Details</h2>
        <p><strong>Name:</strong> ${body.firstName} ${body.lastName}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Phone:</strong> ${body.phone}</p>
        <p><strong>Nationality:</strong> ${body.nationality}</p>
        <p><strong>Visa Type:</strong> ${body.visaType}</p>
        <p><strong>Purpose:</strong> ${body.purpose}</p>
        <p><strong>Duration:</strong> ${body.duration}</p>
        <p><strong>Address:</strong> ${body.address}, ${body.city}, ${body.country}</p>
        <p><strong>Additional Info:</strong> ${body.additionalInfo || "N/A"}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Email sent to admin" });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json({ success: false, error: "Failed to send email" }, { status: 500 });
  }
}
