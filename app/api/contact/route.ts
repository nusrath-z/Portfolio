import { NextResponse } from "next/server";
import { Resend } from "resend";
import { ContactRequestBody } from "@/types/api";

const resend = new Resend(process.env.RESEND_API_KEY as string);

const contactEmail = process.env.CONTACT_EMAIL;
if (!contactEmail) {
  throw new Error("Missing CONTACT_EMAIL environment variable");
}


export async function POST(req: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      throw new Error("Missing RESEND_API_KEY in environment");
    }

    const body: ContactRequestBody = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "All fields are required" },
        { status: 400 }
      );
    }

    const response = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: contactEmail as string,
      subject: `Portfolio contact from ${name}`,
      replyTo: email,
      text: message,
    });

    if (response.error) {
      return NextResponse.json(
        { success: false, error: response.error.message || "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, id: response.data.id });

  } catch (err: unknown) {
    return NextResponse.json(
      { success: false, error: err instanceof Error ? err.message : String(err) },
      { status: 500 }
    );
  }
}
