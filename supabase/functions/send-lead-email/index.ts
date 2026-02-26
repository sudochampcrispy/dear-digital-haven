import { SMTPClient } from "https://deno.land/x/denomailer@1.6.0/mod.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, whatsapp, needsSeo, website } = await req.json();

    // Validate
    if (!name || !email || !whatsapp || !website || !needsSeo) {
      return new Response(
        JSON.stringify({ error: "All fields are required." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    if (name.length > 100 || email.length > 255 || whatsapp.length > 20 || website.length > 500) {
      return new Response(
        JSON.stringify({ error: "Input too long." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: "Invalid email address." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const smtpHost = Deno.env.get("SMTP_HOST")!;
    const smtpPort = parseInt(Deno.env.get("SMTP_PORT") || "465");
    const smtpUser = Deno.env.get("SMTP_USER")!;
    const smtpPass = Deno.env.get("SMTP_PASS")!;

    const client = new SMTPClient({
      connection: {
        hostname: smtpHost,
        port: smtpPort,
        tls: true,
        auth: {
          username: smtpUser,
          password: smtpPass,
        },
      },
    });

    const htmlBody = `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:20px;">
        <h2 style="color:#0d9488;border-bottom:2px solid #0d9488;padding-bottom:10px;">New Lead Inquiry</h2>
        <table style="width:100%;border-collapse:collapse;margin-top:16px;">
          <tr><td style="padding:8px 12px;font-weight:bold;color:#333;width:40%;">Full Name</td><td style="padding:8px 12px;color:#555;">${escapeHtml(name)}</td></tr>
          <tr style="background:#f9f9f9;"><td style="padding:8px 12px;font-weight:bold;color:#333;">Email</td><td style="padding:8px 12px;color:#555;">${escapeHtml(email)}</td></tr>
          <tr><td style="padding:8px 12px;font-weight:bold;color:#333;">WhatsApp</td><td style="padding:8px 12px;color:#555;">${escapeHtml(whatsapp)}</td></tr>
          <tr style="background:#f9f9f9;"><td style="padding:8px 12px;font-weight:bold;color:#333;">Needs SEO Services</td><td style="padding:8px 12px;color:#555;">${escapeHtml(needsSeo)}</td></tr>
          <tr><td style="padding:8px 12px;font-weight:bold;color:#333;">Website URL</td><td style="padding:8px 12px;color:#555;">${escapeHtml(website)}</td></tr>
        </table>
        <p style="margin-top:20px;font-size:12px;color:#999;">Sent from seoexpertinkarachi.com lead form</p>
      </div>
    `;

    await client.send({
      from: smtpUser,
      to: [
        "info@seoexpertinkarachi.com",
        "naveedganatra1992@gmail.com",
        "naveedganatratech@gmail.com",
      ],
      subject: `New Lead: ${escapeHtml(name)} — SEO Expert in Karachi`,
      content: `New lead from ${name} (${email}). WhatsApp: ${whatsapp}. Needs SEO: ${needsSeo}. Website: ${website}`,
      html: htmlBody,
    });

    await client.close();

    return new Response(
      JSON.stringify({ success: true }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("SMTP Error:", error);
    return new Response(
      JSON.stringify({ error: "Failed to send email. Please try again." }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
