// import { NextResponse } from "next/server";
import { EmailTemplate } from '../../../components/EmailTemplate';
import { Resend } from "resend";
import { render } from "@react-email/render";
import { defineAuth, secret } from '@aws-amplify/backend';

const resend = new Resend(secret('RESEND_API_KEY'));

export async function POST(request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, message } = body;
    console.log(body)
    console.log(secret('RESEND_API_KEY'))
    // console.log("render test:", EmailTemplate({ firstName }));
    // console.log(EmailTemplate({firstName: 'John'}))

    const html = await render(
      EmailTemplate({
        firstName,
        lastName,
        email,
        message,
      })
    );

    // console.log(typeof(html))
    // console.log(html)

    const { data, error } = await resend.emails.send({
      from: `Contact Form <form@contact.sunstrand.tech>`,
      // from: `Contact Form <onboarding@resend.dev>`,
      to: ["mat@sunstrand.tech"],
      subject: `Message from ${firstName} ${lastName}`,
      // reply_to: email,
      // react: EmailTemplate({ firstName, lastName, message, email }),
      html
    });

    if (error) {
      console.log(`(${error.statusCode}) ${error.name}: ${error.message}`)
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch(error) {
    // console.error("Caught error:", error);
    // console.error("Stringified:", JSON.stringify(error));
    return Response.json({ error }, {status: 500})
  }

    // return NextResponse.json({ success: true });
  // } catch (error) {
  //   console.error("Error sending email:", error);
  //   return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  // }
}
