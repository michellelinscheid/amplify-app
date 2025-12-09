import { defineAuth, secret, defineFunction } from "@aws-amplify/backend";

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
// export const auth = defineAuth({
//   loginWith: {
//     email: true,
//   },
// });

export const resendApiKey = secret("RESEND_API_KEY");

export const contactApi = defineFunction({
  entry: '/email_form.js',
  environment: {
    RESEND_API_KEY: secret('RESEND_API_KEY'),
  },
});
