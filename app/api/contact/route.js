import { EmailTemplate } from '../../../components/EmailTemplate';
import { Resend } from "resend";
import { render } from "@react-email/render";
import { env } from '$amplify/env/sender'; // the import is '$amplify/env/<function-name>'

// const resend = new Resend(secret('RESEND_API_KEY'));
// const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  console.log("env:")
  console.log(env)
  
  try {
    const body = await request.json();
    const { firstName, lastName, email, message } = body;
    console.log(body)
    // console.log(secret('RESEND_API_KEY'))

    const html = await render(
      EmailTemplate({
        firstName,
        lastName,
        email,
        message,
      })
    );

    

    // const { data, error } = await resend.emails.send({
    //   // from: `Contact Form <form@contact.sunstrand.tech>`,
    //   from: `Contact Form <onboarding@resend.dev>`,
    //   to: ["mat@sunstrand.tech"],
    //   subject: `Message from ${firstName} ${lastName}`,
    //   html
    // });

    // if (error) {
    //   console.log(`(${error.statusCode}) ${error.name}: ${error.message}`)
    //   return Response.json({ error }, { status: 500 });
    // }

    return Response.json(html);
  } catch(error) {
    // console.error("Caught error:", error);
    // console.error("Stringified:", JSON.stringify(error));
    return Response.json({ error }, {status: 500})
  }

}
