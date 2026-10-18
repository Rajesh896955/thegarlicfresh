import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, email, inquiryType, message } = body;

    if (!name?.trim() || !phone?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Please fill in all required fields (Name, Phone, and Message)." },
        { status: 400 }
      );
    }

    const emailUser = process.env.EMAIL_USER || "thegarlicfresh@gmail.com";
    const emailPass = process.env.EMAIL_PASS;

    if (!emailPass) {
      console.error("Missing EMAIL_PASS in environment variables.");
      return NextResponse.json(
        { error: "Email configuration error on server. Please contact support directly." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    const inquiryLabels: Record<string, string> = {
      retail: "Home / Retail Purchase",
      bulk: "Bulk Supply (Restaurants / Hotels)",
      partnership: "Distributor / Partnership Inquiry",
      general: "General Support",
    };

    const typeLabel = inquiryLabels[inquiryType] || inquiryType || "General Inquiry";
    const submissionTime = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "medium",
    });

    // Clean phone number for WhatsApp link
    const cleanPhone = phone.replace(/[^0-9]/g, "");
    const waPhone = cleanPhone.length === 10 ? `91${cleanPhone}` : cleanPhone;

    // 1. Send inquiry notification to admin (thegarlicfresh@gmail.com)
    await transporter.sendMail({
      from: `"TheGarlicFresh Inquiries" <${emailUser}>`,
      to: emailUser,
      replyTo: email && email.trim() ? email.trim() : emailUser,
      subject: `🧄 New Lead: ${name.trim()} (${phone.trim()}) - ${typeLabel}`,
      text: `New Garlic Inquiry Received on TheGarlicFresh!

Customer Name: ${name.trim()}
Phone Number: ${phone.trim()}
Email: ${email?.trim() || "Not provided"}
Inquiry Type: ${typeLabel}
Received At: ${submissionTime}

Customer Requirement / Message:
${message.trim()}
`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Inquiry - TheGarlicFresh</title>
        </head>
        <body style="margin: 0; padding: 20px; background-color: #f3f4f6; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1f2937;">
          <div style="max-width: 620px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.06); border: 1px solid #e5e7eb;">
            <!-- Header -->
            <div style="background: linear-gradient(135deg, #15803d 0%, #16a34a 100%); padding: 26px 20px; text-align: center; color: #ffffff;">
              <div style="font-size: 34px; margin-bottom: 4px;">🧄</div>
              <h1 style="margin: 0; font-size: 22px; font-weight: 700; letter-spacing: -0.02em;">New Garlic Order / Inquiry</h1>
              <p style="margin: 6px 0 0; font-size: 13px; opacity: 0.9;">Received via TheGarlicFresh Contact Form</p>
            </div>

            <!-- Body Content -->
            <div style="padding: 24px;">
              <div style="background-color: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 10px; padding: 12px 16px; margin-bottom: 20px; font-size: 13px;">
                <span style="font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #166534; background: #dcfce7; padding: 4px 8px; border-radius: 6px;">${typeLabel}</span>
                <span style="float: right; color: #15803d; font-weight: 500;">${submissionTime}</span>
              </div>

              <!-- Quick action buttons -->
              <div style="margin-bottom: 22px;">
                <a href="tel:${phone.trim()}" style="display: inline-block; background-color: #16a34a; color: #ffffff; text-decoration: none; font-weight: 600; font-size: 13px; padding: 10px 16px; border-radius: 8px; margin-right: 8px; margin-bottom: 8px;">
                  📞 Call Customer (${phone.trim()})
                </a>
                <a href="https://wa.me/${waPhone}?text=${encodeURIComponent(`Hello ${name.trim()}, thank you for contacting TheGarlicFresh regarding your inquiry!`)}" style="display: inline-block; background-color: #25D366; color: #ffffff; text-decoration: none; font-weight: 600; font-size: 13px; padding: 10px 16px; border-radius: 8px; margin-bottom: 8px;">
                  💬 Chat on WhatsApp
                </a>
              </div>

              <!-- Details Table -->
              <table style="width: 100%; border-collapse: collapse; margin-bottom: 22px;">
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 13px; width: 35%; font-weight: 500;">Customer Name</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-size: 14px; font-weight: 600;">${name.trim()}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 13px; font-weight: 500;">Phone Number</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-size: 14px; font-weight: 600;">
                    <a href="tel:${phone.trim()}" style="color: #16a34a; text-decoration: none;">${phone.trim()}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 13px; font-weight: 500;">Email Address</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-size: 14px;">
                    ${email?.trim() ? `<a href="mailto:${email.trim()}" style="color: #16a34a; text-decoration: none;">${email.trim()}</a>` : '<span style="color: #9ca3af; font-style: italic;">Not provided</span>'}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 13px; font-weight: 500;">Inquiry Type</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-size: 14px; font-weight: 600;">${typeLabel}</td>
                </tr>
              </table>

              <!-- Message box -->
              <div style="background-color: #f9fafb; border: 1px solid #e5e7eb; border-radius: 12px; padding: 16px 18px;">
                <p style="margin: 0 0 8px; font-size: 12px; font-weight: 700; color: #4b5563; text-transform: uppercase; letter-spacing: 0.05em;">Message / Garlic Requirement:</p>
                <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #1f2937; white-space: pre-wrap;">${message.trim()}</p>
              </div>
            </div>

            <!-- Footer -->
            <div style="background-color: #f9fafb; padding: 16px 20px; border-top: 1px solid #e5e7eb; text-align: center; font-size: 12px; color: #6b7280;">
              Submitted on <a href="https://thegarlicfresh.in" style="color: #16a34a; text-decoration: none; font-weight: 600;">TheGarlicFresh</a>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    // 2. If user provided a valid email, send them a confirmation receipt
    if (email && email.trim() && email.includes("@")) {
      try {
        await transporter.sendMail({
          from: `"TheGarlicFresh" <${emailUser}>`,
          to: email.trim(),
          subject: `Thank you for contacting TheGarlicFresh, ${name.trim()}!`,
          text: `Hi ${name.trim()},

Thank you for contacting TheGarlicFresh! We have received your inquiry regarding "${typeLabel}".

Our team will review your requirement and connect with you shortly on ${phone.trim()}.

If you have an urgent order or wholesale delivery requirement, feel free to call or WhatsApp us anytime:
Phone / WhatsApp: +91 9354309538
Email: thegarlicfresh@gmail.com
Website: https://thegarlicfresh.in

Best regards,
TheGarlicFresh Team
PCMC PUNE, MIDC Bhosari 411026
`,
          html: `
            <!DOCTYPE html>
            <html>
            <head>
              <meta charset="utf-8">
              <title>Thank you for contacting TheGarlicFresh</title>
            </head>
            <body style="margin: 0; padding: 20px; background-color: #f3f4f6; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1f2937;">
              <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.06); border: 1px solid #e5e7eb;">
                <div style="background: linear-gradient(135deg, #15803d 0%, #16a34a 100%); padding: 26px 20px; text-align: center; color: #ffffff;">
                  <div style="font-size: 34px; margin-bottom: 4px;">🧄</div>
                  <h1 style="margin: 0; font-size: 22px; font-weight: 700;">We've Received Your Inquiry!</h1>
                  <p style="margin: 6px 0 0; font-size: 13px; opacity: 0.9;">Fresh Peeled Garlic Across India</p>
                </div>
                <div style="padding: 24px;">
                  <p style="font-size: 15px; line-height: 1.6; margin-top: 0;">Hi <strong>${name.trim()}</strong>,</p>
                  <p style="font-size: 14px; line-height: 1.6; color: #4b5563;">Thank you for reaching out to us. We have received your inquiry for <strong>${typeLabel}</strong>.</p>
                  <p style="font-size: 14px; line-height: 1.6; color: #4b5563;">Our customer support team will contact you shortly on <strong>${phone.trim()}</strong>.</p>
                  
                  <div style="margin-top: 22px; padding: 18px; background: #f0fdf4; border-radius: 12px; border: 1px solid #bbf7d0; text-align: center;">
                    <p style="margin: 0 0 10px; font-size: 13px; font-weight: 600; color: #166534;">Need immediate bulk supply or faster assistance?</p>
                    <a href="https://wa.me/919354309538" style="display: inline-block; background-color: #16a34a; color: #ffffff; text-decoration: none; font-weight: 700; font-size: 13px; padding: 10px 20px; border-radius: 8px;">
                      Chat with us on WhatsApp (+91 9354309538)
                    </a>
                  </div>
                </div>
                <div style="background-color: #f9fafb; padding: 16px 20px; border-top: 1px solid #e5e7eb; text-align: center; font-size: 12px; color: #6b7280;">
                  TheGarlicFresh • PCMC PUNE, MIDC Bhosari 411026 • <a href="https://thegarlicfresh.in" style="color: #16a34a; text-decoration: none;">thegarlicfresh.in</a>
                </div>
              </div>
            </body>
            </html>
          `,
        });
      } catch (custError) {
        console.warn("Could not send confirmation copy to customer email:", custError);
      }
    }

    return NextResponse.json({ success: true, message: "Inquiry sent successfully!" });
  } catch (error: any) {
    console.error("Error in /api/contact:", error);
    return NextResponse.json(
      { error: error?.message || "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
