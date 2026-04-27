import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const { businessName, afm, phone, address, quantity } = await req.json();

    const { data, error } = await resend.emails.send({
      from: 'Xirostasio <onboarding@resend.dev>',
      to: ['alex.kartelias@gmail.com'],
      subject: `Νέο Αίτημα Προσφοράς: ${businessName}`,
      html: `
        <h1>Νέο Αίτημα Προσφοράς</h1>
        <p><strong>Όνομα Επιχείρησης:</strong> ${businessName}</p>
        <p><strong>ΑΦΜ:</strong> ${afm}</p>
        <p><strong>Τηλέφωνο:</strong> ${phone}</p>
        <p><strong>Διεύθυνση:</strong> ${address}</p>
        <p><strong>Εκτιμώμενη Ποσότητα / Μήνα:</strong> ${quantity}</p>
      `,
    });

    if (error) {
      console.error("Resend API Error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ data });
  } catch (error: unknown) {
    const err = error as Error;
    console.error("Internal Error:", err);
    return NextResponse.json({ error: err.message || 'Internal Server Error' }, { status: 500 });
  }
}
