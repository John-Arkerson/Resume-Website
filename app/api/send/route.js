import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const formData = await req.json();
    const name = formData.Name;
    const email = formData.Email;
    const message = formData.Message;

    const { data, error } = await resend.emails.send({
      from: "EmailNotification@john-arkerson.org",
      to: "arkersonj1@gmail.com",
      subject: `${name} wants to send you a message their email is ${email}`,
      html: `<p>${message}</p>`,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
