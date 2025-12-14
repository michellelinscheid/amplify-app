import { EmailTemplate } from '../../../components/EmailTemplate';
import { Resend } from "resend";
import { render } from "@react-email/render";

import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/data";
import outputs from "@/amplify_outputs.json";

Amplify.configure(outputs);

const client = generateClient();

let backendResponse = await client.queries.sayHello({
  name: "Amplify",
  sec: "Not this"
})

export async function POST(request) {
  
  
  try {
    const resend = new Resend(backendResponse.data);
    const body = await request.json();
    const { firstName, lastName, email, message } = body;

    const html = await render(
      EmailTemplate({
        firstName,
        lastName,
        email,
        message,
      })
    );

    const { data, error } = await resend.emails.send({
      from: `Contact Form <form@michelle-therapy.com>`,
      // from: `Contact Form <onboarding@resend.dev>`,
      to: ["MichelleLtherapy@gmail.com"],
      subject: `Message from ${firstName} ${lastName}`,
      html
    });

    if (error) {
      console.log(`(${error.statusCode}) ${error.name}: ${error.message}`)
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch(error) {
    console.error("Caught error:", error);
    console.error("Stringified:", JSON.stringify(error));
    return Response.json({ error }, {status: 500})
  }

}
