import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, budget, message, service } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      secure: false, // true for 465, false for other ports
    });

    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body {
              font-family: 'Helvetica Neue', Arial, sans-serif;
              color: #1a1a1a;
              background-color: #f9f9f9;
              margin: 0;
              padding: 0;
            }
            .container {
              max-width: 600px;
              margin: 40px auto;
              background-color: #ffffff;
              border-radius: 12px;
              overflow: hidden;
              box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
            }
            .header {
              background-color: #09090b;
              color: #ffffff;
              padding: 30px;
              text-align: center;
              border-bottom: 4px solid #333333;
            }
            .header h1 {
              margin: 0;
              font-size: 24px;
              letter-spacing: 2px;
              text-transform: uppercase;
            }
            .content {
              padding: 30px;
              line-height: 1.6;
            }
            .info-table {
              width: 100%;
              border-collapse: collapse;
              margin-bottom: 25px;
            }
            .info-table th {
              text-align: left;
              padding: 12px 10px;
              color: #666;
              border-bottom: 1px solid #eeeeee;
              width: 35%;
              font-weight: 600;
            }
            .info-table td {
              padding: 12px 10px;
              border-bottom: 1px solid #eeeeee;
              color: #1a1a1a;
              font-weight: 500;
            }
            .message-box {
              background-color: #f4f4f5;
              padding: 20px;
              border-radius: 8px;
              color: #27272a;
              margin-top: 10px;
            }
            .message-label {
              font-weight: 600;
              color: #666;
              margin-bottom: 8px;
              display: block;
            }
            .footer {
              text-align: center;
              padding: 20px;
              font-size: 13px;
              color: #888888;
              background-color: #fcfcfc;
              border-top: 1px solid #eeeeee;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Project Lead</h1>
            </div>
            <div class="content">
              <table class="info-table">
                <tr>
                  <th>Client Name</th>
                  <td>${name}</td>
                </tr>
                <tr>
                  <th>Email Address</th>
                  <td><a href="mailto:${email}" style="color: #000000;">${email}</a></td>
                </tr>
                <tr>
                  <th>Phone Number</th>
                  <td>${phone || 'Not provided'}</td>
                </tr>
                <tr>
                  <th>Service of Interest</th>
                  <td><strong style="text-transform: capitalize;">${service || 'Not specified'}</strong></td>
                </tr>
                <tr>
                  <th>Budget Range</th>
                  <td>${budget || 'Not specified'}</td>
                </tr>
              </table>
              
              <div>
                <span class="message-label">Project Details & Vision:</span>
                <div class="message-box">
                  ${message.replace(/\n/g, '<br>')}
                </div>
              </div>
            </div>
            <div class="footer">
              This lead was generated from the Towny Studio website on ${new Date().toLocaleDateString('en-IN', { timeZone: 'Asia/Kolkata', dateStyle: 'full' })}.
            </div>
          </div>
        </body>
      </html>
    `;

    const mailOptions = {
      from: `"${name} via Towny Studio" <${process.env.SMTP_USER}>`,
      to: process.env.RECIPIENT_EMAIL,
      replyTo: email,
      subject: `New Contact Lead: ${name} - ${service ? service.toUpperCase() : 'Inquiry'}`,
      html: emailHtml,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
