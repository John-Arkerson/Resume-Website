import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req, res) {
  try {
    const formData = await req.json();
    const name = formData.Name;
    const email = formData.Email;
    const message = formData.Message;
    console.log(name);
    console.log(email);
    console.log(message);

    resend.emails.send({
      from: email,
      to: "arkersonj1@gmail.com",
      subject: `${name} wants to send you a message`,
      html: `<p>${message}</p>`,
    });

    return new NextResponse("Post Successful", { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Failed to post message",
      },
      {
        status: 500,
      }
    );
  }
}
