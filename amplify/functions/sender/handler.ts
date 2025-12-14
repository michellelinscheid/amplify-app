
import type { Schema } from "../../data/resource"
import { env } from '$amplify/env/sender'; // the import is '$amplify/env/<function-name>'

export const handler: Schema["sayHello"]["functionHandler"] = async (event) => {
  // arguments typed from `.arguments()`
  const { name, sec } = event.arguments
  // return typed from `.returns()`
  return env.RESEND_API_KEY; // `Hello, ${name}! Psst, ${env.RESEND_API_KEY}...`
}

